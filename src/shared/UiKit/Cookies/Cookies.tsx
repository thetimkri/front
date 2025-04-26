import { PrimaryButton } from '@/shared/UiKit/Buttons';
import {
  ButtonsWrapper,
  CookiesContainer,
  CookiesText,
} from '@/shared/UiKit/Cookies/Cookies.styled';
import { CookieConsentValue } from '@/shared/utils/useCookieConsent.ts';
import CookiesPdf from '@/assets/files/Cookies.pdf';

interface CookieConsentBannerProps {
  onChoice: (choice: CookieConsentValue) => void;
}

export const Cookies = ({ onChoice }: CookieConsentBannerProps) => {
  return (
    <CookiesContainer>
      <CookiesText>
        Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и
        делать его лучше. Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
        <a href={CookiesPdf} download={true} aria-label="Согласие пользователя сайта">
          использованием файлов cookie
        </a>
        .
      </CookiesText>
      <ButtonsWrapper>
        <PrimaryButton onClick={() => onChoice('accepted')} label="Принять" $btnType="colored" />
      </ButtonsWrapper>
    </CookiesContainer>
  );
};
