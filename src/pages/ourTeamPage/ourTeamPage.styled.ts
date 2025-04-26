import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextMedium_desk,
  TextMedium_mob,
  TextMedium_tab,
  TitleMedium_desk,
  TitleMedium_mob,
  TitleMediumSemiBold_Mob,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const OurTeamSection = styled.section`
  display: flex;
  flex-direction: column;

  & > h1 {
    margin-bottom: 40px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-bottom: 32px;
    }
  }
`;

export const SectionContainerTeam = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 16px;
  }

  @media (max-width: 510px) {
    flex-direction: column;
  }
`;

export const SectionContainerHowJoin = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 24px;
  }
`;

export const FounderCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 31.7%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 48.4%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }
`;

export const FounderCardImg = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 596px;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 346px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 342px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 239px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 267px;
  }

  @media (max-width: 510px) {
    height: 363px;
  }
`;

export const FounderCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 0px 15px 16px;
  background-color: ${colors.bgCard};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    padding: 14px 0px 10px 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 8px 0px 4px 8px;
    gap: 3px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 14px 0px 11px 12px;
    gap: 6px;
  }
`;

export const FounderCardTitle = styled.p`
  ${TitleMedium_desk};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TitleMedium_mob};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleMediumSemiBold_Mob}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleMedium_mob}
  }
`;

export const FounderCardText = styled.p`
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    text-wrap: balance;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextMedium_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob};
    text-wrap: pretty;
    line-height: 128%;
  }

  @media (max-width: 510px) {
    ${TextMedium_mob};
    text-wrap: balance;
  }
`;

export const TeamParagraph = styled.p`
  ${TextLarge_desk};
  transition: max-height 1s ease;
  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    line-height: 128%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    line-height: 150%;
  }
`;

interface TeamTextContainerProps {
  $expanded: boolean;
}

export const TeamTextContainer = styled.div<TeamTextContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    gap: 12px;
    width: 49%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    gap: 8px;
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 4px;
  }

  @media (max-width: 643px) {
    & ${TeamParagraph}:last-of-type {
      max-height: ${(props) => (props.$expanded ? '500px' : '0')};
      overflow: hidden;
    }
  }

  @media (max-width: 510px) {
    & ${TeamParagraph}:last-of-type {
      max-height: none;
      overflow: visible;
    }
  }
`;

interface ReadMoreProps {
  $expanded: boolean;
}

export const ReadMore = styled.span<ReadMoreProps>`
  display: none;
  ${TextMedium_desk};
  color: ${colors.accent};
  padding-bottom: 2px;
  border-bottom: 2px dotted ${colors.accent};

  @media (max-width: 643px) {
    cursor: pointer;
    display: ${(props) => (props.$expanded ? 'none' : 'inline')};
    width: 99px;
  }

  @media (max-width: 510px) {
    display: none;
  }
`;

export const HowJoinImgContainer = styled.div`
  position: relative;
  width: 50%;
  border-radius: 16px;
  height: 468px;
  object-fit: cover;
  object-position: center;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 49%;
    height: 248px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 238px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
    height: 357px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 265px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 196px;
  }
`;

export const HowJoinImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: ${colors.hover};
  border-radius: 16px;
`;

export const HowJoinTextContainer = styled.div`
  width: 50%;
  gap: 21px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 49%;

    & > a {
      width: 65%;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    gap: 8px;

    & > a {
      margin-top: 14px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
    & > a {
      margin-top: 12px;
      width: 100%;
    }
  }
`;
