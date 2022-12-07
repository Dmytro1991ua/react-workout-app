import { createBrowserHistory } from 'history';

import { CustomUserLeaveWarningPopup } from '../modules/Workouts/components/CustomUserLeaveWarningPopup/CustomUserLeaveWarningPopup';

const history = createBrowserHistory({
  getUserConfirmation: (message: string, callback: (result: boolean) => void) =>
    CustomUserLeaveWarningPopup(message, callback),
});

export default history;
