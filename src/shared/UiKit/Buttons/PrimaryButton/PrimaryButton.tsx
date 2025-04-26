import { StyledPrimaryButton, TStyledButtonProps } from './PrimaryButton.styled';

interface TButtonProps extends TStyledButtonProps {
  label: string;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryButton = ({
  $btnType = 'colored',
  size = '100%',
  label,
  link,
  onClick,
  disabled,
  type = 'button',
  ...rest
}: TButtonProps) => {
  return link ? (
    <StyledPrimaryButton tabIndex={0} as="a" $btnType={$btnType} size={size} href={link} {...rest}>
      {label}
    </StyledPrimaryButton>
  ) : (
    <StyledPrimaryButton
      tabIndex={0}
      type={type}
      $btnType={$btnType}
      size={size}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </StyledPrimaryButton>
  );
};
