import { useCallback, useState } from 'react';

import { AppRoutes } from '../../../App.enums';
import history from '../../../services/History.service';

type ReturnedHookType = {
  isStartQuizButtonClicked: boolean;
  onStartQuizButtonClick: () => void;
  onGoBackButtonClick: () => void;
  onSetIsStartQuizButtonClicked: (value: boolean) => void;
};

export const useWorkoutsQuiz = (): ReturnedHookType => {
  const [isStartQuizButtonClicked, setIsStartQuizButtonClicked] = useState<boolean>(false);

  const onStartQuizButtonClick = useCallback((): void => {
    setIsStartQuizButtonClicked(true);
  }, []);

  const onGoBackButtonClick = useCallback((): void => {
    history.push(AppRoutes.Home);
  }, []);

  return {
    isStartQuizButtonClicked,
    onStartQuizButtonClick,
    onGoBackButtonClick,
    onSetIsStartQuizButtonClicked: setIsStartQuizButtonClicked,
  };
};
