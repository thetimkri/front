import { SuccessContainer, SuccessText } from './SuccessMessage.styled.ts';
import SuccessSVG from '@/assets/icons/SuccessIcon.svg';
import React from 'react';

type TSuccessMessageProps = {
  message: string;
};

const SuccessMessage: React.FC<TSuccessMessageProps> = ({ message }) => {
  return (
    <SuccessContainer>
      <SuccessSVG />
      <SuccessText>{message}</SuccessText>
    </SuccessContainer>
  );
};

export default SuccessMessage;
