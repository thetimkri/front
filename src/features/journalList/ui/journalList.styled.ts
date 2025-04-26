import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  TitleLarge_desk,
  TitleLarge_tab,
  TitleSmallSemiBold_tab,
} from '@/shared/constants/typography';

interface ImgProps {
  src: string;
  alt: string;
}

export const JournalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(524px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(364px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    grid-template-columns: repeat(auto-fill, minmax(299px, 1fr));
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-columns: repeat(3, 219px);
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    grid-template-columns: repeat(2, 272px);
    gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  }
`;

export const JournalCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const JournalImg = styled.img<ImgProps>`
  margin-bottom: 20px;
  width: 524px;
  height: 680px;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;

  @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
    width: 365px;
    height: 472px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 311px;
    height: 400px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    width: 299px;
    height: 388px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 219px;
    height: 292px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
    border-radius: 8px;
  }
`;

export const JournalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${TitleLarge_desk};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TitleSmallSemiBold_tab};
  }
`;
