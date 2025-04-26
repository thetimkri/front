import styled from 'styled-components';
import {
  H2_mob,
  H2_tab,
  H3_tab,
  TextLarge_NoResults,
  TextMedium_mob,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const NoResultsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    svg {
      width: 162px;
      height: 162px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 16px;
    flex-direction: column;

    svg {
      width: 116px;
      height: 116px;
    }

    @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
      svg {
        width: 66px;
        height: 66px;
      }
    }
  }
`;

export const NoResultsWrapper = styled.div``;

export const NoResultsTitle = styled.h1`
  ${H2_tab};
  margin-bottom: 28px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_mob};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 16px ${H3_tab};
  }
`;

export const NoResultsList = styled.ul`
  padding-inline-start: 30px;
`;

export const NoResultsItem = styled.li`
  ${TextLarge_NoResults};
  margin-bottom: 16px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_mob};
    margin-bottom: 12px;
  }
`;

export const NoResultsDescription = styled.p`
  ${TextLarge_NoResults};

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_mob};
  }
`;
