import { MainTheme } from '@/shared/constants/theme/MainTheme';
import styled from 'styled-components';

export const ReviewsPageSection = styled.section`
  & > h1 {
    margin-bottom: 40px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-bottom: 29px;
    }
  }

  & > div:last-of-type {
    margin-top: 40px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-top: 24px;
    }
  }
`;
