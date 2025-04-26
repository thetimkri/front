import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';
import { TextLarge_mob } from '@/shared/constants/typography';
import SearchBtn from '@/assets/icons/SearchButton.svg';
import TellBtn from '@/assets/icons/StoryButton.svg';

export const FilterSection = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 30px;
    align-items: flex-start;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    align-items: normal;
    gap: 33px;
  }
`;

export const StoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    align-items: center;
    margin-bottom: 30px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 33px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 30px;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 8px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding-block: 13px;
  padding-inline: 29px;
  padding-right: 95px;
  background: ${colors.input};
  border-radius: 46px;
  transition: outline 0.3s ease-in-out;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding-block: 12px;
    padding-inline: 30px;
    padding-right: 82px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding-right: 45px;
    padding-left: 35px;
  }

  &::placeholder {
    ${TextLarge_mob};
    color: ${colors.grey};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: -2px;
  right: 2px;

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    right: 0;
  }
`;

export const Search = styled(SearchBtn)`
  width: 46px;

  circle {
    transition: stroke 0.2s ease-in-out;

    &:hover {
      stroke: ${colors.hover};
      fill: ${colors.hover};
    }

    &:active {
      stroke: ${colors.accent};
      fill: ${colors.accent};
    }
  }

  & path {
    transition: fill 0.2s ease-in-out;

    &:active {
      fill: ${colors.white};
    }
  }

  &:hover path {
    fill: ${colors.white};
  }
`;

export const StyledStoryButtonLink = styled(NavLink)`
  width: 48px;
  height: 48px;
`;

export const StyledTellBtn = styled(TellBtn)`
  circle {
    transition: stroke 0.3s ease-in-out;
  }

  path {
    transition: stroke 0.2s ease-in-out;
  }

  &:hover {
    circle {
      stroke: ${colors.hover};
    }

    path {
      fill: ${colors.hover};
    }
  }

  &:active path {
    stroke: ${colors.hover};
  }
`;

export const StyledButtonContainer = styled.div`
  width: 191px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;

export const StyledClearButton = styled.button`
  position: absolute;
  right: 72px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    right: 60px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    left: 10px;
    right: 245px;
    justify-content: flex-start;
  }

  svg {
    width: 16px;
    height: 16px;

    & path {
      transition: fill 0.3s ease-in-out;
      fill: ${colors.basic};
    }
  }

  &:hover path {
    fill: ${colors.hover};
  }
`;
