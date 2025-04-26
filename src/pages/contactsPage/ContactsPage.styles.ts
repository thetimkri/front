import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

interface ImageProps {
  src: string;
  alt: string;
}

export const ContactsContainer = styled.div`
  display: flex;
  background-color: ${colors.bgCard};
  border-radius: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 298px;
    border-radius: 16px;
  }

  @media (max-width: 690px) {
    height: auto;
  }
`;

export const SectionWrap = styled.div`
  margin-bottom: 35px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-bottom: 40px;
  }
`;

export const ContactsImage = styled.img<ImageProps>`
  width: 50%;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: none;
  }
`;
