import styled from 'styled-components';
import bg from '@/assets/images/banner/bg.webp';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  H1,
  H1_mob,
  H1_tab,
  TextBig_desk,
  TextLarge_tab_des,
  TextMedium_mob,
  TextMedium_tab,
} from '@/shared/constants/typography';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 16px;

  @media (max-width: 743px) {
    height: 533px;
    flex-direction: column;
    margin-bottom: unset;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: auto;
    margin-top: unset;
    margin-bottom: unset;
  }
`;

const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 101%;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
  z-index: 1;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    background-position: top center;
    height: 219px;
  }

  @media (max-width: 743px) {
    position: relative;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 101%;
  background: linear-gradient(
    to right,
    rgba(244, 243, 239, 0.9) 33%,
    rgba(244, 243, 239, 0.6) 58%,
    rgba(244, 243, 239, 0) 71%
  );
  z-index: 2;
  right: 0;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    background: linear-gradient(
      to right,
      rgba(244, 243, 239, 0.9) 57%,
      rgba(244, 243, 239, 0.6) 64%,
      rgba(244, 243, 239, 0) 85%
    );
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    background: linear-gradient(
      to right,
      rgba(244, 243, 239, 0.9) 54%,
      rgba(244, 243, 239, 0.6) 68%,
      rgba(244, 243, 239, 0) 85%
    );
    top: -1px;
  }

  @media (max-width: 743px) {
    background: linear-gradient(
      to right,
      rgba(244, 243, 239, 0.9) 14%,
      rgba(244, 243, 239, 0.6) 44%,
      rgba(244, 243, 239, 0) 100%
    );
    top: -1px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    background: linear-gradient(
      to right,
      rgba(244, 243, 239, 0.9) 0%,
      rgba(244, 243, 239, 0.7) 0%,
      rgba(244, 243, 239, 0) 100%
    );
    top: -1px;
  }
`;

const SecondImage = styled.img`
  position: absolute;
  height: 117%;
  background-size: cover;
  z-index: 3;
  right: 40px;
  top: -17%;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 117%;
    right: 40px;
    top: -17%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    height: 117%;
    right: 23px;
    top: -17%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    right: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    right: 73px;
  }
`;

const BannerContent = styled.div`
  width: 590px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 44px 0 41px 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    text-wrap: auto;
    padding: 44px 0 44px 24px;
    width: 550px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: 743px) {
    margin-top: 32px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-top: unset;
  }
`;

const BannerTitle = styled.h1`
  ${H1};
  color: ${MainTheme.colors.basic};
  margin-bottom: 16px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H1_tab};
    padding-top: 30px;
    padding-left: 40px;
    margin-bottom: 20px;
  }

  @media (max-width: 743px) {
    padding: 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H1_mob};
    padding: 0;
    margin-bottom: 16px;
  }

  @media (min-width: 320px) and (max-width: 355px) {
    font-size: 19px;
  }
`;

const BannerSpan = styled.span`
  display: inline;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BannerDescription = styled.p`
  ${TextLarge_tab_des};
  color: ${MainTheme.colors.basic};
  margin-bottom: 12px;
  padding-right: 88px;
  text-align: left;

  &:nth-child(2) {
    margin-bottom: 12px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      padding-top: 0;
      margin-bottom: 0;
      padding-right: 270px;
    }

    @media (max-width: 743px) {
      padding: 0;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      ${TextMedium_mob};
    }
  }

  &:nth-child(3) {
    line-height: 128%;

    @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
      margin-bottom: 13px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      padding-right: 357px;
      line-height: 145%;
    }

    @media (max-width: 743px) {
      padding: 0;
      margin-top: 12px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      ${TextMedium_mob};
      margin-bottom: 0;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    ${TextBig_desk};
    padding-right: 61px;
    line-height: 128%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_tab};
    padding-top: 10px;
    padding-left: 40px;
  }
`;

const BannerWrapper = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-top: 63px;
  }

  @media (max-width: 743px) {
    margin-top: 24px;
    flex-direction: column;
  }

  & a:first-of-type {
    padding: 12px 0;
    width: 42%;

    @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
      padding: 13px 0;
      width: 49.5%;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      width: 100%;
    }
  }

  & a:last-of-type {
    padding: 12px 0;
    width: 42%;

    @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
      padding: 12px 0;
      width: 41%;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      width: 100%;
    }
  }
`;

export {
  BannerContainer,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerWrapper,
  BannerContent,
  GradientOverlay,
  SecondImage,
  BannerSpan,
};
