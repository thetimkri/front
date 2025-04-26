import styled from 'styled-components';
import {
  H2,
  H2_mob,
  H2_tab,
  H3,
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
} from '@/shared/constants/typography';

const bluredBg = `
  content: '';
  position: absolute;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 107%;
  background: radial-gradient(circle, rgba(47, 128, 237, 0.5) 0%, rgba(47, 128, 237, 0) 81%);
  z-index: 0;
  filter: blur(80px);
`;

const StyledErrorPageContainer = styled.main`
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1620px;

  &::before {
    ${bluredBg};

    @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
      top: 50%;
      left: 62%;
      width: 65%;
      height: 59%;
      background: radial-gradient(circle, rgba(47, 128, 237, 0.7) 0%, rgba(47, 128, 237, 0) 81%);
      filter: blur(116px);
    }

    @media (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
      top: 48%;
      left: 60%;
      width: 84%;
      height: 38%;
      background: radial-gradient(circle, rgba(47, 128, 237, 0.7) 0%, rgba(47, 128, 237, 0) 81%);
      filter: blur(47px);
    }

    @media (max-width: 470px) {
      top: 40%;
    }
  }
`;

const StyledErrorPageImageWrapper = styled.div`
  position: relative;

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    width: 100%;
  }
`;

const StyledErrorPageImage = styled.img`
  width: 100%;
  max-width: 856px;

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    margin-left: 89px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    margin-left: 0;
    padding: 0 28px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
    margin-left: 0;
    padding: 0;
  }
`;

const StyledErrorPageContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 573px;
  position: absolute;
  left: 0;
  bottom: 23%;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    bottom: 27%;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    bottom: 31%;
    left: 1px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    position: relative;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
    max-width: 100%;
    bottom: 0;
    margin-top: 32px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
    margin-top: 19px;
  }
`;

const StyledErrorPageTitle = styled.h2`
  ${H2};
  line-height: 100%;
  margin-bottom: 40px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    ${H3};
    line-height: 140%;
    margin-bottom: 24px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
    ${H2_mob};
    margin-bottom: 20px;
  }
`;

const StyledErrorPageText = styled.p`
  ${TextLarge_desk};
  line-height: 130%;
  max-width: 516px;
  margin-bottom: 32px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    line-height: 128%;
    max-width: 370px;
    margin-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    width: 100%;
    max-width: 100%;
    line-height: 130%;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
    ${TextLarge_mob};
    line-height: 128%;
    margin-bottom: 16px;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  width: 279px;

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
  }
`;

export {
  StyledErrorPageContainer,
  StyledErrorPageImage,
  StyledBtnWrapper,
  StyledErrorPageTitle,
  StyledErrorPageText,
  StyledErrorPageContent,
  StyledErrorPageImageWrapper,
};
