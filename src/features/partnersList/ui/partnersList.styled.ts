import { MainTheme } from '@/shared/constants/theme/MainTheme';
import styled from 'styled-components';

export const PartnersListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  list-style: none;

  & > a {
    height: 222px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));

    & > a {
      height: 126px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    gap: 20px;

    & > a {
      height: 124px;
    }
  }

  @media (max-width: 767px) {
    & > a {
      height: 143px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
    gap: 16px;
  }

  @media (max-width: 559px) {
    & > a {
      height: 156px;
    }
  }
`;
