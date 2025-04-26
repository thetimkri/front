import styled from 'styled-components';
import { TextMedium_mob } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

interface TextAreaProps {
  $hasError: boolean;
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  padding: 12px 64px 12px 12px;
  height: 228px;
  ${TextMedium_mob};
  color: ${colors.grey};
  border-radius: 16px;
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `none`)};
  resize: none;
  background-color: ${colors.input};

  &:focus {
    background-color: ${colors.hoverInput};
    color: ${colors.basic};
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    padding: 14px 24px 12px 12px;
  }
`;
