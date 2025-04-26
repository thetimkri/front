import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { StyledMainContainer } from './Layout.styled.ts';
import { Footer } from '@/widgets/Footer/index.ts';
import { useCookieConsent } from '@/shared/utils/useCookieConsent.ts';
import { Cookies } from '../UiKit/Cookies/Cookies.tsx';

export const Layout = () => {
  const { showCookieBanner, handleCookieChoice } = useCookieConsent();

  return (
    <StyledMainContainer>
      <Header />
      <Outlet />
      <Footer />
      {showCookieBanner && <Cookies onChoice={handleCookieChoice} />}
    </StyledMainContainer>
  );
};
