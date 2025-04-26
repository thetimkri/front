import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledNavigationSection = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding-top: 53px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding-top: 32px;
  }
`;
