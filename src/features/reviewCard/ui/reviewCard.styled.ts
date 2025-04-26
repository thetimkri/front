import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import {
  TextBig_desk,
  TextLarge_desk,
  TextMedium_tab,
  TextSmall_mob,
  // TextMedium_tab,
  // TextSmall_mob,
  TitleLarge_desk,
  TitleLarge_tab,
  TitleMedium_mob,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const ReviewContainer = styled.div`
  display: flex;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
  }
`;

export const ReviewText = styled.p`
  ${TextLarge_desk};
  color: ${colors.basic};
  padding: 16px 0 16px 0;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextBig_desk};
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    padding: 10px 0 10px 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 16px 0 16px 0;
  }
`;

export const ReviewTitle = styled.h1`
  ${TitleLarge_desk};
  color: ${colors.basic};
  margin-bottom: 16px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TitleLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleMedium_mob};
    margin-bottom: 10px;
  }
`;

export const ReviewDate = styled.span`
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
  }
`;

export const ReviewWrapper = styled.div`
  ${TextBig_desk};
  padding-block: 44px;
  padding-inline: 23px;
  width: 30%;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 24%;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 36%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    padding-block: 40px;
    width: 38%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding-block: 10px;
    padding-inline: 15px;
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding-block: 15px;
    padding-inline: 15px;
  }
`;

export const ReviewTextWrapper = styled.div`
  padding: 32px 135px;
  background: ${colors.white};
  border-radius: 16px;
  width: 87%;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding: 32px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
  }
`;

export const QuoteWrapper = styled.div`
  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
