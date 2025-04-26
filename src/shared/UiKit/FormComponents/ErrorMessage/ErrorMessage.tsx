import ErrorIcon from '@/assets/icons/Error.svg';
import {
  ErrorIconWrap,
  ErrorMessageContainer,
  ErrorMessageText,
} from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.styled.ts';

interface ErrorMessageProps {
  message?: string | null;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <ErrorMessageContainer>
    <ErrorIconWrap>
      <ErrorIcon />
    </ErrorIconWrap>
    <ErrorMessageText>{message}</ErrorMessageText>
  </ErrorMessageContainer>
);

export default ErrorMessage;
