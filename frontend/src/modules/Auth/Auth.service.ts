import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getIdToken,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import firebase from 'firebase/compat';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { AppRoutes } from '../../App.enums';
import { AXIOS_CONFIG } from '../../cdk/config/axiosConfig';
import { auth, storage } from '../../firebase';
import history from '../../services/History.service';
import { toastService } from '../../services/Toast.service';
import { store } from '../../store/store';
import { UpdateUserInformation } from '../Profile/Profile.interfaces';
import { appLifeCycleService } from './../../services/AppLifeCycle.service';
import {
  FAILED_PASSWORD_CHANGED_MESSAGE,
  SUCCESSFUL_FORGOT_PASSWORD_MESSAGE,
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_PASSWORD_CHANGED_MESSAGE,
  SUCCESSFUL_SIGN_IN_MESSAGE,
  SUCCESSFUL_SIGN_IN_VIA_GOOGLE_MESSAGE,
  SUCCESSFUL_SIGN_UP_MESSAGE,
} from './Auth.constants';
import { setUpdateUser } from './User.slice';

class AuthService {
  async signUp(email: string, password: string, name: string): Promise<void> {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      await sendEmailVerification(userCredentials.user);
      await updateProfile(userCredentials.user, {
        displayName: name,
        photoURL: null,
      });

      history.push(AppRoutes.Home);
      toastService.success(SUCCESSFUL_SIGN_UP_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      const token = await getIdToken(userData?.user);

      if (token) {
        this.setToken(token);
      }

      history.push(AppRoutes.Workouts);
      toastService.success(SUCCESSFUL_SIGN_IN_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async logout(): Promise<void> {
    try {
      await auth.signOut();
      this.removeToken();
      appLifeCycleService.clearAppDataStorage();
      toastService.success(SUCCESSFUL_LOGOUT_MESSAGE);
      history.push(AppRoutes.Login);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
      toastService.success(SUCCESSFUL_FORGOT_PASSWORD_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async resetPassword(oobCode: string, newPassword: string): Promise<void> {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      history.push(AppRoutes.Login);
      toastService.success(SUCCESSFUL_FORGOT_PASSWORD_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async signInViaGoogle(): Promise<void> {
    try {
      const userData = await signInWithPopup(auth, new firebase.auth.GoogleAuthProvider());
      const token = await getIdToken(userData?.user);

      if (token) {
        this.setToken(token);
      }

      history.push(AppRoutes.Workouts);
      toastService.success(SUCCESSFUL_SIGN_IN_VIA_GOOGLE_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async validateUser(): Promise<CurrentUser | null> {
    try {
      const resp = await AXIOS_CONFIG.get('/api/users/me');

      if (!resp.data) {
        return null;
      }

      return resp.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async uploadFile(image: any, setProgress: (value: number) => void): Promise<void> {
    try {
      const currentUser = auth?.currentUser as User;
      const imageRef = ref(storage, `usersImages/${currentUser?.uid}/${image.name}`);

      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percentUploaded = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          setProgress(percentUploaded);
        },
        (error) => {
          toastService.error((error as Error).message);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          store.dispatch(setUpdateUser({ photoURL: url }));
          setProgress(0);
        }
      );
    } catch (error) {
      toastService.error('Failed to upload image');
      throw new Error((error as Error).message);
    }
  }

  async updateUserData(userData: UpdateUserInformation): Promise<UpdateUserInformation | null> {
    try {
      const resp = await AXIOS_CONFIG.post('/api/users/profile', userData);

      if (!resp.data) {
        return null;
      }

      return resp.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async userReauthentication(currentPassword: string): Promise<UserCredential> {
    try {
      const currentUser = auth?.currentUser as User;
      const userCredentials = EmailAuthProvider.credential(currentUser.email, currentPassword);

      return reauthenticateWithCredential(currentUser, userCredentials);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async changeUserPassword(currentPassword: string, newPassword: string) {
    try {
      const currentUser = auth?.currentUser as User;
      const userReauthenticated = await this.userReauthentication(currentPassword);

      if (userReauthenticated) {
        await updatePassword(currentUser, newPassword);
      }

      history.push(AppRoutes.Home);
      toastService.success(SUCCESSFUL_PASSWORD_CHANGED_MESSAGE);
    } catch (error) {
      toastService.error(FAILED_PASSWORD_CHANGED_MESSAGE);
      throw new Error((error as Error).message);
    }
  }

  getToken(): string {
    return localStorage.getItem('workout-app-token') || '';
  }

  setToken(token: string): void {
    localStorage.setItem('workout-app-token', token);
  }

  private removeToken(): void {
    localStorage.removeItem('workout-app-token');
  }
}

export const authService = new AuthService();
