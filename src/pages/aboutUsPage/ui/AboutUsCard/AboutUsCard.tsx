import { FC } from 'react';
import {
  StyledAboutUsCardTitle,
  StyledAboutUsCardWrapper,
  StyledFlowerIcon,
} from './AboutUsCard.styled';

import Flower from '@/assets/icons/Flower.svg';

interface CardProps {
  title: string;
  image: string;
  link: string;
}

export const AboutUsCard: FC<CardProps> = ({ title, image, link }) => {
  return (
    <StyledAboutUsCardWrapper to={link} image={image}>
      <StyledFlowerIcon as={Flower} />
      <StyledAboutUsCardTitle>{title}</StyledAboutUsCardTitle>
    </StyledAboutUsCardWrapper>
  );
};
