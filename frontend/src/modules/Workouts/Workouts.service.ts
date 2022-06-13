import { AXIOS_CONFIG } from '../../config/axiosConfig';

class WorkoutsService {
  async getAvailableWorkouts(): Promise<WorkoutItem[]> {
    try {
      const response = await AXIOS_CONFIG.get('/workouts');

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
      const response = await AXIOS_CONFIG.post('/workouts', workoutData);

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
      const response = await AXIOS_CONFIG.put(`${'/workouts'}/${id}`, workoutData);

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
      const response = await AXIOS_CONFIG.delete(`${'/workouts'}/${id}`);

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
      const resp = await AXIOS_CONFIG.delete(`${'/workouts'}/deleteAllWorkouts`);

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
      const resp = await AXIOS_CONFIG.put(`${'/workouts'}/${id}/addToFavorites`, {});

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
