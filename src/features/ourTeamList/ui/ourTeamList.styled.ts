import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
  TextMedium_tab,
  TitleBig_tab,
  TitleMedium_desk,
  TitleSmallSemiBold_tab,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const OurTeamListContainer = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 16.5px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const OurTeamCardImgContainer = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 99.5%;
  opacity: 0.5;
  background-color: ${colors.bgCard};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: opacity 0.5s ease;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 99.2%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: none;
  }
`;

export const OurTeamCardImg = styled.img`
  width: 100%;
  height: 680px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: border-radius 0.5s ease;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 450px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 433px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 249px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 291px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 382px;
  }
`;

export const OurTeamCardTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  overflow: hidden;
  max-height: 0;
  position: absolute;
  bottom: 3px;
  background-color: ${colors.bgCard};
  transition:
    border-radius 0.5s ease,
    max-height 0.5s ease,
    padding 0.5s ease;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 13px 0 11px 10px;
    position: relative;
    top: -3px;
    max-height: none;
    overflow: visible;
    gap: 5px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 13px 0 11px 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding: 16px 0 11px 12px;
  }
`;

export const OurTeamCardTitleContainerName = styled.p`
  ${TitleMedium_desk};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TitleBig_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleSmallSemiBold_tab}
  }
`;

export const OurTeamCardTitleContainerRole = styled.p`
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextMedium_tab};
  }
`;

export const OurTeamCardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: 0.5;
  color: ${colors.basic};
  transition: opacity 0.5s ease;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    gap: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    opacity: 1;
    gap: 16px;
  }
`;

export const OurTeamCardDescriptionContainerLocation = styled.p`
  ${TextLarge_desk};
  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextLarge_tab};
    line-height: 128%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob}
  }
`;

export const OurTeamCardDescriptionContainerText = styled.p`
  ${TextLarge_desk};
  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextLarge_tab};
    line-height: 128%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob}
  }
`;

export const OurTeamCard = styled.article`
  display: flex;
  width: 32.4%;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    gap: 22px;
    width: 31.6%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 14px;
    width: 50%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 11px;
    width: 100%;
  }

  &:hover ${OurTeamCardImg} {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &:hover ${Overlay} {
    opacity: 0;
  }

  &:hover ${OurTeamCardTitleContainer} {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 18px 0 19px 16px;
    max-height: 90px;
    transition:
      opacity 0.5s ease,
      max-height 0.5s ease,
      padding 0.5s ease;

    @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
      padding: 15px 0 16px 12px;
    }
  }

  &:hover ${OurTeamCardDescriptionContainer} {
    opacity: 1;
  }
`;
