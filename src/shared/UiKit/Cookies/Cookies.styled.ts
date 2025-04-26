import { colors } from '@/shared/constants/colors';
import styled from 'styled-components';
import { TextBig_desk, TextLarge_desk, TextMedium_mob } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const CookiesContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  border-radius: 16px 16px 0 0;
  padding: 40px 206px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:
    0px 8px 24px -4px rgba(24, 39, 75, 0.08),
    0px 6px 12px -6px rgba(24, 39, 75, 0.12);
  z-index: 9999;
  width: 100%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    padding: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding: 24px 150px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    padding: 24px 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
    gap: 16px;
    padding: 16px 24px;
  }
`;

export const CookiesText = styled.p`
  color: ${colors.basic};
  ${TextLarge_desk};
  width: 90%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    font-size: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    ${TextBig_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 83%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    ${TextMedium_mob};
  }

  a {
    color: ${colors.accent};
    border-bottom: 2px dotted ${colors.accent};
  }
`;

export const ButtonsWrapper = styled.div`
  width: 180px;
  height: 48px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 140px;
    height: 48px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    width: 97px;
    height: 48px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }
`;
