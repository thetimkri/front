import styled from 'styled-components';
import { TextLarge_mob } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const InputContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  height: 48px;
  padding: 14px;
  ${TextLarge_mob};
  color: ${colors.grey};
  border-radius: 16px;
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `none`)};
  background-color: ${colors.input};

  &:focus {
    background-color: ${colors.hoverInput};
    color: ${colors.basic};
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    padding: 9px 0 19px 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 12px 0 12px 14px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 12px 0 14px 14px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding: 12px 0 8px 14px;
  }
`;
