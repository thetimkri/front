import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import {
  InputFooterCharacterCounter,
  InputFooterContainer,
  InputFooterCounter,
  InputFooterMaxCounter,
} from './InputCharCounter.styled.ts';
import React from 'react';

type TInputFooterProps = {
  error?: string | undefined;
  length?: number;
  maxLength?: number;
};

const InputCharCounter: React.FC<TInputFooterProps> = ({ error, length, maxLength }) => {
  const validLength = length ?? 0;
  return (
    <InputFooterContainer>
      {error && <ErrorMessage message={error} />}
      {(validLength === 0 || validLength > 0) && maxLength && !error && (
        <InputFooterCounter>
          <InputFooterCharacterCounter $isOverLimit={validLength > maxLength}>
            {validLength}
          </InputFooterCharacterCounter>
          <InputFooterMaxCounter>/{maxLength}</InputFooterMaxCounter>
        </InputFooterCounter>
      )}
    </InputFooterContainer>
  );
};

export default InputCharCounter;
