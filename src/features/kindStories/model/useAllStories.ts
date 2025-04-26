import { geKindStoriesQuery } from '@/entities/kindStory/queries.ts';
import { useQuery } from '@tanstack/react-query';
import { KindStoriesResDto } from '@/shared/api/hooks/stories/types';
import { StoryCategory } from '@/shared/utils/storyCategories';

export function useAllStories(
  page: number,
  page_size: number,
  theme?: StoryCategory,
  search?: string
) {
  const { data, isLoading, isError, isSuccess, error } = useQuery<KindStoriesResDto, Error>({
    ...geKindStoriesQuery(page, page_size, theme, search),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
