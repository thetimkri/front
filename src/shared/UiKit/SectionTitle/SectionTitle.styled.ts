import styled from 'styled-components';

import { H1, H2_mob, H2_tab } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledSectionTitle = styled.h2`
  ${H1};
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${H2_mob}
  }
`;
