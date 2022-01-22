import { auth } from '../../../firebase';

class AuthService {
  async signUp(email: string, password: string): Promise<void> {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  async resetPassword(email: string) {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.error(error);
    }
  }
}

export const authService = new AuthService();
