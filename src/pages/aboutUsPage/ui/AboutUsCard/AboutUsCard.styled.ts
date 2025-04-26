import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { H2, H2_tab, TitleLarge_desk, TitleMedium_desk } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export interface TStyledAboutUsCardWrapperProps {
  image: string;
}

export const StyledAboutUsCardWrapper = styled(Link)<TStyledAboutUsCardWrapperProps>`
  position: relative;
  width: 32.4%;
  height: 360px;
  border-radius: 16px;
  padding-top: 58px;
  padding-bottom: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-decoration: none;
  color: ${colors.basic};

  transition: padding 1s cubic-bezier(0.25, 0.1, 0.25, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${(props) => props.image}) center/cover no-repeat;
    z-index: 0;
    transform: scale(1.05);
    transition: transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(228, 215, 199, 0.9);
    z-index: 1;
    opacity: 1;
    transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &:hover {
    padding-top: 0;
    justify-content: flex-end;

    &::before {
      transform: scale(1);
    }

    &::after {
      opacity: 0;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    height: 212px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 204px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 150px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: unset;
    height: 216px;
  }
`;

export const StyledFlowerIcon = styled.div`
  position: relative;
  z-index: 2;
  width: 40px;
  height: 40px;
  transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${StyledAboutUsCardWrapper}:hover & {
    transform: translateY(-10px);
  }
`;

export const StyledAboutUsCardTitle = styled.h1`
  ${H2};
  position: relative;
  z-index: 2;
  text-align: center;
  transition: all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${StyledAboutUsCardWrapper}:hover & {
    color: ${colors.white};
  }

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    ${H2_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleMedium_desk}
  }
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleLarge_desk}
  }
`;
