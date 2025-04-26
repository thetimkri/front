import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { TextLarge_tab_des, TextSmall_mob } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

type StyledTagButtonProps = {
  $isActive?: boolean;
};

export const StyledTagButton = styled.button<StyledTagButtonProps>`
  color: ${({ $isActive }) => ($isActive ? colors.white : colors.basic)};
  background-color: ${({ $isActive }) => ($isActive ? colors.pressed : colors.bgCard)};
  ${TextLarge_tab_des};
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background: ${colors.hover};
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
