import _ from 'lodash';
import React, { ReactElement, useEffect, useMemo } from 'react';
import { Circles } from 'react-loader-spinner';
import { v4 as uuidv4 } from 'uuid';

import Logo from '../../../../assets/images/logo.png';
import Button from '../../../../components/Button/Button';
import { colors } from '../../../../global-styles/ColorsPalette';
import { toastService } from '../../../../services/Toast.service';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import {
  selectAreQuizQuestionsLoading,
  selectCurrentQuestion,
  selectWorkoutsQuizQuestions,
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(loadAvailableWorkoutsQuizQuestionsAction());
    }
  }, [dispatch, isUserAuthenticated]);

  const shuffleQuizQuestions = _.shuffle(quizQuestions);
  const slicedQuizQuestions = _.slice(shuffleQuizQuestions, 0, 10);

  const quizActionButtons = useMemo(
    () => quizQuestionsActionButtonsConfig(onNextQuestionButtonClick, onQuitButtonClick),
    []
  );

  function onNextQuestionButtonClick(): void {
    toastService.info('Not implemented yet');
  }

  function onQuitButtonClick(): void {
    onIsStartQuizButtonClicked(false);
  }

  const renderQuizHeader = (
    <Header>
      <figure>
        <WorkoutLogo src={Logo} alt='Workout Logo' />
      </figure>
      <QuestionsInfoWrapper>
        <h3>Question</h3>
        <h4>1 / {slicedQuizQuestions.length}</h4>
      </QuestionsInfoWrapper>
    </Header>
  );

  const renderQuizQuestions = (
    <>
      <QuestionText>{slicedQuizQuestions[currentQuestion]?.question}</QuestionText>
      {slicedQuizQuestions[currentQuestion]?.answers.map((answer) => (
        <QuizQuestion key={uuidv4()} answer={answer} />
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
        {slicedQuizQuestions
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
          <QuizQuestionsSection>
            {renderQuizHeader}
            {renderQuizQuestions}
            {renderQuizActionButtons}
            {renderQuizFooter}
          </QuizQuestionsSection>
        </>
      )}
    </QuizQuestionsSectionWrapper>
  );

  return <>{renderQuzQuestionSection}</>;
});

export default QuizQuestions;
