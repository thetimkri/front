import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StoriesCardList } from './kindStoriesCategorySection.styled';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { StoryCardLink } from '@/shared/UiKit/StoryCardLink/StoryCardLink';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';
import { useAllStories } from '@/features/kindStories/model/useAllStories.ts';

const PAGE_SIZE = 100;
const INITIAL_VISIBLE_COUNT = 4;
const LOAD_MORE_COUNT = 4;

export const KindStoriesCategorySection: FC<{ theme: StoryCategory }> = ({ theme }) => {
  const { pathname } = useLocation();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const { data, error, isLoading } = useAllStories(1, PAGE_SIZE, theme);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [theme]);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <div>Что-то пошло не так при загрузке данных</div>;
  }

  const stories = data?.results || [];
  const visibleStories = stories.slice(0, visibleCount);
  const hasMore = visibleCount < stories.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <>
      <StoriesCardList>
        {visibleStories.length > 0 ? (
          visibleStories.map(({ id, title, main_image }) => (
            <StoryCardLink
              main_image={main_image}
              title={title}
              key={id}
              link={`${pathname}/${id}?theme=${theme}`}
            />
          ))
        ) : (
          <p>Нет доступных историй.</p>
        )}
      </StoriesCardList>
      {hasMore && (
        <PrimaryButton label="Загрузить ещё" $btnType="colored" onClick={handleLoadMore} />
      )}
    </>
  );
};
