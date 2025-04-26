import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const FormRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 6px;
  }
`;
