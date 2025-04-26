import { colors } from '@/shared/constants/colors';
import { TextSmall_desk } from '@/shared/constants/typography';
import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 4px;
  padding-left: 8px;
`;

export const SuccessText = styled.p`
  ${TextSmall_desk};
  color: ${colors.success};
`;
