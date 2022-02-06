import { AppRoutes } from '../../App.enums';
import { auth } from '../../firebase';
import history from '../../services/History.service';
import { toastService } from '../../services/Toast.service';
import {
  SUCCESSFUL_FORGOT_PASSWORD_MESSAGE,
  SUCCESSFUL_LOGOUT_MESSAGE,
  SUCCESSFUL_SIGN_IN_MESSAGE,
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
      await auth.signInWithEmailAndPassword(email, password);
      history.push(AppRoutes.Workouts);
      toastService.success(SUCCESSFUL_SIGN_IN_MESSAGE);
    } catch (error) {
      toastService.error((error as Error).message);
    }
  }

  async logout(): Promise<void> {
    try {
      await auth.signOut();
      toastService.success(SUCCESSFUL_LOGOUT_MESSAGE);
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
}

export const authService = new AuthService();
