import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { ButtonText_mob } from '@/shared/constants/typography';

export const ErrorMessageContainer = styled.div`
  color: ${colors.error};
  ${ButtonText_mob};
  font-size: 0;
  display: flex;
  align-items: center;
  gap: 3px;
  padding-top: 3.5px;
`;

export const ErrorMessageText = styled.p`
  color: ${colors.error};
  ${ButtonText_mob};
`;

export const ErrorIconWrap = styled.div`
  width: 12px;
`;
