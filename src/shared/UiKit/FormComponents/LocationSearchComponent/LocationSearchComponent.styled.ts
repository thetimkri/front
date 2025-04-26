import styled from 'styled-components';
import { TextBig_desk, TextMedium_desk } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchContainer = styled.ul`
  background-color: ${colors.bg};
  border-radius: 16px;
  list-style: none;
  position: absolute;
  width: 100%;
  max-height: calc(50vh - 200px);
  overflow-y: auto;
  overflow-x: clip;
  scroll-behavior: smooth;
  z-index: 10;
  scrollbar-width: thin;
  scrollbar-color: ${colors.accent} transparent;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    max-height: calc(50vh - 150px);
    min-height: 50px;
  }

  &::-webkit-scrollbar {
    width: 4px;

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      width: 2px;
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.accent};
    border-radius: 2px;

    &:hover {
      background-color: ${colors.hover};
    }
  }
`;

export const SearchList = styled.li`
  ${TextBig_desk};
  color: ${colors.basic};
  cursor: pointer;
  padding: clamp(10px, 2vw, 15px);
  border-radius: 16px;
  transition: color 0.3s ease-in-out;
  width: 100%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_desk};
    border-radius: 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    border-radius: 8px;
  }

  &:hover {
    color: ${colors.hover};
  }
`;
