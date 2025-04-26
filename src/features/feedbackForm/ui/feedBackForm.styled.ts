import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { H2_mob, H3_tab, TitleBig_tab } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

export const FeedbackContainer = styled.div`
  flex: 1;
  max-width: 524px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    gap: 19px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    gap: 14px;
  }

  button {
    margin-top: 32px;

    @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
      gap: 28px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      gap: 20px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      gap: 34px;
    }
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 19px;
  ${H2_mob};
  color: ${colors.basic};
  line-height: 120%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleBig_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${H3_tab};
  }
`;

export const HighlightedText = styled.span`
  color: ${colors.accent};

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${H3_tab};
  }
`;
