import axios from 'axios';
import { authService } from '../Auth/Auth.service';

import { API_WORKOUTS_URL_BASE_URL } from './Workouts.constants';

class WorkoutsService {
  async getAvailableWorkouts(): Promise<WorkoutItem[]> {
    try {
      const headersConfig = await authService.createHeadersWithToken();
      const response = await axios.get(API_WORKOUTS_URL_BASE_URL, headersConfig);

      if (!response.data) {
        return [];
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async createNewWorkout(workoutData: WorkoutItem): Promise<WorkoutItem | null> {
    try {
      const config = await authService.createHeadersWithToken();
      const response = await axios.post(API_WORKOUTS_URL_BASE_URL, workoutData, config);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async updateWorkout(id: string, workoutData: WorkoutItem): Promise<WorkoutItem | null> {
    const config = await authService.createHeadersWithToken();

    try {
      const response = await axios.put(`${API_WORKOUTS_URL_BASE_URL}/${id}`, workoutData, config);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteWorkout(id: string): Promise<string | null> {
    const config = await authService.createHeadersWithToken();

    try {
      const response = await axios.delete(`${API_WORKOUTS_URL_BASE_URL}/${id}`, config);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteAllWorkouts(): Promise<boolean | null> {
    const config = await authService.createHeadersWithToken();

    try {
      const resp = await axios.delete(`${API_WORKOUTS_URL_BASE_URL}/deleteAllWorkouts`, config);

      if (!resp.data) {
        return null;
      }

      return resp.data.success;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async addWorkoutToFavorites(id: string): Promise<WorkoutItem | null> {
    const config = await authService.createHeadersWithToken();

    try {
      const resp = await axios.put(`${API_WORKOUTS_URL_BASE_URL}/${id}/addToFavorites`, {}, config);

      if (!resp.data) {
        return null;
      }

      return resp.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }
}

export const workoutService = new WorkoutsService();
