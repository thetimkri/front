import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_mob,
  TextLarge_tab,
  Exo20,
  TextLarge_tab_des,
} from '@/shared/constants/typography';
import AddBtn from '@/assets/icons/AddDirectoryButton.svg';

export const StyledTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.tablet}) {
    margin-bottom: 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    h1 {
      font-size: 19px;
    }
  }
`;

export const StyledKindDirectoryPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1209px;
`;

export const StyledKindDirectoryPageText = styled.p`
  ${TextLarge_desk};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    ${Exo20};
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextLarge_tab_des};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_tab};
  }
`;

export const StyledDirectorySelectorsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 72px;
  margin-bottom: 38px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    margin-bottom: 36px;
    //flex-direction: column;
    row-gap: 20px;
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-top: 52px;
    flex-direction: column;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-top: 32px;
    margin-bottom: 16px;
  }
`;

export const StyledSelectorsContainerLeft = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    width: 100%;
    gap: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledSelectorsContainerRight = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    width: 100%;
    gap: 24px;
    flex-direction: column;
    align-items: flex-end;

    button {
      width: 100%;
    }
  }
`;

export const StyledDirectoryCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 32px;
  margin-top: 72px;
  margin-bottom: 40px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    margin-top: 52px;
    margin-bottom: 52px;
    grid-column-gap: 16px;
  }

  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    grid-template-columns: 1fr;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const StyledButtonContainer = styled.div`
  @media (max-width: ${MainTheme.mediaWidth.mobile}) {
    display: none;
  }
`;

export const StyledButtonLink = styled(NavLink)`
  width: 48px;
  height: 48px;
`;

export const StyledAddBtn = styled(AddBtn)`
  circle {
    transition: stroke 0.3s ease-in-out;
  }

  path {
    transition: stroke 0.2s ease-in-out;
  }

  &:hover {
    circle {
      stroke: ${colors.hover};
    }

    path {
      fill: ${colors.hover};
    }
  }

  &:active path {
    stroke: ${colors.hover};
  }
`;

export const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  cursor: pointer;

  span {
    ${Exo20};
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    span {
      ${TextLarge_tab_des};
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 0px;
  }
`;
export const ToggleWrapper = styled.div<{ $isOnline: boolean }>`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.$isOnline ? `${colors.accent}` : `${colors.input}`)};
  border-radius: 9999px;
  padding: 4px 0 4px 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  margin-right: 32px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    margin-right: 0px;
  }
`;

export const ToggleCircle = styled.div<{ $isOnline: boolean }>`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.$isOnline ? 'translateX(32px)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;
`;
export const FormInputTitle = styled.p`
  ${TextBig_desk};
  margin-bottom: 5px;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextLarge_mob};
    line-height: 128%;
  }
`;
