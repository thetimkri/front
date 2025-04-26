import { FC } from 'react';
import {
  StyledHeroSectionImage,
  StyledHeroSectionImageWrapper,
  StyledHeroSectionText,
  StyledHeroSectionWrapper,
} from './HeroSection.styled';

import HeroImg from '@/assets/images/aboutUs/heroSectionImg.jpg';

export const HeroSection: FC = () => {
  return (
    <StyledHeroSectionWrapper>
      <StyledHeroSectionText>
        Цель нашего проекта освещать положительные события и&nbsp;новости для формирования
        позитивной, созидательной атмосферы в&nbsp;обществе, вдохновлять на&nbsp;добрые поступки,
        поддерживать развитие семейных ценностей, здоровый образ жизни, повышать настроение
        и&nbsp;веру в&nbsp;свои силы.
      </StyledHeroSectionText>
      <StyledHeroSectionImageWrapper>
        <StyledHeroSectionImage src={HeroImg} alt="О нас" loading="lazy" />
      </StyledHeroSectionImageWrapper>
    </StyledHeroSectionWrapper>
  );
};
