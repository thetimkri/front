import AnotherEntityBlockItem from '@/shared/UiKit/AnotherEntityBlock/AnotherEntityBlockItem/AnotherEntityBlockItem';
import { useAnotherStories } from '../model/useAnotherStories';
import AnotherEntityBlock from '@/shared/UiKit/AnotherEntityBlock/AnotherEntityBlock';
import React from 'react';
import { KindStoryDto } from '@/shared/api/hooks/stories/types.ts';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';

interface AnotherStoriesBlockProps {
  title: string;
  theme: StoryCategory;
  spaceBetween: number;
}

const AnotherStoriesBlock: React.FC<AnotherStoriesBlockProps> = ({
  title,
  theme,
  spaceBetween,
}) => {
  const { data, isLoading, error } = useAnotherStories(theme);
  const results = data?.results || [];

  const breakpoints = {
    360: { slidesPerView: 1 },
    560: { slidesPerView: 2 },
    768: { slidesPerView: 3.8 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 3.67 },
    1920: { slidesPerView: 3.67 },
  };

  const to = '/stories';

  const anotherHistoryRender = (storyData: KindStoryDto) => (
    <AnotherEntityBlockItem to={to} entityItem={storyData} />
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Произошла ошибка {error.message}</div>;
  if (!results.length) return <h2>Нет похожих историй</h2>;

  return (
    <AnotherEntityBlock
      title={title}
      theme={theme}
      breakpoints={breakpoints}
      spaceBetween={spaceBetween}
      cards={results}
      renderCard={anotherHistoryRender}
    />
  );
};

export default AnotherStoriesBlock;
