import { StoryCategory } from '@/shared/utils/storyCategories.ts';
import { useQuery } from '@tanstack/react-query';
import { KindStoriesResDto } from '@/shared/api/hooks/stories/types.ts';
import { geKindStoriesQuery } from '@/entities/kindStory/queries.ts';

export function useAnotherStories(theme: StoryCategory) {
  const { data, isLoading, isError, isSuccess, error } = useQuery<KindStoriesResDto, Error>({
    ...geKindStoriesQuery(1, 7, theme),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
