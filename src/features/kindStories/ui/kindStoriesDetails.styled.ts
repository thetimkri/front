import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  ButtonText_mob,
  H2_tab,
  H3_tab,
  TextBig_desk,
  TextMedium_desk,
  TextMedium_mob,
  TextMedium_tab,
  TextSmall_mob,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const OpenStoriesQuoteBlock = styled.h2`
  ${H2_tab};
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H3_tab};
    margin-bottom: 16px;
  }
`;

export const OpenStoriesImage = styled.img`
  object-fit: cover; /* Сохраняем обрезку для заполнения контейнера */
  width: 100%;
  height: auto; /* Убираем фиксированную высоту */
  max-height: 810px;
  object-position: center 30%;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    max-height: 472px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    max-height: 344px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    max-height: 256px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    max-height: 156px;
  }
`;

export const OpenStoriesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: column;
  }
`;

export const OpenStoriesDetails = styled.div`
  ${TextMedium_desk};
  display: flex;
  flex-direction: column;
  width: 32%;
  gap: 24px;
  color: ${colors.grey};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: grid;
    grid-template-columns: 0.96fr 2fr 0.96fr;
    grid-template-rows: 32% 1fr;
    width: 100%;
    gap: 16px;

    & > div:nth-child(2) {
      grid-row: 2 / 3;
    }

    & > div:nth-child(3) {
      grid-row: 1 / 3;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 14% 21% 1fr;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    display: flex;
  }
`;

export const OpenStoriesDesc = styled.div`
  ${TextMedium_desk};
  width: 75%;
  word-wrap: break-word;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    width: 70%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
  }

  &.cke-content {
    blockquote {
      border-left: 4px solid ${colors.grey};
      padding-left: 16px;
      margin: 16px 0;
      font-style: italic;

      p {
        font-style: italic;
      }
    }
  }
`;

export const CKEditorContent = styled.div`
  margin-bottom: 20px;

  span {
    ${TextBig_desk};
  }

  p {
    ${TextBig_desk};
    margin-bottom: 16px;
  }
`;

export const OpenStoriesDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OpenStoriesTitle = styled.h2`
  ${TextMedium_desk};
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const OpenStoriesAuthorList = styled.div`
  display: block;
  row-gap: 16px;
`;

export const OpenStoriesInfoText = styled.p`
  ${TextMedium_desk};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${ButtonText_mob};
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextSmall_mob};
  }
`;

export const OpenStoriesDescription = styled.span`
  ${TextMedium_desk};
  color: ${colors.grey};
`;

export const OpenStoriesAuthorItems = styled.ul`
  list-style: none;
`;
export const OpenStoriesAuthorItem = styled.li``;
