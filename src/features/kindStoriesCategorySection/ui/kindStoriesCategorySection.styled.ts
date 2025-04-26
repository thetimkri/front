import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const StoriesCardList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(387px, 1fr));
  grid-gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    grid-template-columns: repeat(auto-fit, minmax(214px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    grid-gap: 16px;
    margin-bottom: 27px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-bottom: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin-bottom: 22px;
  }

  @media (max-width: 320px) {
    grid-template-columns: 273px;
    margin-bottom: 22px;
    width: 100%;
  }
`;
