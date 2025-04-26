import { kindStoriesApi } from '@/shared/api/hooks/stories/queries/apiKindStories.ts';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';

const kindStoriesQueryKey = 'goodStories';

export const geKindStoriesQuery = (
  page: number,
  page_size: number,
  theme?: StoryCategory,
  search?: string
) => {
  return {
    queryKey: [kindStoriesQueryKey, 'allStories', { page, theme, search }],
    queryFn: () => kindStoriesApi.getKindStoriesData({ page, page_size, theme, search }),
  };
};

export const getKindStoryByIdQuery = (id: number) => {
  return {
    queryKey: [kindStoriesQueryKey, 'byId', id],
    queryFn: () => kindStoriesApi.getKindStoryById({ id }),
  };
};

export const getKindStoryByTheme = () => {
  return {
    queryKey: [kindStoriesQueryKey, 'byTheme'],
    queryFn: () => kindStoriesApi.getKindStoryByTheme(),
  };
};
