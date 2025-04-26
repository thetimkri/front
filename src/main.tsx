import { GoogleReCaptchaProvider } from '@google-recaptcha/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/queryClient';

import { App } from '@/app/App.tsx';
import { CAPTCHA_KEY } from '@/shared/utils/recaptcha.ts';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={MainTheme}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <GoogleReCaptchaProvider type="v2-checkbox" siteKey={CAPTCHA_KEY}>
          <App />
        </GoogleReCaptchaProvider>
      </Router>
    </QueryClientProvider>
  </ThemeProvider>
);
