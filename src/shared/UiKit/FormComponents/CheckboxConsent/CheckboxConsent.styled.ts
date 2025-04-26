import styled from 'styled-components';
import { TextMedium_tab, TextSmall_mob } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';

// Контейнер для чекбокса и метки
export const ConsentContainer = styled.div`
  padding-top: 2px;
  ${TextMedium_tab};
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding-top: 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
  }
`;

export const ConsentText = styled.span`
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
    line-height: 120%;
    padding-left: 7px;
  }
`;

export const ConsentCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;

  & + span {
    min-width: 20px;
    height: 20px;
    margin-right: 9px;
    border: 2px solid ${colors.grey};
    border-radius: 8px;
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: ${MainTheme.mediaWidth.smMobile}) {
      min-width: 20px;
      height: 20px;
      margin: 0px 0px 7px 2px;
    }
  }

  &:focus-visible + span {
    outline: 1px solid ${colors.basic};
  }

  &:hover + span {
    border-color: ${colors.hover};
  }

  &:checked + span {
    border: 2px solid ${colors.accent};

    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      width: 5px;
      height: 9px;
      border: solid ${colors.accent};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);

      @media screen and (max-width: ${MainTheme.mediaWidth.smMobile}) {
        left: 6px;
        top: 3px;
        width: 4px;
        height: 8px;
      }
    }
  }

  &:focus + span {
    background-color: transparent;
  }
`;

export const CustomCheckbox = styled.span``;

export const ConsentLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
  }
`;

export const LinkPolitics = styled.a`
  display: inline;
  transition:
    color 0.5s ease,
    border-bottom 0.5s ease;

  &:hover {
    color: ${colors.hover};
    border-bottom: 1px solid ${colors.hover};
  }

  &:active {
    color: ${colors.pressed};
    border-bottom: 1px solid ${colors.pressed};
  }
`;
