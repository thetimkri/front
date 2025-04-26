import AppRoutes from '@/app/routes';
import { AppStyles } from './AppStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ScrollToPositionOnMount } from '@/shared/utils/scrollToTop.ts';
import React from 'react';

export const App = () => {
  return (
    <>
      <AppStyles />
      <ScrollToPositionOnMount top={0} />
      {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={true} />}
      <AppRoutes />
    </>
  );
};
