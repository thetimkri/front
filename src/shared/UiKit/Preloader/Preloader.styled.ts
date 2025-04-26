import { MainTheme } from '@/shared/constants/theme/MainTheme';
import styled from 'styled-components';

export const PreloaderContainer = styled.div<{ $pageLoad: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${({ $pageLoad }) => ($pageLoad ? '600px' : '100%')};

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 328px;
  }

  @media (min-width: ${MainTheme.mediaWidth.sMobile}) and (max-width: ${MainTheme.mediaWidth
      .smallDesktop}) {
    height: 418px;
  }

  @media (min-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 600px;
  }

  & svg {
    position: relative;
    align-self: center;
    z-index: 3;

    @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
      width: 90px;
      height: 90px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      width: 70px;
      height: 70px;
    }
  }

  & svg path {
    transition: fill 0.3s ease;
  }
`;

export const Container = styled.div<{ $pageLoad: boolean }>`
  position: relative;
  align-self: ${({ $pageLoad }) => ($pageLoad ? 'center' : 'flex-start')};
`;

export const PreloaderBackgroundBlue = styled.div`
  content: '';
  position: absolute;
  background-color: rgba(168, 210, 237, 0.8);
  width: 248px;
  height: 270px;
  top: -149px;
  left: 4px;
  border-radius: 50%;
  z-index: 2;
  filter: blur(37.3px);
  will-change: filter;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 172px;
    height: 188px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    top: -188px;
    left: 4px;
  }

  @media (max-width: 768px) {
    top: -108px;
    left: 4px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 135px;
    height: 147px;
    top: -84px;
    left: 2px;
  }
`;

export const PreloaderBackgroundGreen = styled.div`
  content: '';
  position: absolute;
  background-color: rgba(182, 237, 168, 0.8);
  width: 228px;
  height: 248px;
  top: -48px;
  left: -143px;
  border-radius: 50%;
  z-index: 1;
  filter: blur(37.3px);
  will-change: filter;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 158px;
    height: 173px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    top: -92px;
    left: -171px;
  }

  @media (max-width: 768px) {
    top: -22px;
    left: -98px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 124px;
    height: 135px;
    top: -18px;
    left: -78px;
  }
`;

export const PreloaderBackgroundYellow = styled.div`
  content: '';
  position: absolute;
  background-color: rgba(235, 237, 168, 0.8);
  width: 228px;
  height: 248px;
  top: 40px;
  left: 6px;
  border-radius: 50%;
  z-index: 0;
  filter: blur(37.3px);
  will-change: filter;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 158px;
    height: 173px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    top: 31px;
    left: 4px;
  }

  @media (max-width: 768px) {
    top: 32px;
    left: 4px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 124px;
    height: 135px;
    top: 24px;
    left: 2px;
  }
`;
