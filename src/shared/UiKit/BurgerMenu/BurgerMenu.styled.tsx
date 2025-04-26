import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const BurgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border-radius: 12px;
  border: 1px solid #444444;
  padding: 12px;
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: border-color 0.5s ease-in-out;

  svg {
    width: 20px;
    height: 20px;
  }

  & path {
    transition: fill 0.5s ease-in-out;
  }

  &:hover path {
    fill: ${colors.accent};
  }

  &:hover {
    border-color: ${colors.hover};
  }
`;
