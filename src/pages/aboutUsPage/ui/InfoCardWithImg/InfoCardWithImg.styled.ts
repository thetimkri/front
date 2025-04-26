import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const borderRadiusStyles = {
  roundedLarge: '76px 8px',
  roundedSmall: '16px',
};

export const StyledInfoCardWithImgWrapper = styled.div<{ $borderRadius: string }>`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.$borderRadius};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(228, 215, 199, 0.5), rgba(228, 215, 199, 0.5));
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
    z-index: 1;

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      height: 99%;
    }
  }

  &:hover::before {
    opacity: 0;
  }
`;

export const StyledInfoCardWithImgImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 0;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 289px;
  }
`;
