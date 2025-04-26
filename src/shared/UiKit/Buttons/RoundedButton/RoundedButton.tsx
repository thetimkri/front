import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyleRoundedButton } from './RoundedButton.styled';

interface IRoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export const RoundedButton = ({ icon }: IRoundedButtonProps) => {
  return <StyleRoundedButton>{icon}</StyleRoundedButton>;
};
