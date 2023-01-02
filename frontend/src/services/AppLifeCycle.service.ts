import { clearUser } from '../modules/Auth/User.slice';
import { clearWeatherDetails } from '../modules/WeatherDetails/WeatherDetails.slice';
import { clearWorkouts } from '../modules/Workouts/Workouts.slice';
import { clearWorkoutQuiz } from '../modules/WorkoutsQuiz/WorkoutsQuiz.slice';
import { store } from '../store/store';

class AppLifeCycleService {
  clearAppDataStorage(): void {
    store.dispatch(clearUser());
    store.dispatch(clearWorkouts());
    store.dispatch(clearWeatherDetails());
    store.dispatch(clearWorkoutQuiz());
  }
}

export const appLifeCycleService = new AppLifeCycleService();
