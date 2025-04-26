import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TitleSmallSemiBold_desk, TitleSmallSemiBold_tab } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

interface ImageProps {
  src: string;
  alt: string;
}

const StyledHeader = styled.header`
  padding-top: 32px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding-bottom: 26px;
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding-top: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding-bottom: 0;
    background-color: ${colors.bg};
  }
`;

const StyledHeaderHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 44px;
  }

  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const LinkLogo = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoImage = styled.img<ImageProps>`
  width: 152px;
  height: 48px;
  background: transparent;
`;

const StyledButtonContainer = styled.div`
  a {
    height: 48px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderNav = styled.nav<{ $isOpen?: boolean }>`
  padding: 24px 0;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 0;
  }

  @media (max-width: 767px) {
    position: absolute;
    left: 0;
    z-index: 4;
    background-color: #f4f3ef;
    min-height: fit-content;
    width: clamp(320px, 100vw, 768px);
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }

  @media (min-width: 320px) and (max-width: 332px) {
    padding: 16px 24px 182px 24px;
  }

  @media (min-width: 333px) and (max-width: 355px) {
    padding: 16px 24px 162px 24px;
  }

  @media (min-width: 356px) and (max-width: 360px) {
    padding: 16px 24px 142px 24px;
  }

  @media (min-width: 361px) and (max-width: 390px) {
    padding: 16px 24px 162px 24px;
  }

  @media (min-width: 391px) and (max-width: 523px) {
    padding: 16px 24px 132px 24px;
  }

  @media (min-width: 524px) and (max-width: 560px) {
    padding: 16px 24px 102px 24px;
  }

  @media (min-width: 561px) and (max-width: 743px) {
    padding: 16px 24px 82px 24px;
  }

  @media (min-width: 744px) and (max-width: 767px) {
    padding: 16px 24px 32px 24px;
  }
`;

const StyledListHeader = styled.ul<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  opacity: 0;
  animation: ani 1.2s forwards;

  @keyframes ani {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    gap: 8px;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

const StyledListItemHeader = styled.li`
  ${TitleSmallSemiBold_desk};
  transition: color 0.3s ease;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleSmallSemiBold_tab}
  }

  &:hover {
    color: ${colors.hover};
  }

  &:active {
    color: ${colors.pressed};
  }

  @media (max-width: 767px) {
    ${TitleSmallSemiBold_tab};
  }

  @media (max-width: 767px) {
    height: 61px;
    align-content: center;
    border-bottom: 1px solid #aaaaaa;

    &:hover {
      color: ${colors.accent};
    }

    &:active {
      color: ${colors.basic};
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  ${TitleSmallSemiBold_desk};
  color: inherit;

  &.active {
    color: ${colors.hover};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleSmallSemiBold_tab};

    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const ButtonWrap = styled.div`
  margin-bottom: 72px;
`;

export {
  StyledButtonContainer,
  StyledListHeader,
  StyledHeader,
  StyledHeaderHead,
  StyledListItemHeader,
  StyledNavLink,
  ButtonWrap,
};
