import { StyledAccentButton, TStyledAccentButtonProps } from './AccentButton.styled';

interface TButtonProps extends TStyledAccentButtonProps {
  label: string;
  link?: string;
}

export const AccentButton = ({
  size = '216px',
  height = '80px',
  label,
  link,
  ...rest
}: TButtonProps) => {
  return link ? (
    <StyledAccentButton as="a" size={size} height={height} href={link} {...rest}>
      {label}
    </StyledAccentButton>
  ) : (
    <StyledAccentButton size={size} height={height} {...rest}>
      {label}
    </StyledAccentButton>
  );
};
