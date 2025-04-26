import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  ButtonText,
  TextMedium_desk,
  TextMedium_mob,
  TextMedium_tab,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const ShareButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ShareButtonsSVGContainer = styled.div`
  display: flex;
  gap: 8px;

  & svg {
    opacity: 0.4;
    cursor: pointer;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 170px;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    flex-wrap: nowrap;
    gap: 10px;

    & svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ShareButtonsTitle = styled.h2`
  ${TextMedium_desk};
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TextMedium_mob};
  }
`;

export const ShareButtonsCopyWrap = styled.div`
  all: unset;
  cursor: pointer;
  display: inline-block;
`;

export const ShareMessage = styled.div``;

export const ShareButtonsCopyButton = styled.button`
  display: flex;
  align-items: center;
  ${ButtonText};
  color: #aaaaaa;
  border: 2px solid #aaaaaa;
  border-radius: 40px;
  padding: 0 10px;

  svg rect {
    stroke: none;
  }
`;
