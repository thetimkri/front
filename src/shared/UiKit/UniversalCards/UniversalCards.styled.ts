import styled from 'styled-components';
import {
  Button,
  H1,
  H2_mob,
  H2_tab,
  H3_tab,
  TextLarge_desk,
  TextMedium_desk,
  TitleLarge_desk,
} from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { NavLink } from 'react-router-dom';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

interface ImageProps {
  src: string;
  alt: string;
}

export const UniversalCardsSection = styled.section`
  padding: 36px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const UniversalCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 20px;
  }
`;

export const UniversalCardsTitle = styled.h2`
  ${H1};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H2_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H2_mob};
  }
`;

export const UniversalLink = styled(NavLink)`
  ${TitleLarge_desk};
  color: ${colors.accent};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H3_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;

export const UniversalCardsGrid = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 16px;
  }
`;

export const UniversalCardLink = styled(NavLink)`
  color: ${colors.basic};
`;

export const UniversalCardContent = styled.li`
  background-color: ${colors.bgCard};
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 20px;
  }
`;

export const UniversalCardImg = styled.img<ImageProps>`
  max-width: 100%;
  width: 387px;
  height: 327px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  object-fit: cover;
  object-position: center;
  background-color: ${colors.white};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 277px;
    height: 182px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 218px;
    height: 173px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 248px;
    height: 205px;
  }

  @media (max-width: 476px) {
    width: 206px;
    height: 160px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    width: 312px;
    height: 269px;
  }
`;

export const UniversalCardTitle = styled.h3`
  ${TextLarge_desk};
  padding: 10px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextMedium_desk};
  }
`;

export const UniversalBtnLink = styled(NavLink)`
  display: none;
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: flex;
    justify-content: center;
    ${Button};
    padding: 12px;
    color: ${colors.basic};
    border: 1px solid ${colors.basic};
    border-radius: 40px;
  }

  &:hover {
    color: ${colors.hover};
    border: 1px solid ${colors.hover};
  }

  &:active {
    color: ${colors.pressed};
    border: 1px solid ${colors.pressed};
  }
`;
