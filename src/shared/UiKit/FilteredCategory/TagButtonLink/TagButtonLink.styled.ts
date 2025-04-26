import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { colors } from '@/shared/constants/colors';
import { TextLarge_tab_des, TextSmall_mob } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledTagButtonLink = styled(NavLink).attrs(() => ({
  end: true,
}))`
  color: ${colors.basic};
  ${TextLarge_tab_des};
  padding: 12px 20px;
  border-radius: 30px;
  background-color: ${colors.bgCard};
  color: ${colors.basic};
  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background: ${colors.hover};
    color: ${colors.white};
  }

  &.active {
    background: ${colors.pressed};
    color: ${colors.white};
  }

  &:disabled {
    background: ${colors.disabledTag};
    color: ${colors.basic};
    cursor: not-allowed;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
    padding: 8px 16px;
  }
`;
