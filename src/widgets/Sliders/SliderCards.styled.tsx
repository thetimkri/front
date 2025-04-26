import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrapper = styled.div`
  position: relative;
  padding: 0 52px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    padding: 0;
  }

  & a:active {
    cursor: grabbing;
  }

  .custom-pagination {
    display: flex;
    justify-content: center;
    height: 20px;
    margin-top: 20px;
    align-items: center;
  }

  .swiper-pagination-bullet {
    position: relative;
    background-color: ${colors.grey};
    width: 13px;
    height: 13px;
    transition: background-color 0.5s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: ${colors.accent};
    width: 9px;
    height: 9px;
  }

  .swiper-pagination-bullet::after {
    content: '';
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .swiper-pagination-bullet-active::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    opacity: 1;
    border: 2px solid ${colors.accent};
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
      margin-top: 22px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-top: 20px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    .custom-pagination {
      margin-top: 16px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    .custom-pagination {
      margin-top: 13px;
    }
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  overflow: visible;
  overflow-x: clip;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
`;

export const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  cursor: pointer;

  &:nth-child(2) {
    position: absolute;
    top: 36%;
    left: -9px;
    z-index: 100;
    transform: rotate(180deg);
  }

  &:nth-child(3) {
    position: absolute;
    top: 41%;
    right: -9px;
    z-index: 100;
  }

  &.swiper-button-prev {
    transform: rotate(180deg);
  }

  &.swiper-button-prev svg,
  &.swiper-button-next svg {
    width: revert-layer;
    height: revert-layer;
    object-fit: contain;
    transform-origin: center;
  }

  &.swiper-button-prev:after,
  &.swiper-button-next:after {
    content: '';
    font-size: 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    &:nth-child(2) {
      display: none;
    }

    &:nth-child(3) {
      display: none;
    }
  }
`;
