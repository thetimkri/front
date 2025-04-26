import { PrimaryButton } from '@/shared/UiKit/Buttons';
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerWrapper,
  GradientOverlay,
  SecondImage,
  BannerSpan,
} from './Banner.styled';

import Child from '@/assets/images/banner/child.webp';
import { page } from '@/shared/constants/navigation/page.ts';
export const Banner = () => {
  return (
    <section>
      <BannerContainer>
        <BannerImage>
          <SecondImage src={Child} />
          <GradientOverlay />
        </BannerImage>
        <BannerContent>
          <BannerTitle>Новости Добрых Деяний</BannerTitle>
          <BannerDescription>
            В нашем проекте мы делимся добрыми историями, которые наполняют сердца теплом и
            надеждой. Здесь вы можете рассказать собственную историю доброты и поделиться ею с
            другими читателями.
            <BannerSpan>И пусть хороших поступков становится всё больше!</BannerSpan>
          </BannerDescription>

          <BannerWrapper>
            <PrimaryButton link={page.kindStories} label="Добрые истории" $btnType="colored" />
            <PrimaryButton
              link={page.tellStory}
              label="Рассказать свою историю"
              $btnType="transparent"
            />
          </BannerWrapper>
        </BannerContent>
      </BannerContainer>
    </section>
  );
};
