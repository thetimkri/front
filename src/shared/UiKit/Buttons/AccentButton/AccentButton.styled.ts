import styled from 'styled-components';

import { colors } from '@/shared/constants/colors';
import { ButtonText, ButtonText_mob } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export interface TStyledAccentButtonProps {
  size?: string;
  height?: string;
}

export const StyledAccentButton = styled.button<TStyledAccentButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 16px 25px;
  border-radius: 42px;
  ${ButtonText};
  border: 4px solid ${colors.white};
  background-color: ${colors.accent};
  color: ${colors.white};
  width: ${({ size }) => (size ? size : '216px')};
  height: ${({ height }) => (height ? height : '80px')};
  box-shadow: ${MainTheme.shadows.buttonFirst};
  box-shadow: ${MainTheme.shadows.buttonSecondary};
  transition:
    background-color 0.3s ease,
    border 0.3s ease;

  &:hover {
    background-color: ${colors.hover};
  }
  &:active {
    background-color: ${colors.pressed};
  }
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${ButtonText_mob};
    width: ${({ size }) => (size ? size : '140px')};
    height: ${({ height }) => (height ? height : '52px')};
    padding: 16px 20px;
  }
`;
