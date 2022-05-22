import { clearUser } from '../modules/Auth/Auth.slice';
import { store } from '../store/store';

class AppLifeCycleService {
  clearAppDataStorage(): void {
    store.dispatch(clearUser());
  }
}

export const appLifeCycleService = new AppLifeCycleService();
