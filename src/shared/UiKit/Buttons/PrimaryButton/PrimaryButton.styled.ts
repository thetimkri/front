import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { ButtonText } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export interface TStyledButtonProps {
  $btnType: 'colored' | 'transparent' | 'pressed';
  size?: string;
  $isFooter?: boolean;
}

export const StyledPrimaryButton = styled.button<TStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 13px 16px;
  box-sizing: border-box;
  border-radius: 40px;
  ${ButtonText};
  border: ${({ $btnType }) =>
    $btnType === 'transparent'
      ? `1px solid ${colors.basic}`
      : $btnType === 'pressed'
        ? `1px solid ${colors.pressedTag}`
        : 'none'};
  background-color: ${({ $btnType }) =>
    $btnType === 'colored'
      ? `${colors.accent}`
      : $btnType === 'pressed'
        ? `${colors.pressedTag}`
        : 'transparent'};
  color: ${({ $btnType }) =>
    $btnType === 'colored'
      ? `${colors.white}`
      : $btnType === 'pressed'
        ? `${colors.white}`
        : `${colors.basic}`};
  width: ${({ size }) => (size ? size : '100%')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border 0.3s ease;

  &:hover {
    border: ${({ $btnType }) =>
      $btnType === 'transparent'
        ? `1px solid ${colors.hover}`
        : $btnType === 'pressed'
          ? `1px solid ${colors.hover}`
          : 'none'};
    background-color: ${({ $btnType }) =>
      $btnType === 'colored'
        ? `${colors.hover}`
        : $btnType === 'pressed'
          ? `${colors.hover}`
          : 'transparent'};
    color: ${({ $btnType }) =>
      $btnType === 'colored' || $btnType === 'pressed' ? `${colors.white}` : `${colors.hover}`};
  }

  &:active {
    background-color: ${({ $btnType }) =>
      $btnType === 'colored'
        ? `${colors.pressedTag}`
        : $btnType === 'pressed'
          ? `${colors.pressed}`
          : 'transparent'};
    border: ${({ $btnType }) =>
      $btnType === 'transparent' ? `1px solid ${colors.pressed}` : 'none'};
    color: ${({ $btnType }) =>
      $btnType === 'transparent' ? `${colors.pressed}` : `${colors.white}`};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ $btnType }) =>
      $btnType === 'colored' || $btnType === 'pressed' ? `${colors.disabled}` : 'transparent'};
    border: ${({ $btnType }) =>
      $btnType === 'transparent' ? `1px solid ${colors.disabled}` : 'none'};
    color: ${({ $btnType }) =>
      $btnType === 'colored' || $btnType === 'pressed' ? `${colors.white}` : `${colors.disabled}`};

    &:hover,
    &:active {
      background-color: ${({ $btnType }) =>
        $btnType === 'colored' || $btnType === 'pressed' ? `${colors.disabled}` : 'transparent'};
      border: ${({ $btnType }) =>
        $btnType === 'transparent' ? `1px solid ${colors.disabled}` : 'none'};
      color: ${({ $btnType }) =>
        $btnType === 'colored' || $btnType === 'pressed'
          ? `${colors.white}`
          : `${colors.disabled}`};
    }
  }

  &:focus-visible {
    outline: 1px solid ${colors.basic};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 12px 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${({ $isFooter }) =>
      $isFooter &&
      `
      padding: 13px 16px;
    `}
  }
`;
