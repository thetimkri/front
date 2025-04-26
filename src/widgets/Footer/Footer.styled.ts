import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  TextMedium_desk,
  TextBig_desk,
  H3_mob,
  TitleMedium_desk,
  TextMedium_mob,
  TitleBig_tab,
  TitleMedium_mob,
} from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

interface ImageProps {
  src: string;
  alt: string;
}

export const FooterContainer = styled.footer`
  margin: 0 auto;
  width: 100%;
  max-width: 1620px;
  padding-block: 32px;
  border-top: 1px solid #aaaaaa;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    max-width: 980px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    max-width: 928px;
    padding-block: 24px;
  }

  @media (max-width: 768px) {
    max-width: 688px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    max-width: 312px;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
`;

export const Logo = styled.img<ImageProps>`
  width: 152px;
  height: 48px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    display: block;
  }
`;

export const SectionsAndContacts = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    margin-bottom: 32px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Sections = styled.div`
  flex: 1;
`;

export const FooterListTitle = styled.h2`
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

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 16px;

  &:nth-child(2) {
    margin-bottom: 28px;
  }
`;

export const StyledListItem = styled.li`
  padding-block: 8px;
  ${TextBig_desk};
  line-height: 128%;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_desk};
    padding-block: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${colors.basic};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.hover};
  }

  &:active {
    color: ${colors.pressed};
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 12px;
`;

export const InfoGroup = styled.div`
  padding-right: 63px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoGroupWrap = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const PrivacyPolicy = styled.a`
  text-decoration: none;
  ${TextMedium_desk};
  color: ${colors.grey};
  transition: text-decoration 0.5s ease;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const Contract = styled.a`
  text-decoration: none;
  ${TextMedium_desk};
  color: ${colors.grey};
  transition: text-decoration 0.5s ease;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const AgeRestriction = styled.p`
  ${TextMedium_desk};
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const Copyright = styled.div`
  ${TextMedium_desk};
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const DevelopmentInfo = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  ${TextMedium_desk};
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
  gap: 8px;
  ${H3_mob};
  color: ${colors.basic};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.accent};

    svg rect {
      stroke: ${colors.accent};
    }

    svg path {
      fill: ${colors.accent};
    }
  }

  svg rect {
    transition: stroke 0.3s ease-in-out;
  }

  svg path {
    transition: fill 0.3s ease-in-out;
  }
`;
