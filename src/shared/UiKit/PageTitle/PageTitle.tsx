import { StyledPageTitle } from './PageTitle.styled';

type TProps = {
  titleText: string;
};

export const PageTitle = ({ titleText }: TProps) => {
  return <StyledPageTitle>{titleText}</StyledPageTitle>;
};
