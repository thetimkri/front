import { ButtonText_mob } from '@/shared/constants/typography';
import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const InputFooterContainer = styled.div``;

export const InputFooterCounter = styled.div`
  display: flex;
  justify-content: end;
  ${ButtonText_mob};
`;

export const InputFooterCharacterCounter = styled.span<{ $isOverLimit: boolean }>`
  color: ${(props) => (props.$isOverLimit ? `${colors.error}` : `${colors.grey}`)};
`;

export const InputFooterMaxCounter = styled.span`
  color: ${colors.grey};
`;
