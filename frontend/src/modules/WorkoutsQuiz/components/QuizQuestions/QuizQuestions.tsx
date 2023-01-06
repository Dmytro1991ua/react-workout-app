import React, { ReactElement, useEffect, useMemo } from 'react';
import { Circles } from 'react-loader-spinner';
import { v4 as uuidv4 } from 'uuid';

import Logo from '../../../../assets/images/logo.png';
import Button from '../../../../components/Button/Button';
import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import {
  clearWorkoutQuiz,
  selectAreQuizQuestionsLoading,
  selectCurrentQuestion,
  selectIsQuizResultsShown,
  selectWorkoutsQuizQuestions,
  setCurrentQuestion,
  setSelectedAnswerOption,
} from '../../WorkoutsQuiz.slice';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { LoaderWrapper } from './../../../Workouts/Workouts.styled';
import { quizQuestionsActionButtonsConfig } from './QuizQuestions.configs';
import {
  ActionButtonsWrapper,
  AnswerIndicator,
  AnswersIndicatorWrapper,
  Footer,
  Header,
  QuestionsInfoWrapper,
  QuestionText,
  QuizQuestionsSection,
  QuizQuestionsSectionWrapper,
  QuizTimer,
  WorkoutLogo,
} from './QuizQuestions.styled';

interface QuizQuestionsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizQuestions = React.memo(({ onIsStartQuizButtonClicked }: QuizQuestionsProps): ReactElement => {
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const isLoading = useAppSelector(selectAreQuizQuestionsLoading);
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const isQuizResultsShown = useAppSelector(selectIsQuizResultsShown);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(loadAvailableWorkoutsQuizQuestionsAction());
    }
  }, [dispatch, isUserAuthenticated]);

  const quizActionButtons = useMemo(
    () => quizQuestionsActionButtonsConfig(handleNextQuestionButtonClick, handleQuizReset),
    []
  );

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

  const renderQuizHeader = (
    <Header>
      <figure>
        <WorkoutLogo src={Logo} alt='Workout Logo' />
      </figure>
      <QuestionsInfoWrapper>
        <h3>Question</h3>
        <h4>
          {currentQuestion + 1} / {quizQuestions.length}
        </h4>
      </QuestionsInfoWrapper>
    </Header>
  );

  const renderQuizQuestions = (
    <>
      <QuestionText>{quizQuestions[currentQuestion]?.question}</QuestionText>
      {quizQuestions[currentQuestion]?.answers.map((answer) => (
        <QuizQuestion key={uuidv4()} answer={answer} onAnswerClick={handleAnswerClick} />
      ))}
    </>
  );

  const renderQuizActionButtons = (
    <ActionButtonsWrapper>
      {quizActionButtons.map((button) => (
        <Button
          key={button.id}
          backgroundColor={button.backgroundColor}
          color={button.color}
          hoverColor={button.hoverColor}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </ActionButtonsWrapper>
  );

  const renderQuizFooter = (
    <Footer>
      <AnswersIndicatorWrapper>
        {quizQuestions
          .map((question) => question.answers)
          .map(() => (
            <AnswerIndicator key={uuidv4()} />
          ))}
      </AnswersIndicatorWrapper>
      <QuizTimer>
        Time Left: <span>00:00</span>
      </QuizTimer>
    </Footer>
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
              {renderQuizHeader}
              {renderQuizQuestions}
              {renderQuizActionButtons}
              {renderQuizFooter}
            </QuizQuestionsSection>
          ) : (
            <button onClick={handleQuizReset}>Back</button>
          )}
        </>
      )}
    </QuizQuestionsSectionWrapper>
  );

  return <>{renderQuzQuestionSection}</>;
});

export default QuizQuestions;
