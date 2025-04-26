import styled from 'styled-components';
import { H2, H2_tab } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const StyledInfoSectionSectionWrapper = styled.section`
  padding-top: 72px;
`;

export const StyleInfoSectionTitle = styled.h2`
  ${H2};
  padding-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab}
  }
`;

export const StyledInfoCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 356px);

  gap: 20px;

  & > :nth-child(1) {
    grid-column: span 3;
    grid-row: 1;
  }

  & > :nth-child(2) {
    grid-column: span 1;
    grid-row: 1;
  }

  & > :nth-child(3) {
    grid-column: span 2;
    grid-row: 2;
  }

  & > :nth-child(4) {
    grid-column: span 2;
    grid-row: 2;
  }

  & > :nth-child(5) {
    grid-column: span 2;
    grid-row: 3;
  }

  & > :nth-child(6) {
    grid-column: span 2;
    grid-row: 3;
  }

  & > :nth-child(7) {
    grid-column: span 2;
    grid-row: 4;
  }

  & > :nth-child(8) {
    grid-column: span 2;
    grid-row: 4;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-rows: repeat(4, 212px);
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    grid-template-rows: repeat(4, 200px);
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: flex;
    flex-direction: column;
    & > :nth-child(1) {
      order: 1;
    }

    & > :nth-child(2) {
      order: 2;
    }

    & > :nth-child(3) {
      order: 4;
      border-radius: 36px 2px 36px 2px;
    }

    & > :nth-child(4) {
      order: 3;
    }

    & > :nth-child(5) {
      order: 5;
    }

    & > :nth-child(6) {
      order: 6;
      border-radius: 36px 2px 36px 2px;
    }

    & > :nth-child(7) {
      order: 8;
      border-radius: 36px 2px 36px 2px;
    }

    & > :nth-child(8) {
      order: 7;
    }
  }
`;
