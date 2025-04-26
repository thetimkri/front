import styled from 'styled-components';
import { H1, H1_mob, H1_tab } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledPageTitle = styled.h1`
  ${H1};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H1_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H1_mob};
  }
`;
