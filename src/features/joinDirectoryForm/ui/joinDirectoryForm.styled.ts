import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import { colors } from '@/shared/constants/colors';
import { TextBig_desk } from '@/shared/constants/typography';

export const KindDirectoryFormWrap = styled.form`
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
    p {
      font-size: 14px;
    }
  }
`;

export const KindDirectoryFormSubmitContainer = styled.div`
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

export const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const KindDirectoryFormWrapper = styled.div`
  padding-top: 16px;
`;

export const ToggleWrapper = styled.div<{ $isOn: boolean }>`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.$isOn ? `${colors.accent}` : `${colors.input}`)};
  border-radius: 9999px;
  padding: 4px 0 4px 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
`;

export const ToggleCircle = styled.div<{ $isOn: boolean }>`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.$isOn ? 'translateX(32px)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
`;

export const JoinDirectoryButton = styled.button<{
  $isOpen: boolean;
  $isPlaceholder: boolean;
  $hasError: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  width: 127px;
  height: 48px;
  background-color: ${MainTheme.colors.input};
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `none`)};
  border-radius: 16px;
  cursor: pointer;
  user-select: none;
  color: ${MainTheme.colors.grey};
  ${TextBig_desk};

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const JoinDirectoryDropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 127px;
  background-color: ${MainTheme.colors.dropDown};
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 280px;
  padding: 12px;
  display: flex;
  gap: 6px;
  color: ${MainTheme.colors.basic};
  ${TextBig_desk};
  flex-direction: column;
  cursor: pointer;
  overflow-y: scroll;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.$isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.2s ease;
`;

export const JoinDirectoryDropdownWrap = styled.div`
  display: flex;
  gap: 24px;
`;

export const JoinDirectoryWrapper = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
  }
`;

export const JoinDirectoryDropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;
