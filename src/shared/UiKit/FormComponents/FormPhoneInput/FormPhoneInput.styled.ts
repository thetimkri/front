import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { TextBig_desk, TextLarge_mob, TextLarge_tab } from '@/shared/constants/typography';

export const StyledPhoneInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 9px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 8px;
  }
`;

export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  width: 100px;
  background-color: ${colors.input};
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 110px;
  }

  img {
    width: 24px;
    height: 16px;
    margin-right: 8px;
  }

  span {
    color: ${colors.grey};
  }
`;

export const StyledInput = styled.input`
  ${TextBig_desk};
  width: 35%;
  height: 48px;
  border-radius: 16px;
  padding-left: 14px;
  color: ${colors.grey};
  background-color: ${colors.input};
  border: none;
  outline: none;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 46%;
    padding: 4px 0px 0px 13px;
    ${TextLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 70%;
    ${TextLarge_mob};
  }

  &:focus {
    background-color: ${colors.hoverInput};
    color: ${colors.basic};
  }

  &::placeholder {
    color: ${colors.grey};
  }
`;
