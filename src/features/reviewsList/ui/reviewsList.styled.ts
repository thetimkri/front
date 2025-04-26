import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { TextBig_desk, TextLarge_desk } from '@/shared/constants/typography';
import styled from 'styled-components';

export const ReviewsListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 263px;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-auto-rows: 200px;
  }

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-auto-rows: 167px;
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: 1fr;
    grid-auto-rows: 156px;
  }

  > article {
    height: 100%;
    padding: 40px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
      padding: 31px 28px;
    }

    @media (max-width: 1040px) {
      padding: 22px 28px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      padding: 14.5px 28px;
    }

    @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
      padding: 9px 28px;
    }
  }

  > article > a {
    width: fit-content;
  }

  > article > div {
    @media (max-width: 1040px) {
      gap: 8px;
      margin-bottom: 8px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      gap: 18px;
    }
  }

  > article > div > svg {
    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      width: 26px;
      height: 26px;
    }
  }

  > article > div > div {
    ${TextLarge_desk};

    @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
      ${TextBig_desk};
      line-height: 128%;
    }
  }

  > article:first-of-type,
  > article:nth-child(6n + 1) {
    grid-column: 1 / 3;

    @media (max-width: 1040px) {
      grid-column: 1 / 2;
    }
  }

  > article:nth-child(6n) {
    grid-column: 3 / 5;
  }
`;
