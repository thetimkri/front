import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const AnotherEntityBlockItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px 16px 0 0;
`;

export const AnotherEntityBlockItemImage = styled.img`
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
`;

export const AnotherEntityBlockItemText = styled.p`
  ${TextLarge_desk};
  line-height: 130%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: ${colors.bgCard};
  border-radius: 0 0 16px 16px;
  padding: 16px 16px;
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
    padding: 10px 0px 15px 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    padding-top: 11px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob};
    padding-top: 8px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding-top: 14px;
    padding-bottom: 18px;
  }
`;
