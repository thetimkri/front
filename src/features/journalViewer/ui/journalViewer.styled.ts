import { MainTheme } from '@/shared/constants/theme/MainTheme';
import styled from 'styled-components';

export const JournalViewerContainer = styled.div`
  width: 100%;
  height: 110vh;
  padding-top: 72px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 6.48px;
  }

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    height: 100vh;
    padding-top: 72px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 80vh;
    padding-top: 72px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 70vh;
    padding-top: 52px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 60vh;
    padding-top: 32px;
  }
`;
