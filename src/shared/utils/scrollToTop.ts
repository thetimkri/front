import { useLayoutEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollOptions {
  top?: number;
  left?: number;
  behavior?: ScrollBehavior;
}

const scrollToTop = (options: ScrollOptions) => {
  try {
    window.scrollTo(options);
  } catch (error: unknown) {
    console.error('Error during scroll:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    window.scrollTo(options.left || 0, options.top || 0);
  }
};

const scrollToPosition = (options: ScrollOptions) => {
  window.scrollTo(options);
};

export const ScrollToPositionOnMount = ({
  top = 0,
  left = 0,
  behavior = 'smooth',
}: ScrollOptions) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    scrollToPosition({ top, left, behavior });
  }, [pathname, top, left, behavior]);

  return null;
};

export const useScrollToTop = (
  options: ScrollOptions = { top: 0, left: 0, behavior: 'smooth' }
) => {
  return useCallback(() => {
    scrollToTop(options);
  }, [options]);
};

export const smoothScrollToTop = () => {
  const duration = 500;
  const start = window.pageYOffset;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const ease = easeInOutQuad(progress);
    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
