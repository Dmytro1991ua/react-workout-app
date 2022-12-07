import { useCallback, useEffect } from 'react';

/**
 * Hook for preventing reloading or tab/browser closing when user has unsaved data
 * @param isReloadPrevented - allows to keep track on saved and unsaved user data
 */

export const usePreventReloadHook = (isReloadPrevented: boolean): void => {
  const preventReload = useCallback((event) => {
    const e = event;

    e.preventDefault();
    e.returnValue = '';
  }, []);

  useEffect(() => {
    if (isReloadPrevented) {
      window.addEventListener('beforeunload', preventReload);
    }
    return () => {
      if (isReloadPrevented) {
        window.removeEventListener('beforeunload', preventReload);
      }
    };
  }, [isReloadPrevented, preventReload]);
};
