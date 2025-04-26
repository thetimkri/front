import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  TitleMedium_desk,
  TextBig_desk,
  TextLarge_NoResults,
  TextLarge_tab_des,
  TextMedium_mob,
} from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

export const DirectoryInfoCard = styled.div`
  padding: 16px 8px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding: 16px 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 16px 8px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding: 8px 4px;
  }
`;

export const Title = styled.h2`
  ${TitleMedium_desk};
  margin: 0 0 16px 0;
  word-break: break-word;

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextLarge_tab_des};
    margin: 0 0 12px 0;
  }
`;

export const Description = styled.p`
  ${TextBig_desk};
  margin: 0 0 16px 0;
  word-break: break-word;

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const Address = styled.p`
  ${TextBig_desk};
  margin: 0 0 24px 0;
  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
    margin: 0 0 16px 0;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

export const Tag = styled.div`
  background-color: ${colors.disabledTag};
  padding: 9.5px 16px;
  border-radius: 30px;
  ${TextLarge_NoResults}
  white-space: nowrap;
`;
