import styled from 'styled-components';
import { Button } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

export const AddButtonContainer = styled.button<{ $hasError: boolean; $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Button};
  max-width: 100%;
  width: max-content;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `${colors.basic}`)};
  border-radius: 40px;
  color: ${colors.basic};
  transition:
    border-color 0.3s ease-in-out,
    color 0.5s ease-in-out;

  &:hover {
    border-color: ${colors.hover};
    color: ${colors.hover};

    & svg path {
      fill: ${colors.hover};
    }
  }

  svg {
    transform: rotate(${(props) => (props.$isActive ? '0deg' : '45deg')});
    transition: transform 0.3s ease-in-out;
  }
`;
