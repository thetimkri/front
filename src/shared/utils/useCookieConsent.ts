import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '@/shared/constants/storage-keys/storage-keys';

export type CookieConsentValue = 'accepted' | 'rejected' | null;

export const useCookieConsent = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    try {
      const hasConsent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
      if (!hasConsent) {
        setShowCookieBanner(true);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieChoice = (choice: CookieConsentValue) => {
    if (!choice) return;

    try {
      localStorage.setItem(STORAGE_KEYS.COOKIE_CONSENT, choice);
      setShowCookieBanner(false);

      if (choice === 'accepted') {
        initializeServices();
      } else {
        removeNonEssentialCookies();
      }
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  const initializeServices = () => {
    try {
      console.log('Initializing analytics and other cookie-dependent services');
    } catch (error) {
      console.error('Error initializing services:', error);
    }
  };

  const removeNonEssentialCookies = () => {
    try {
      window.postMessage(
        {
          type: 'REMOVE_NON_ESSENTIAL_COOKIES',
          essentialCookies: ['session_id', 'csrf_token'],
        },
        window.location.origin
      );
    } catch (error) {
      console.error('Error removing cookies:', error);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === window.location.origin &&
        event.data?.type === 'REMOVE_NON_ESSENTIAL_COOKIES'
      ) {
        const { essentialCookies } = event.data;
        try {
          const cookies = document.cookie.split(';');
          cookies.forEach((cookie) => {
            const [name] = cookie.split('=').map((c) => c.trim());
            if (!essentialCookies.includes(name)) {
              const domain = window.location.hostname;
              const paths = ['/', ''];
              paths.forEach((path) => {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${domain}`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
              });
            }
          });
        } catch (error) {
          console.error('Error in cookie cleanup:', error);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return {
    showCookieBanner,
    handleCookieChoice,
  };
};
