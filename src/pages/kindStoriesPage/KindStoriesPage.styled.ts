import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { H1, H2_mob, H2_tab } from '@/shared/constants/typography';

export const KindStoriesCategoryTitle = styled.h2`
  margin-bottom: 43px;
  ${H1};

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    margin-bottom: 36px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
    margin-bottom: 36px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H2_mob};
    margin-bottom: 21px;
  }
`;

export const GroupedThemeWrapper = styled.div`
  padding: 36px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const StoryCardList = styled.ul`
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
