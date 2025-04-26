import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import {
  TextBig_desk,
  TextMedium_desk,
  TitleBig_tab,
  TitleLarge_tab,
  TitleMedium_desk,
  TitleMedium_mob,
  TitleSmallSemiBold_desk,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 16px;

  &:nth-child(2) {
    margin-bottom: 28px;
  }
`;

export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 13px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const SocialItem = styled.li``;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

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

export const Thanks = styled.p`
  ${TitleMedium_desk};
  margin-top: 22px;
  color: ${colors.accent};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TitleSmallSemiBold_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleMedium_mob};
  }
`;

export const ContactItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsListItem = styled.li`
  padding-block: 8px;
  ${TextBig_desk};
  line-height: 128%;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_desk};
    padding-block: 8px;
  }
`;
export const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
`;

export const ContactListTitle = styled.h2`
  ${TitleMedium_desk};
  margin-bottom: 19px;
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleBig_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleMedium_mob};
  }
`;
