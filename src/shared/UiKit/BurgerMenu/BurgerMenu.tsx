import OpenIcon from '@/assets/icons/BurgerMenu.svg';
import CloseIcon from '@/assets/icons/Close.svg';
import { BurgerButton, BurgerMenuWrapper } from '@/shared/UiKit/BurgerMenu/BurgerMenu.styled';
import React from 'react';

interface BurgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}
const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick, isOpen }) => {
  return (
    <BurgerMenuWrapper>
      <BurgerButton onClick={onClick}>{isOpen ? <CloseIcon /> : <OpenIcon />}</BurgerButton>
    </BurgerMenuWrapper>
  );
};
export default BurgerMenu;
