import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import {
  H4_mob,
  H1,
  H1_mob,
  TextLarge_desk,
  TextLarge_tab,
  TextMedium_desk,
  TextMedium_tab,
  TextSmall_desk,
  TitleBig_tab,
  TextMedium_mob,
  TextBig_desk,
  TextSmall_mob,
  H1_tab,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { NavLink } from 'react-router-dom';

interface ImageProps {
  src: string;
  alt: string;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  *::-webkit-scrollbar {
    width: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background: ${colors.input};
    border-radius: 15px;
  }

  @media screen and (max-width: 966px) {
    gap: 52px;
  }
`;

export const MainTitle = styled.h1`
  ${H1};
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    ${H1_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H1_mob};
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    margin-bottom: 31px;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    gap: 16px;
  }

  @media screen and (max-width: 966px) {
    flex-wrap: wrap;
  }
`;

export const NewsList = styled.ul`
  flex: 1 1 50%;
  padding-top: 5px;
  max-height: 418px;
  overflow-y: scroll;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding-top: 2px;
    max-height: 315px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    max-height: 312px;
    overflow-y: scroll;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    max-height: 434px;
    overflow-y: scroll;
  }
`;

export const NewsItem = styled.li``;

export const NewsListItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${colors.grey};
`;

export const NewsTitle = styled.h2`
  ${TitleBig_tab};
  margin-bottom: 12px;

  @media screen and (max-width: 966px) {
    ${H4_mob};
  }
`;

export const NewsText = styled.p`
  ${TextMedium_desk};
  padding: 0 2px 0 0;
  margin-bottom: 8px;
  max-height: 80px;

  @media screen and (max-width: 966px) {
    ${TextMedium_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_mob}
  }
`;

export const NewsDate = styled.p`
  ${TextSmall_desk};
  color: ${colors.grey};
  word-spacing: 8px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextMedium_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_desk}
  }
`;

export const VideoBlock = styled.div`
  flex: 1 1 50%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: 966px) {
    margin-bottom: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    margin-bottom: 5px;
  }
`;

export const VideoTitle = styled.h3`
  ${TextLarge_desk};
  border-radius: 0 0 16px 16px;
  background-color: #e4d7c7;
  padding: 10px 13px;
  max-height: 55px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    padding: 11px 16px;
  }

  @media screen and (max-width: 966px) {
    padding: 12px 16px;
    ${TextLarge_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_mob};
    padding: 14px 0 10px 16px;
  }
`;

export const IFrameContainer = styled.div``;

export const StyledIframe = styled.video`
  display: block;
  width: 100%;
  height: auto;
  border: none;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
`;

export const PublicationDate = styled.p`
  ${TextMedium_desk};
  word-spacing: 5px;
  margin-top: 8px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
    margin-top: 6px;
  }
`;

export const VideoDescription = styled.div``;

export const NewsCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(322px, 1fr));
  grid-gap: 24px;
  padding: 0;
  margin: 0;
  margin-bottom: 42px;
  list-style: none;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));
    margin-bottom: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));
    grid-gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    max-width: 100%;
  }

  @media (max-width: 320px) {
    grid-template-columns: 273px;
    margin-bottom: 22px;
    width: 100%;
  }
`;

export const NewsCardLink = styled(NavLink)`
  color: ${colors.basic};
`;

export const NewsCardItem = styled.li`
  background-color: ${colors.bgCard};
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }
`;

export const NewsCardImg = styled.img<ImageProps>`
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  height: 327px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 179px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    height: 172px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 283px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 256px;
  }
`;

export const NewsCardTitle = styled.h3`
  ${TextLarge_desk};
  line-height: 130%;
  padding: 10px 16px;
  height: 56px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 387px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    height: 47px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    height: 46px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 54px;
    padding: 14px 14px 0 16px;
  }
`;
