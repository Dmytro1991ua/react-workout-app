import { AXIOS_CONFIG } from '../../cdk/config/axiosConfig';
import { toastService } from '../../services/Toast.service';

class WorkoutsQuizQuestionsService {
  async getAvailableWorkoutsQuizQuestions(): Promise<WorkoutQuiz[]> {
    try {
      const response = await AXIOS_CONFIG.get('/api/workouts-quiz');

      if (!response.data) {
        return [];
      }

      return response.data;
    } catch (err) {
      toastService.error('Failed to load workouts quiz questions');
      throw new Error((err as Error).message);
    }
  }
}

export const workoutsQuizQuestionsService = new WorkoutsQuizQuestionsService();
