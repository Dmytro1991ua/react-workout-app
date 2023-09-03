import React, { ReactElement, useMemo } from 'react';

import { generateFormActionButtons } from '../../../../utils';
import { quizIntroductionActionButtonsConfig } from './QuizIntroductionView.configs';
import { ActionsWrapper, QuizSection } from './QuizIntroductionView.styled';

interface QuizIntroductionViewProps {
  title: string;
  onStartQuizButtonClick: () => void;
  onGoBackButtonClick: () => void;
}

const QuizIntroductionView = React.memo(
  ({ title, onStartQuizButtonClick, onGoBackButtonClick }: QuizIntroductionViewProps): ReactElement => {
    const actionsButtonsConfig = useMemo(
      () => quizIntroductionActionButtonsConfig(onStartQuizButtonClick, onGoBackButtonClick),
      [onGoBackButtonClick, onStartQuizButtonClick]
    );

    const actionButtons = useMemo(() => generateFormActionButtons(actionsButtonsConfig), [actionsButtonsConfig]);

    return (
      <QuizSection>
        <h2>{title}</h2>
        <ActionsWrapper>{actionButtons}</ActionsWrapper>
      </QuizSection>
    );
  }
);

export default QuizIntroductionView;
