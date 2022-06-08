import axios from 'axios';
import { API_URL_BASE_URL } from './Workouts.constants';

class WorkoutsService {
  async getAvailableWorkouts(): Promise<WorkoutItem[]> {
    try {
      const response = await axios.get(API_URL_BASE_URL);

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
      const response = await axios.post(API_URL_BASE_URL, workoutData);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async updateWorkout(id: string, workoutData: WorkoutItem): Promise<WorkoutItem | null> {
    try {
      const response = await axios.put(`${API_URL_BASE_URL}/${id}`, workoutData);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteWorkout(id: string): Promise<string | null> {
    try {
      const response = await axios.delete(`${API_URL_BASE_URL}/${id}`);

      if (!response.data) {
        return null;
      }

      return response.data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async deleteAllWorkouts(): Promise<boolean | null> {
    try {
      const resp = await axios.delete(`${API_URL_BASE_URL}/deleteAllWorkouts`);

      if (!resp.data) {
        return null;
      }

      return resp.data.success;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  async addWorkoutToFavorites(id: string): Promise<WorkoutItem | null> {
    try {
      const resp = await axios.put(`${API_URL_BASE_URL}/${id}/addToFavorites`);

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
