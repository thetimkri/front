import { colors } from '@/shared/constants/colors';
import styled from 'styled-components';

import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  H2_mob,
  TextBig_desk,
  TextLarge_desk,
  TextSmall_desk,
  TitleMedium_desk,
  TitleSmallSemiBold_mob,
} from '@/shared/constants/typography';
import { NavLink } from 'react-router-dom';

interface ImageProps {
  src: string;
  alt: string;
  $objectPosition?: string;
}

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 399px);
  column-gap: 24px;
  row-gap: 31px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    gap: 24px;
    grid-template-rows: repeat(3, 239px);
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    grid-template-rows: repeat(3, 228px);
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-rows: repeat(3, 168px);
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-rows: repeat(6, 156px);
    gap: 16px;
  }
`;

const StoryCard = styled(NavLink)`
  background: ${MainTheme.colors.bgCard};
  border-radius: 16px;

  &:nth-child(1) {
    grid-column: 1 / span 6;
  }

  &:nth-child(2) {
    grid-column: 7 / span 3;
  }

  &:nth-child(3) {
    grid-column: 10 / span 3;
  }

  &:nth-child(4) {
    grid-column: 1 / span 3;
  }

  &:nth-child(5) {
    grid-column: 4 / span 3;
  }

  &:nth-child(6) {
    grid-column: 7 / span 6;
  }

  &:nth-child(7) {
    grid-column: 1 / span 3;
  }

  &:nth-child(8) {
    grid-column: 4 / span 3;
  }

  &:nth-child(9) {
    grid-column: 7 / span 3;
  }

  &:nth-child(10) {
    display: flex;
    background-color: transparent;
    grid-column: 10 / span 3;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    border-radius: 12px;
  }

  @media screen and (max-width: 560px) {
    &:nth-child(1) {
      grid-column: 1 / 13;
    }

    &:nth-child(2) {
      grid-column: 1 / 7;
    }

    &:nth-child(3) {
      grid-column: 7 / 13;
    }

    &:nth-child(4) {
      grid-column: 1 / 7;
    }

    &:nth-child(5) {
      grid-column: 7 / 13;
    }

    &:nth-child(6) {
      grid-column: 1 / 13;
    }

    &:nth-child(7) {
      grid-column: 1 / 7;
    }

    &:nth-child(8) {
      grid-column: 7 / 13;
    }

    &:nth-child(9) {
      grid-column: 1 / 7;
    }

    &:nth-child(10) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      grid-column: 7 / 13;
    }
  }
`;

const StoryImage = styled.img<ImageProps>`
  width: 100%;
  height: 339px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  object-fit: cover;
  object-position: ${({ $objectPosition }) => $objectPosition || 'center'};
  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 195px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 184px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 127px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 118px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    &:nth-child(6) {
      object-position: top;
    }
  }
`;

const StorySubtitle = styled.p`
  ${TextLarge_desk};
  color: ${MainTheme.colors.basic};
  padding: 12px 0px 0 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    padding: 8px 0px 0px 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextSmall_desk};
    padding: 7px 0 0 12px;
  }
`;

const MoreStories = styled.button`
  ${H2_mob};
  color: ${MainTheme.colors.basic};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: transparent;
  cursor: pointer;

  p {
    margin-top: 16px;
    transition: color 0.5s ease;

    @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
      margin-top: 20px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      ${TitleSmallSemiBold_mob};
      margin-top: 20px;
      margin-right: 12px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin-top: 26px;
      margin-right: 0;
    }
  }

  svg {
    margin-top: 12px;
    width: 160px;
    height: 160px;

    path {
      transition: fill 0.5s ease;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-right: 12px;
      width: 86px;
      height: 86px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin: 8px 0 0 0;
    }
  }

  &:hover {
    p {
      color: ${colors.hover};
    }

    svg path {
      fill: ${colors.hover};
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    ${TitleMedium_desk};
  }
`;

export { MoreStories, StoryCard, StoryContainer, StoryImage, StorySubtitle };
