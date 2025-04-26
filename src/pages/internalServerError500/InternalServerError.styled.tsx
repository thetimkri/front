import styled from 'styled-components';
import { colors } from '@/shared/constants/colors/index';
import {
  TitleSmallSemiBold_desk,
  TitleSmallSemiBold_tab,
  TextLarge_desk,
  TextBig_desk,
  TextMedium_desk,
  TextMedium_mob,
} from '@/shared/constants/typography';

export const InternalServerErrorContainer = styled.main`
  display: flex;
  align-items: center;
  margin-bottom: -72px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    width: 980px;
    align-items: flex-start;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    width: 944px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
    width: 100%;
    align-items: unset;
    margin-bottom: -52px;
  }
  @media (max-width: 560px) {
    margin-bottom: -32px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    width: 312px;
  }
`;

export const InternalServerErrorWrap = styled.div`
  width: 798px;
  opacity: 75%;
  text-wrap-style: pretty;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    width: 478px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    width: 460px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    width: 70%;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    width: 273px;
  }
`;

export const InternalServerErrorTitle = styled.h1`
  font-size: 100px;
  color: ${colors.basic};
  margin-bottom: 35px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    font-size: 60px;
    margin-bottom: 25px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    font-size: 56px;
  }
  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    font-size: 40px;
  }
`;

export const Title = styled.h2`
  font: ${TextLarge_desk};
  margin-bottom: 35px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    font: ${TitleSmallSemiBold_desk};
    margin-bottom: 25px;
  }

  @media (max-width: 360px) {
    font: ${TitleSmallSemiBold_tab};
    margin-bottom: 17px;
  }
`;

export const Paragraph = styled.p`
  font: ${TextLarge_desk};
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    font: ${TextBig_desk};
    margin-bottom: 14px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    margin-bottom: 10px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    font: ${TextMedium_desk};
  }
`;

export const List = styled.ul`
  font: ${TextLarge_desk};
  padding-left: 30px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    font: ${TextMedium_desk};
    padding-left: 17px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    padding-left: 20px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    font: ${TextMedium_mob};
  }
`;

export const ListItem = styled.li`
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    margin-bottom: 10px;
  }
`;

export const InternalServerErrorImage = styled.img`
  height: 559px;
  opacity: 1;
  margin-left: 150px;

  @media (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    //width: 410px;
    height: 410px;
    margin-left: 100px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    height: 424px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    margin-right: auto;
    margin-left: auto;
    height: 347px;
  }

  @media (max-width: ${(props) => props.theme.mediaWidth.smMobile}) {
    height: 336px;
  }
`;

export const Link = styled.a`
  color: ${colors.accent};
`;
