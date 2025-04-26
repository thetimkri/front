import { FC } from 'react';
import { StyledSectionTitle } from './SectionTitle.styled';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <StyledSectionTitle>{title}</StyledSectionTitle>;
};
