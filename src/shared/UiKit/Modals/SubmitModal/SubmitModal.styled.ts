import { colors } from '@/shared/constants/colors';
import styled, { keyframes } from 'styled-components';
import {
  TitleLarge_desk,
  TitleLarge_tab,
  TitleSmallSemiBold_tab,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

interface ImgProps {
  src: string;
  alt: string;
}

export const SubmitModalOverlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(68, 68, 68, 0.3);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: ${colors.white};
  padding: 40px 95px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  max-width: 90%;
  max-height: 100%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    padding: 20px 40px;
  }
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 24px;
    padding: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    max-width: 100%;
  }
`;

export const Message = styled.p`
  ${TitleLarge_desk};
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleSmallSemiBold_tab};
    font-size: 12px;
  }
`;

export const SubmitModalImg = styled.img<ImgProps>`
  object-fit: cover;
  object-position: center;
  width: 90%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 50%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 80%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 93%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 78%;
  }
  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    width: 93%;
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.9);
    }
`;
