import styled from 'styled-components';
import UploadSVG from '@/assets/icons/LoadSVG.svg';
import PaperclipSVG from '@/assets/icons/Paperclip.svg';
import DeleteSVG from '@/assets/icons/Close.svg';
import { Button, TextSmall_desk } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const UploadImageContainer = styled.div``;

export const UploadTitle = styled.p`
  ${Button};
  transition: color 0.5s ease;
`;

export const UploadText = styled.p<{ $isUploaded: boolean }>`
  ${TextSmall_desk};
  line-height: 136%;
  color: ${(props) => (props.$isUploaded ? colors.disabledTag : colors.grey)};
`;

export const UploadIcon = styled(UploadSVG)<{ $isUploaded: boolean }>`
  path {
    transition: fill 0.5s ease;
    fill: ${(props) => (props.$isUploaded ? colors.disabledTag : colors.accent)};
  }
`;

export const UploadLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UploadInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;

  &:focus-visible + ${UploadLabelContainer} {
    outline: 1px solid ${colors.basic};
  }
`;

export const UploadLabel = styled.label<{ $isUploaded: boolean }>`
  display: flex;
  width: max-content;
  gap: 4px;
  cursor: pointer;
  padding: 11px 16px;
  border-radius: 24px;
  border: 1px solid ${(props) => (props.$isUploaded ? `${colors.disabled}` : `${colors.basic}`)};
  ${(props) => (props.$isUploaded ? `color: ${colors.disabled}` : '')};
  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${colors.hover};
  }

  &:hover ${UploadTitle} {
    color: ${colors.hover};
  }

  &:hover ${UploadIcon} path {
    fill: ${colors.hover};
  }
`;

export const UploadAnotherLabel = styled.label<{ $isDisabled: boolean }>`
  display: flex;
  width: max-content;
  gap: 4px;
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  padding: 11px 16px;
  border-radius: 24px;
  border: 1px solid ${(props) => (props.$isDisabled ? `${colors.disabled}` : `${colors.basic}`)};
  ${(props) => (props.$isDisabled ? `color: ${colors.disabled}` : '')};
  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${(props) => (props.$isDisabled ? colors.disabled : colors.hover)};
  }

  &:hover ${UploadTitle} {
    color: ${(props) => (props.$isDisabled ? colors.disabled : colors.hover)};
  }

  &:hover ${UploadIcon} path {
    fill: ${(props) => (props.$isDisabled ? colors.disabled : colors.hover)};
  }
`;

export const UploadFile = styled.div<{ $hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  max-width: 312px;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.$hasError ? `${colors.error}` : `${colors.success}`)};
  border-radius: 40px;
  margin-top: 20px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
    max-width: none;
    justify-content: space-between;
  }
`;

export const Paperclip = styled(PaperclipSVG)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const UploadFileTitle = styled.p`
  ${Button};
  max-width: 224px;
  max-height: 24px;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
`;

export const Delete = styled(DeleteSVG)`
  cursor: pointer;

  path {
    transition: fill 0.5s ease;
  }

  &:hover path {
    fill: ${colors.accent};
  }
`;

export const UploadFilesList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 200px 200px;
  row-gap: 19px;
  column-gap: 32px;
  list-style: none;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;
