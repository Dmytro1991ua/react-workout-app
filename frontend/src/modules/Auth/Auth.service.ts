import axios from 'axios';
import firebase from 'firebase';

import { AppRoutes } from '../../App.enums';
import { auth } from '../../firebase';
import history from '../../services/History.service';
import { toastService } from '../../services/Toast.service';
import { API_USER_URL_BASE_URL } from '../Workouts/Workouts.constants';
import { appLifeCycleService } from './../../services/AppLifeCycle.service';
import {
  SUCCESSFUL_FORGOT_PASSWORD_MESSAGE,
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_SIGN_IN_MESSAGE,
  SUCCESSFUL_SIGN_IN_VIA_GOOGLE_MESSAGE,
  SUCCESSFUL_SIGN_UP_MESSAGE,
} from './Auth.constants';

class AuthService {
  async signUp(email: string, password: string): Promise<void> {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push(AppRoutes.Login);
      toastService.success(SUCCESSFUL_SIGN_UP_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const userData = await auth.signInWithEmailAndPassword(email, password);
      const token = await userData?.user?.getIdToken(true);

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
      await auth.sendPasswordResetEmail(email);
      toastService.success(SUCCESSFUL_FORGOT_PASSWORD_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async resetPassword(oobCode: string, newPassword: string): Promise<void> {
    try {
      await auth.confirmPasswordReset(oobCode, newPassword);
      history.push(AppRoutes.Login);
      toastService.success(SUCCESSFUL_FORGOT_PASSWORD_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async signInViaGoogle(): Promise<void> {
    try {
      const userData = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const token = await userData?.user?.getIdToken(true);

      if (token) {
        this.setToken(token);
      }

      history.push(AppRoutes.Workouts);
      toastService.success(SUCCESSFUL_SIGN_IN_VIA_GOOGLE_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async createHeadersWithToken(): Promise<any> {
    try {
      const user = auth.currentUser;
      const token = user && (await user.getIdToken());

      const payloadHeader = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      return payloadHeader;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async validateUser(): Promise<CurrentUser | null> {
    const headersConfig = await this.createHeadersWithToken();

    try {
      const resp = await axios.get(`${API_USER_URL_BASE_URL}/me`, headersConfig);

      if (!resp.data) {
        return null;
      }

      return resp.data;
    } catch (error) {
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
