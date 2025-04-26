import styled from 'styled-components';
import { TextBig_desk, TextLarge_desk } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledHeroSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-top: 40px;
  margin-bottom: 37px;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    flex-direction: column;
  }
`;

export const StyledHeroSectionText = styled.p`
  ${TextLarge_desk};
  flex: 1;
  max-width: 50%;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk}
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    max-width: unset;
    flex: unset;
  }
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextBig_desk};
    max-width: unset;
  }
`;

export const StyledHeroSectionImageWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 45%;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 93%;
    border-radius: 16px;
    background: linear-gradient(0deg, rgba(231, 159, 89, 0.3), rgba(255, 255, 255, 0));

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      height: 100%;
    }

    @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
      border-radius: 12px;
    }
  }
`;

export const StyledHeroSectionImage = styled.img`
  width: 100%;
  height: 93%;
  display: block;
  object-fit: cover;
  border-radius: 16px;
  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    border-radius: 12px;
  }
`;
