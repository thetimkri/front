import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  ButtonSmall,
  H1_mob,
  H1_tab,
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
} from '@/shared/constants/typography';
import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { NavLink } from 'react-router-dom';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 32px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 24px;
  }
`;

export const AddPartnerBtn = styled(NavLink)`
  display: none;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: flex;
    border: 1px solid ${colors.basic};
    border-radius: 100%;
    padding: 13px;
    transform: rotate(135deg);
    transition:
      border 0.3s ease-in-out,
      fill 0.3s ease-in-out;

    &:hover {
      border: 1px solid ${colors.hover};

      svg path {
        fill: ${colors.hover};
      }
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      ${H1_tab}
    }

    @media (max-width: 400px) {
      ${H1_mob}
    }
  }

  & > button {
    text-wrap: nowrap;
    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      ${ButtonSmall};
      width: 131px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    align-items: center;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    align-items: baseline;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 74.6%;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 75.6%;
    gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
    gap: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 43px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 45px;
  }
`;

export const Paragraph = styled.p`
  ${TextLarge_desk};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    line-height: 128%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_mob}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    line-height: 141%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    line-height: 142%;
  }
`;
