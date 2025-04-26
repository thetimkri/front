import { StyledTagButtonLink } from './TagButtonLink.styled';

type TProps = {
  text: string;
  link: string;
};

export const TagButtonLink = ({ text, link }: TProps) => {
  return <StyledTagButtonLink to={link}>{text}</StyledTagButtonLink>;
};
