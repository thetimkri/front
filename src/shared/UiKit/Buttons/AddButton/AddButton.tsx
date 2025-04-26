import AddIcon from '@/assets/icons/CloseIconHover.svg';
import React from 'react';
import { AddButtonContainer } from '@/shared/UiKit/Buttons/AddButton/AddButton.styled';

interface AddButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  hasError: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const AddButton: React.FC<AddButtonProps> = ({
  children,
  onClick,
  isActive,
  hasError,
  type = 'button',
}) => {
  return (
    <AddButtonContainer type={type} onClick={onClick} $isActive={isActive} $hasError={hasError}>
      {children}
      <AddIcon />
    </AddButtonContainer>
  );
};
