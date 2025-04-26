import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { TextBig_desk, TextLarge_desk, TextLarge_tab } from '@/shared/constants/typography';

export const CooperationContainer = styled.div`
  display: flex;
  column-gap: 24px;
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
  }
`;

export const CooperationContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 58%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 40px;
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 20px;
  }
`;

export const CooperationBtnWrap = styled.div`
  width: 50%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
  }
`;

export const CooperationDescription = styled.p`
  ${TextLarge_desk};
  width: 778px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    ${TextBig_desk};
    width: 538px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 478px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    width: 444px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    width: 100%;
  }
`;

export const CooperationImg = styled.img`
  object-fit: cover;
  object-position: center;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 558px;
    height: 348px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 478px;
    height: 296px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    width: 460px;
    height: 285px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
    height: 430px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    height: 323px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    width: 100%;
    height: 208px;
  }
`;

export const CooperationTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    margin-bottom: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 8px;
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    margin-bottom: 16px;
  }
`;
