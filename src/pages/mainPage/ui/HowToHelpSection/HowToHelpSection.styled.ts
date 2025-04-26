import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  H3_tab,
  TextBig_desk,
  TextLarge_tab,
  TextMedium_desk,
  TitleMedium_desk,
} from '@/shared/constants/typography';
import { NavLink } from 'react-router-dom';

interface ImageProps {
  src: string;
  alt: string;
}

const HelpContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(388px, 1fr));
  gap: 24px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
    gap: 16px;
  }
`;

const HelpCard = styled(NavLink)`
  background: ${MainTheme.colors.bgCard};
  position: relative;
  height: 260px;
  padding: 47px 24px 47px 24px;
  border-radius: 16px;
  color: ${colors.basic};
  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  & img {
    transition: opacity 0.5s ease;
  }

  & svg {
    margin-top: 4px;

    path {
      transition: fill 0.5s ease;
    }

    @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
      margin-top: 0;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 239px;
    padding: 35.5px 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    padding: 32px 24px;
    height: 226px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 30px 0 0 16px;
    height: 168px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 14px 0px 0px 16px;
    height: 156px;
  }

  &:hover {
    background-color: ${colors.hover};
    color: ${colors.white};

    svg path {
      fill: ${colors.white};
    }

    img {
      opacity: 1;
    }
  }

  &:first-of-type:hover,
  &:last-of-type:hover {
    background-color: ${colors.accent};
    color: ${colors.accent};

    svg path {
      fill: ${colors.accent};
    }

    img {
      opacity: 1;
    }
  }

  &:first-child:hover {
    color: rgba(246, 253, 255, 0);
  }

  &:last-child:hover {
    color: rgba(246, 253, 255, 0);
  }

  & img {
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
`;

const HelpWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 20px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 6px;
  }
`;

const HoverImg = styled.img<ImageProps>`
  object-fit: cover;
  object-position: center;
`;

const HelpSubtitle = styled.h3`
  ${TitleMedium_desk};
  width: 214px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H3_tab};
  }
`;

const HelpDescription = styled.p`
  ${TextLarge_tab};
  height: 61%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    ${TextBig_desk};
    line-height: 128%;
    -webkit-line-clamp: 5;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_desk};
    -webkit-line-clamp: 4;
  }
`;

export { HelpCard, HelpContainer, HelpDescription, HelpSubtitle, HelpWrapper, HoverImg };
