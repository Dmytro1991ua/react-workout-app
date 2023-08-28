import React, { ReactElement, useMemo } from 'react';

import Button from '../../../../components/Button/Button';
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

    return (
      <QuizSection>
        <h2>{title}</h2>
        <ActionsWrapper>
          {actionsButtonsConfig.map((button) => (
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
        </ActionsWrapper>
      </QuizSection>
    );
  }
);

export default QuizIntroductionView;
