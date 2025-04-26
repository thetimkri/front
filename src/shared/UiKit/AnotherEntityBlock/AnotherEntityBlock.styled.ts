import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { H2_tab, H3, H3_mob } from '@/shared/constants/typography';
import styled from 'styled-components';

export const AnotherEntityBlockContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 16px;
  }
`;

export const AnotherEntityTitle = styled.h3`
  ${H3};
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H3_mob};
  }
`;
