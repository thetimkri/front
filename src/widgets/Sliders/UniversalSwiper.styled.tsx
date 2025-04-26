import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1620px;
  margin-right: auto;
  margin-left: auto;
  --swiper-navigation-color: rgba(255, 255, 255, 0.81);
  --swiper-pagination-color: rgba(255, 255, 255, 0.81);
`;

export const MainSwiper = styled(Swiper)`
  width: 100%;
  border-radius: 16px;
  margin-bottom: 20px;
  height: 810px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: 100%;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 490px;
    margin-bottom: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 472px;
    margin-bottom: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.tablet}) {
    height: 344px;
    margin-bottom: 8px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 256px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 156px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background-color: rgba(68, 68, 68, 0.5);
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease-in-out;
    margin-top: -4px;

    @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
      height: 101%;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      height: 102%;
    }

    &:after {
      font-weight: bold;
      font-size: 2.2rem;

      @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }

    &:hover {
      background-color: rgba(68, 68, 68, 0.8);
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      width: 30px;
    }
  }

  .swiper-button-next {
    top: 0;
    right: 0;
  }

  .swiper-button-prev {
    top: 0;
    left: 0;
  }
`;

export const ThumbsSwiper = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 193px;

  .swiper-slide {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;

      @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
        width: 72px;
      }
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 114px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 112px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 88px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 61px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 36px;
  }
`;

export const ModalOverlay = styled.div`
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
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: -20px;
  right: -40px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 30px;
  cursor: pointer;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    top: -50px;
    right: 0;
  }
`;
