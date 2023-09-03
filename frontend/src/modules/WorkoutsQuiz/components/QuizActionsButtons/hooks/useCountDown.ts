import { useEffect, useRef, useState } from 'react';

import { toastService } from '../../../../../services/Toast.service';
import { QUIZ_ENDING_MESSAGE } from '../../../WorkoutQuiz.constants';

type HookProps = {
  seconds: number;
  onQuizReset: () => void;
};

type ReturnedHookType = {
  countDown: number;
};

export const useCountDown = ({ seconds, onQuizReset }: HookProps): ReturnedHookType => {
  const [countDown, setCountDown] = useState<number>(seconds);
  const timerId = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId.current as NodeJS.Timeout);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current as NodeJS.Timeout);
      onQuizReset();
      toastService.info(QUIZ_ENDING_MESSAGE);
    }
  }, [countDown, onQuizReset]);

  return { countDown };
};
