import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  min-width: 273px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 52px;

    & > section:nth-of-type(4) > div:first-of-type a {
      padding: 6px 0;
    }

    & > section:nth-of-type(5) > div:first-of-type a {
      padding: 9px 0;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 32px;
  }
`;

export { MainContainer };
