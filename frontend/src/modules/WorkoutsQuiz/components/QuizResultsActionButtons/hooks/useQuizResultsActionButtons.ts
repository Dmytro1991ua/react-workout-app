import { useMemo } from 'react';

import { useAppSelector } from '../../../../../store/store.hooks';
import { generateFormActionButtons } from '../../../../../utils';
import { selectSelectedQuestionQuantity } from '../../../WorkoutsQuiz.slice';
import { QuizResultsActionsProps } from '../QuizResultsActionButtons';
import { quizResultsActionButtonsConfig } from '../QuizResultsActionButtons.configs';

type HookReturnedType = {
  questionQuantity?: string;
  quizResultsActionButtons: JSX.Element[];
};

export const useQuizResultsActionButtons = ({
  onQuitButtonClick,
  onTryAgainButtonClick,
}: Pick<QuizResultsActionsProps, 'onQuitButtonClick' | 'onTryAgainButtonClick'>): HookReturnedType => {
  const questionQuantity = useAppSelector(selectSelectedQuestionQuantity);

  const actionButtonsConfig = useMemo(
    () => quizResultsActionButtonsConfig(onTryAgainButtonClick, onQuitButtonClick),

    [onQuitButtonClick, onTryAgainButtonClick]
  );

  const quizResultsActionButtons = useMemo(() => generateFormActionButtons(actionButtonsConfig), [actionButtonsConfig]);

  return {
    questionQuantity,
    quizResultsActionButtons,
  };
};
