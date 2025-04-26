import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { Button, TitleSmallSemiBold_desk } from '@/shared/constants/typography';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const PaginationBulletsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

interface PaginationBulletProps {
  $isActive: boolean;
}

export const PaginationBullet = styled.span<PaginationBulletProps>`
  ${Button};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: ${colors.pressedTag};
    border-color: ${colors.pressedTag};
    color: ${colors.white};
  `}
`;

export const PaginationDots = styled.span`
  ${Button};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const PaginationButton = styled.button`
  ${TitleSmallSemiBold_desk};
  padding: 8px 0;
  cursor: pointer;
  transition: color 0.5s ease;

  &:disabled {
    color: ${colors.disabled}
    cursor: not-allowed;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;
