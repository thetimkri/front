import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  H1_mob,
  H1_tab,
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
  TitleLarge_desk,
  TitleLarge_tab,
  TitleMedium_mob,
} from '@/shared/constants/typography';

export const FormSection = styled.section`
  > div > ul {
    margin-bottom: 18px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-bottom: 20px;
      padding: 6px 0;
    }

    @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
      padding: 14px 0;
      margin-bottom: 6px;
    }
  }

  > h2 {
    margin-bottom: 48px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      ${H1_tab};
      line-height: 140%;
      margin-bottom: 32px;
    }

    @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
      ${H1_mob};
      margin-bottom: 34px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
  gap: 12px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 11px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 7px;
  }
`;

export const FormTitle = styled.p`
  ${TitleLarge_desk};
  line-height: 140%;
  margin-bottom: 8px;
  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TitleMedium_mob};
    margin-bottom: 6px;
  }
`;

export const FormParagraph = styled.p`
  ${TextLarge_desk};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextLarge_tab};
    line-height: 130%;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    line-height: 150%;
  }
`;

export const FormInputTitle = styled.p`
  ${TextBig_desk};
  margin-bottom: 5px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob};
    line-height: 128%;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TellStoryInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 6px;
  }
`;

export const TellStoryImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormInputWrapper = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 5px;
  }
`;
