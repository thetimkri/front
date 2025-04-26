import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle';
import {
  MoreStories,
  StoryCard,
  StoryContainer,
  StoryImage,
  StorySubtitle,
} from './KindStoriesSection.styled';

import Arrow from '@/assets/icons/ArrowRightCircleBtn.svg';
import { page } from '@/shared/constants/navigation/page.ts';
import { useStories } from './KindStoriesSection.const';

export const KindStoriesSection = () => {
  const stories = useStories();
  return (
    <section>
      <SectionTitle title="Добрые истории" />
      <StoryContainer>
        {stories.map(({ src, alt, subtitle, link }, index) => (
          <StoryCard key={index} to={`${link}`}>
            <StoryImage src={src} alt={alt} loading="lazy" />
            <StorySubtitle>{subtitle}</StorySubtitle>
          </StoryCard>
        ))}
        <StoryCard to={page.kindStories}>
          <MoreStories>
            <Arrow aria-hidden="true" />
            <p>Больше историй</p>
          </MoreStories>
        </StoryCard>
      </StoryContainer>
    </section>
  );
};

KindStoriesSection.displayName = 'KindStoriesSection';
