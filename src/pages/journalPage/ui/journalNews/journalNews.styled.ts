import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_tab,
  TitleBig_tab,
  TitleLarge_desk,
  TitleLarge_tab,
  TitleMedium_desk,
  TitleMedium_mob,
  TitleSmallSemiBold_tab,
} from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

export const Journalsection = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    column-gap: 16px;
    padding-top: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
  }
`;
export const JournalContainer = styled.div`
  display: flex;
  column-gap: 24px;
  padding-top: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    column-gap: 16px;
    padding-top: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
  }
`;

export const JournalImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 524px;
  height: 680px;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 365px;
    height: 472px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 311px;
    height: 400px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    width: 299px;
    height: 388px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 219px;
    height: 292px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

export const JournalContentWrapper = styled.article`
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
  }
`;

export const JournalContentTitle = styled.h2`
  ${TitleLarge_desk};
  margin-bottom: 24px;
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab};
    margin-bottom: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleMedium_mob};
    margin-bottom: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-bottom: 12px;
  }
`;

export const JournalContentDescription = styled.p`
  ${TextLarge_desk};
  width: 75%;
  margin-bottom: 32px;
  white-space: break-spaces;
  text-wrap: balance;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    ${TextBig_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    width: 100%;
  }
`;

export const JournalContactsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 13px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
  }
`;

export const JournalContactsTitle = styled.ul`
  ${TitleMedium_desk};
  margin-bottom: 24px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleBig_tab};
    margin-bottom: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleSmallSemiBold_tab};
    margin-bottom: 8px;
  }
`;

export const JournalContactsItem = styled.li`
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
  }
`;

export const JournalContactsLink = styled.a`
  & rect {
    transition: stroke 0.5s ease;
  }

  & path {
    transition: fill 0.5s ease;
  }

  &:hover rect {
    stroke: ${colors.accent};
  }

  &:hover path {
    fill: ${colors.accent};
  }

  &[aria-label='Дзен'] path:first-of-type {
    transition: stroke 0.5s ease;
  }

  &[aria-label='Дзен']:hover path:first-of-type {
    stroke: ${colors.accent};
    fill: transparent;
  }

  &[aria-label='Дзен']:hover path:last-of-type {
    fill: ${colors.accent};
  }
`;
