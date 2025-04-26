import styled from 'styled-components';
import { H1, H2_mob, H2_tab } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const JournalComponentTitle = styled.h2`
  ${H1};
  margin-bottom: 40px;
  padding-top: 72px;
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H2_mob};
    margin-bottom: 20px;
  }
`;
