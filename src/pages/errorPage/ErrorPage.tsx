import { PrimaryButton } from '@/shared/UiKit/Buttons';
import {
  StyledBtnWrapper,
  StyledErrorPageContainer,
  StyledErrorPageContent,
  StyledErrorPageImage,
  StyledErrorPageImageWrapper,
  StyledErrorPageText,
  StyledErrorPageTitle,
} from './ErrorPage.styled';

import girlImg from '@/assets/images/errorPage/img.png';
import { page } from '@/shared/constants/navigation/page.ts';

export const ErrorPage = () => {
  return (
    <StyledErrorPageContainer>
      <StyledErrorPageImageWrapper>
        <StyledErrorPageImage src={girlImg} alt="Фоновое изображение" />
      </StyledErrorPageImageWrapper>
      <StyledErrorPageContent>
        <StyledErrorPageTitle>Ой! Похоже, этой страницы не&nbsp;существует.</StyledErrorPageTitle>
        <StyledErrorPageText>
          Не&nbsp;волнуйтесь, давайте вернёмся на&nbsp;главную и&nbsp;продолжим наше путешествие
          по&nbsp;миру добрых дел. Спасибо за&nbsp;понимание! 😊
        </StyledErrorPageText>
        <StyledBtnWrapper>
          <PrimaryButton $btnType="colored" link={page.mainPage} label="На главную страницу" />
        </StyledBtnWrapper>
      </StyledErrorPageContent>
    </StyledErrorPageContainer>
  );
};
