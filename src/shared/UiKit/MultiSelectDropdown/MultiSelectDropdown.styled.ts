import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { TextBig_desk, Exo20, TextLarge_tab_des } from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const DropdownWrapper = styled.div<{ $active?: boolean }>`
  position: relative;
  display: inline-block;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 273px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    width: 100%;
  }
`;

export const DropdownButton = styled.button<{ $active?: boolean }>`
  width: 100%;
  min-width: 273px;

  display: flex;
  //display: ${({ $active }) => ($active ? `block` : 'flex')};
  align-items: center;
  justify-content: space-between;

  padding: 12px 16px;
  //padding: ${({ $active }) => ($active ? `13px 30px` : '12px 16px')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  text-align: left;
  ${Exo20};

  border: ${({ $active }) => ($active ? 'none' : `1px solid ${colors.basic}`)};
  background-color: ${({ $active }) => ($active ? `${colors.bgCard}` : 'transparent')};
  border-radius: 42px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    min-width: 200px;
  }

  .icon {
    display: flex;
    //display: ${({ $active }) => ($active ? 'none' : 'flex')};
    align-items: center;
    margin-left: 15px;

    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin-left: 9px;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${TextLarge_tab_des};
  }
`;

export const DropdownMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  margin-top: 12px;
  width: 100%;
`;

export const DropdownSearchInput = styled.input`
  width: 100%;
  margin-bottom: 8px;
  padding: 12px 12px 16px 12px;
  border-radius: 16px;
  background-color: ${colors.dropDown};
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const DropdownMenu = styled.div`
  background: ${colors.dropDown};
  border-radius: 12px;
  padding: 16px;
  width: 273px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    width: 100%;
  }
`;

export const DropdownMenuOptionsContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.bgCard};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.accent};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: ${colors.accent} ${colors.bgCard};
`;

export const OptionItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  ${TextBig_desk};
  cursor: pointer;
`;

export const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;

  & + span {
    min-width: 20px;
    height: 20px;
    margin-right: 9px;
    border: 2px solid ${colors.basic};
    border-radius: 8px;
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  &:focus-visible + span {
    outline: 1px solid ${colors.basic};
  }

  &:hover + span {
    border-color: ${colors.hover};
  }

  &:checked + span {
    border: 2px solid ${colors.accent};

    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 1px;
      width: 5px;
      height: 10px;
      border: solid ${colors.accent};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);

      @media screen and (max-width: ${MainTheme.mediaWidth.smMobile}) {
        left: 6px;
        top: 3px;
        width: 4px;
        height: 8px;
      }
    }
  }

  &:focus + span {
    background-color: transparent;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  @media screen and (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    flex-direction: row;
  }
`;
