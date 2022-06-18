import { useEffect, useState } from 'react';

const MOBILE_SCREEN_MAX_WIDTH = 768;

const useDeviceDetect = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;

    setIsMobile(width <= MOBILE_SCREEN_MAX_WIDTH);
  }, []);

  return isMobile;
};

export default useDeviceDetect;
