import styled from 'styled-components';
import {
  H1,
  H1_mob,
  H1_tab,
  TextBig_desk,
  TextLarge_tab,
  TextMedium_desk,
  TextMedium_mob,
  TextMedium_tab,
  TextSmall_desk,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';

export const OpenNewsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    gap: 52px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 32px;
  }
`;

export const OpenNewsTitle = styled.h1`
  ${H1};
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H1_tab};
    padding: 8px 0;
    margin-bottom: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${H1_mob};
    line-height: 140%;
    padding: 0;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    margin-bottom: 28px;
  }
`;

export const OpenNewsImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 810px;
  height: 100%;
  object-position: center;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 490px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    height: 472px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 359px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 256px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    height: 156px;
  }
`;

export const CKEditorNewsContent = styled.div`
  width: 75%;
  max-width: 100%;
  margin-top: 24px;
  word-wrap: break-word;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 729px;
    max-width: 100%;
  }

  p {
    ${TextBig_desk};
    line-height: 128%;
    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      ${TextLarge_tab}
    }
  }

  span {
    ${TextBig_desk};
    line-height: 128%;
    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      ${TextLarge_tab}
    }
  }

  blockquote {
    border-left: 4px solid ${colors.grey};
    padding-left: 16px;
    margin: 16px 0;
    font-style: italic;

    p {
      font-style: italic;
    }
  }
`;

export const OpenNewsFeedbackContainer = styled.div`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid #aaaaaa;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
    padding: 12px 0;
    gap: 16px;
  }
`;

export const OpenNewsTeamContainer = styled.div`
  width: 252px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 4px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: grid;
    grid-template-columns: 40px auto 1fr;
    width: 100%;
    flex-direction: row;
    justify-content: normal;
    column-gap: 4px;
    row-gap: 8px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const OpenNewsTeamText = styled.p`
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    line-height: 130%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-row: 1 / 2;
  }

  @media (max-width: 380px) {
    ${TextMedium_mob};
    line-height: 145%;
  }
`;

export const OpenNewsTeamLogo = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-column: 3/4;
  }
`;

export const OpenNewsFeedbackTextContainer = styled.div`
  ${TextBig_desk};
  line-height: 128%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    gap: 14px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 6px;
    line-height: 145%;
  }

  & p {
    line-height: 128%;
    padding-bottom: 2px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      ${TextMedium_tab};
      line-height: 135%;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      line-height: 145%;
    }
  }
`;

export const OpenNewsDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
  }
`;

export const OpenNewsWrapper = styled.div`
  display: flex;
  column-gap: 18px;
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
  }
`;

export const OpenNewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const OpenNewsDate = styled.h3`
  ${TextMedium_desk};
  color: ${colors.basic};
`;

export const OpenNewsInfoText = styled.span`
  ${TextMedium_desk};
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextSmall_desk};
  }
`;
