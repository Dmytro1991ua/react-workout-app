import React, { ReactElement, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { QUIZ_FALLBACK_MESSAGE_SUBTITLE, QUIZ_FALLBACK_MESSAGE_TITLE } from '../../WorkoutQuiz.constants';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import {
  clearWorkoutQuiz,
  selectAreQuizQuestionsLoading,
  selectIsQuizResultsShown,
  selectWorkoutsQuizQuestions,
  setClearQuestionQuantity,
  setCurrentQuestion,
  setSelectedAnswerOption,
} from '../../WorkoutsQuiz.slice';
import QuizActionsButtons from '../QuizActionsButtons/QuizActionButtons';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizHeader from '../QuizHeader/QuizHeader';
import QuizResults from '../QuizResults/QuizResults';
import FallbackMessage from './../../../Workouts/components/FallbackMessage/FallbackMessage';
import { LoaderWrapper } from './../../../Workouts/Workouts.styled';
import { FallbackMessageWrapper, QuizQuestionsSection, QuizQuestionsSectionWrapper } from './QuizQuestions.styled';

interface QuizQuestionsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizQuestions = React.memo(({ onIsStartQuizButtonClicked }: QuizQuestionsProps): ReactElement => {
  const isLoading = useAppSelector(selectAreQuizQuestionsLoading);
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const isQuizResultsShown = useAppSelector(selectIsQuizResultsShown);
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(loadAvailableWorkoutsQuizQuestionsAction());
    }
  }, [dispatch, isUserAuthenticated]);

  function handleNextQuestionButtonClick(): void {
    dispatch(setCurrentQuestion());
    dispatch(setClearQuestionQuantity());
  }

  function handleQuizReset(): void {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());
  }

  function handleAnswerClick(answerOption: string): void {
    dispatch(setSelectedAnswerOption(answerOption));
  }

  const renderQuizAnswers = (
    <>
      {quizQuestions.length > 0 ? (
        <QuizAnswers onAnswerClick={handleAnswerClick} />
      ) : (
        <FallbackMessageWrapper>
          <FallbackMessage
            message={QUIZ_FALLBACK_MESSAGE_SUBTITLE}
            title={QUIZ_FALLBACK_MESSAGE_TITLE}
            isQuizFallbackMessage
          />
        </FallbackMessageWrapper>
      )}
    </>
  );

  const renderQuzQuestionSection = (
    <QuizQuestionsSectionWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Circles color={colors.mantis} height={150} width={150} />
        </LoaderWrapper>
      ) : (
        <>
          {!isQuizResultsShown ? (
            <QuizQuestionsSection>
              <QuizHeader />
              {renderQuizAnswers}
              <QuizActionsButtons
                onNextQuestionButtonClick={handleNextQuestionButtonClick}
                onQuizReset={handleQuizReset}
              />
            </QuizQuestionsSection>
          ) : (
            <QuizResults onIsStartQuizButtonClicked={onIsStartQuizButtonClicked} />
          )}
        </>
      )}
    </QuizQuestionsSectionWrapper>
  );

  return <>{renderQuzQuestionSection}</>;
});

export default QuizQuestions;
