import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const StyleRoundedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  width: 48px;
  height: 48px;
  //border: 1px solid ${colors.basic};
  transition: border-color 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    //border-color: ${colors.hover};

    svg {
      fill: ${colors.hover};
    }
  }
`;
