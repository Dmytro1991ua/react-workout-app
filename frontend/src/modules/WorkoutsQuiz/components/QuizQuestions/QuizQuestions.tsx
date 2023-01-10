import React, { ReactElement, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import {
  clearWorkoutQuiz,
  selectAreQuizQuestionsLoading,
  selectIsQuizResultsShown,
  setCurrentQuestion,
  setSelectedAnswerOption,
} from '../../WorkoutsQuiz.slice';
import QuizActionsButtons from '../QuizActionsButtons/QuizActionButtons';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizHeader from '../QuizHeader/QuizHeader';
import QuizResults from '../QuizResults/QuizResults';
import { LoaderWrapper } from './../../../Workouts/Workouts.styled';
import { QuizQuestionsSection, QuizQuestionsSectionWrapper } from './QuizQuestions.styled';

interface QuizQuestionsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizQuestions = React.memo(({ onIsStartQuizButtonClicked }: QuizQuestionsProps): ReactElement => {
  const isLoading = useAppSelector(selectAreQuizQuestionsLoading);
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const isQuizResultsShown = useAppSelector(selectIsQuizResultsShown);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(loadAvailableWorkoutsQuizQuestionsAction());
    }
  }, [dispatch, isUserAuthenticated]);

  function handleNextQuestionButtonClick(): void {
    dispatch(setCurrentQuestion());
  }

  function handleQuizReset(): void {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());
  }

  function handleAnswerClick(isAnswerCorrect: boolean, answerOption: string): void {
    dispatch(setSelectedAnswerOption({ isAnswerCorrect, answerOption }));
  }

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
              <QuizAnswers onAnswerClick={handleAnswerClick} />
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
