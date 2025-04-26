import { FC } from 'react';
import { StyledNavigationSection } from './NavigationSection.styled';
import { CARDS_DATA } from './NavigationSection.const';
import { AboutUsCard } from '../index';

export const NavigationSection: FC = () => {
  return (
    <StyledNavigationSection>
      {CARDS_DATA.map((card) => (
        <AboutUsCard key={card.id} title={card.title} image={card.image} link={card.link} />
      ))}
    </StyledNavigationSection>
  );
};
