import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { TextBig_desk } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

export const JoinTeamFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: 100%;
  padding: 0 32px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 0 24px;
    gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 35px;
    padding: 0;
  }

  > div:nth-child(4) {
    margin-top: 16px;

    > div {
      width: 49%;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-top: 15px;

      > div {
        width: 64%;
      }
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      > div {
        width: 100%;
      }
    }
  }

  > div:nth-child(5) {
    margin-top: 14px;
  }

  > div:nth-child(6) {
    margin-top: 16px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-top: 4px;
    }

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin-top: 12px;
    }
  }

  > div:nth-child(7) {
    margin-top: 7px;

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin-top: 12px;
    }
  }
`;

export const JoinTeamFormTelephoneContainer = styled.div`
  margin-top: 6px;
  position: relative;
`;

export const JoinTeamFormTelephoneRegion = styled.p`
  ${TextBig_desk};
  color: ${colors.basic};
  top: 12px;
  left: 42px;
  position: absolute;
  z-index: 3;
`;

export const JoinTeamFormSubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-top: 2px;
    > button {
      width: 66%;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    > button {
      width: 100%;
      margin-top: 12px;
    }
  }
`;
