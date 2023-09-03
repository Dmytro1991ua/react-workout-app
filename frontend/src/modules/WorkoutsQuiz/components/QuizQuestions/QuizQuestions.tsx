import React, { ReactElement } from 'react';
import { Circles } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { QUIZ_FALLBACK_MESSAGE_SUBTITLE, QUIZ_FALLBACK_MESSAGE_TITLE } from '../../WorkoutQuiz.constants';
import QuizActionsButtons from '../QuizActionsButtons/QuizActionButtons';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import QuizHeader from '../QuizHeader/QuizHeader';
import QuizResults from '../QuizResults/QuizResults';
import FallbackMessage from './../../../Workouts/components/FallbackMessage/FallbackMessage';
import { LoaderWrapper } from './../../../Workouts/Workouts.styled';
import { useQuizQuestions } from './hooks/useQuizQuestions';
import { QuizConfigKey } from './Quiz.Questions.enums';
import { QuizQuestionsSection, QuizQuestionsSectionWrapper } from './QuizQuestions.styled';
import { QuizContentConfig } from './QuizQuestions.type';

export interface QuizQuestionsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizQuestions = React.memo(({ onIsStartQuizButtonClicked }: QuizQuestionsProps): ReactElement => {
  const { isLoading, isQuizResultsShown, quizQuestionsLength, onAnswerClick, onNextQuestionButtonClick, onQuizReset } =
    useQuizQuestions({ onIsStartQuizButtonClicked });

  const QUIZ_QUESTIONS_CONFIG: QuizContentConfig = {
    [QuizConfigKey.Loader]: (
      <LoaderWrapper>
        <Circles color={colors.mantis} height={150} width={150} />
      </LoaderWrapper>
    ),
    [QuizConfigKey.QuizQuestionsSection]: (
      <QuizQuestionsSection>
        <QuizHeader />
        <QuizAnswers onAnswerClick={onAnswerClick} />
        <QuizActionsButtons onNextQuestionButtonClick={onNextQuestionButtonClick} onQuizReset={onQuizReset} />
      </QuizQuestionsSection>
    ),
    [QuizConfigKey.FallbackMessage]: (
      <FallbackMessage
        message={QUIZ_FALLBACK_MESSAGE_SUBTITLE}
        title={QUIZ_FALLBACK_MESSAGE_TITLE}
        isQuizFallbackMessage
      />
    ),
  };

  const renderQuizContent = (): JSX.Element => {
    if (isLoading) {
      return QUIZ_QUESTIONS_CONFIG[QuizConfigKey.Loader];
    }

    if (!isQuizResultsShown && !quizQuestionsLength) {
      return QUIZ_QUESTIONS_CONFIG[QuizConfigKey.FallbackMessage];
    }

    if (!isQuizResultsShown) {
      return QUIZ_QUESTIONS_CONFIG[QuizConfigKey.QuizQuestionsSection];
    }

    return <QuizResults onIsStartQuizButtonClicked={onIsStartQuizButtonClicked} />;
  };

  const renderQuizQuestionSection = <QuizQuestionsSectionWrapper>{renderQuizContent()}</QuizQuestionsSectionWrapper>;

  return <>{renderQuizQuestionSection}</>;
});

export default QuizQuestions;
