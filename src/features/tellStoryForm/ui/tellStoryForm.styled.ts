import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const TellStoryFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0 32px;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 0 24px;
    gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 16px;
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

export const TellStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TellStoryFormSubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
