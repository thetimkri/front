import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { TextBig_desk } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';

interface SocialLinkButtonProps {
  $isPlaceholder: boolean;
  $isOpen: boolean;
  $hasError: boolean;
}

export const SocialLinkContainer = styled.div`
  display: flex;
  position: relative;
  gap: 8px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
  }
`;

export const AddButtonWrap = styled.div`
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const SocialLinkButton = styled.button<SocialLinkButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  width: 215px;
  height: 48px;
  background-color: ${MainTheme.colors.input};
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `none`)};
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  color: ${MainTheme.colors.basic};
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 215px;
  background-color: ${MainTheme.colors.dropDown};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 280px;
  overflow-y: auto;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.$isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.2s ease;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }
`;

export const SocialLinkOption = styled.div<{ disabled?: boolean }>`
  padding: 12px 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s;
  ${TextBig_desk};

  ${({ disabled }) =>
    disabled
      ? `
      color: rgba(68, 68, 68, 0.15);
      cursor: not-allowed;
      `
      : `
      &:hover {
        background-color: #f0f0f0;
      }
  `}
`;
