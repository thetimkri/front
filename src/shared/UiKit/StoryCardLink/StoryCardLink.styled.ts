import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
} from '@/shared/constants/typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledStoryCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 387px;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px 16px 0 0;
  color: ${colors.basic};
`;

export const StyledStoryCardLinkImage = styled.img`
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const StyledStoryCardLinkText = styled.p`
  ${TextLarge_desk};
  line-height: 120%;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${colors.bgCard};
  border-radius: 0 0 16px 16px;
  padding: 16px 16px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    padding: 12px 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob}
  }
`;
