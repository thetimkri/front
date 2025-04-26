import styled from 'styled-components';

import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';
import { TextLarge_mob } from '@/shared/constants/typography';
import SearchBtn from '@/assets/icons/SearchButton.svg';

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  position: relative;
`;

export const StyledSearchInput = styled.input`
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
    display: block;
    width: 16px;
    height: 16px;
    fill: currentColor;
    color: #444444;
    transition: color 0.3s;
  }

  &:hover svg {
    color: ${colors.hover};
  }
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  top: -2px;
  right: 2px;

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    right: 0;
  }
`;

export const StyledSearch = styled(SearchBtn)`
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
