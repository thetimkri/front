import React, { useState, useEffect } from 'react';
import {
  UniversalBtnLink,
  UniversalCardContent,
  UniversalCardImg,
  UniversalCardLink,
  UniversalCardsGrid,
  UniversalCardsSection,
  UniversalCardsTitle,
  UniversalCardsWrapper,
  UniversalCardTitle,
  UniversalLink,
} from '@/shared/UiKit/UniversalCards/UniversalCards.styled.ts';
import Image from '@/shared/UiKit/Image/Image.tsx';
import { KindStoryDto } from '@/shared/api/hooks/stories/types.ts';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';
import { useKindStoriesByTheme } from '@/features/kindStoriesCategorySection/model/useKindStoriesByTheme.ts';

type UniversalCardsProps = {
  title: string;
  theme: StoryCategory;
  routerLink: string;
};

export const UniversalCards = ({ title, theme, routerLink }: UniversalCardsProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const { data } = useKindStoriesByTheme();
  const [displayedStories, setDisplayedStories] = useState<KindStoryDto[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setVisibleCount(width <= 360 ? 1 : width <= 560 ? 2 : width <= 768 ? 3 : 4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (data) {
      const categoryEntry = data.find((category) =>
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(category).some(([_, stories]) => stories[0]?.theme === theme)
      );

      const stories = categoryEntry ? Object.values(categoryEntry)[0] : [];
      setDisplayedStories(stories.slice(0, visibleCount));
    }
  }, [data, theme, visibleCount]);

  const truncateTitle = (title: string, maxLength: number) =>
    title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;

  return (
    <>
      <UniversalCardsSection>
        <UniversalCardsWrapper>
          <UniversalCardsTitle>{title}</UniversalCardsTitle>
          <UniversalLink to={`/stories?theme=${theme}`}>Показать все истории</UniversalLink>
        </UniversalCardsWrapper>
        <UniversalCardsGrid>
          {displayedStories.length > 0 ? (
            displayedStories.map((item) => (
              <UniversalCardLink key={item.id} to={`/stories/${item.id}?theme=${theme}`}>
                <UniversalCardContent>
                  <UniversalCardImg
                    as={Image}
                    src={item.main_image}
                    alt={title || 'Изображение'}
                    loading="lazy"
                  />
                  <UniversalCardTitle>
                    {truncateTitle(item.title, windowWidth <= 360 ? 30 : 20)}
                  </UniversalCardTitle>
                </UniversalCardContent>
              </UniversalCardLink>
            ))
          ) : (
            <div>Нет историй для отображения</div>
          )}
        </UniversalCardsGrid>
        <UniversalBtnLink to={routerLink}>Все истории</UniversalBtnLink>
      </UniversalCardsSection>
    </>
  );
};
