import { AppThunk } from '../../store/store';
import { workoutsQuizQuestionsService } from './WorkoutsQuiz.service';
import { setLoadingStatus, setWorkoutsQuizQuestions } from './WorkoutsQuiz.slice';

export const loadAvailableWorkoutsQuizQuestionsAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingStatus('loading'));

    const workoutsQuizQuestions = await workoutsQuizQuestionsService.getAvailableWorkoutsQuizQuestions();

    dispatch(setWorkoutsQuizQuestions(workoutsQuizQuestions));
  } catch (err) {
    dispatch(setLoadingStatus('failed'));
    return dispatch(setWorkoutsQuizQuestions([]));
  }
};
