import { newsApi } from '@/shared/api/hooks/news/queries/apiNews.ts';

const goodStoriesQueryKey = 'kindNews';

export const getNewsQuery = (page: number, page_size: number) => {
  return {
    queryKey: [goodStoriesQueryKey, 'allNews', { page }],
    queryFn: () => newsApi.getNewsData({ page, page_size }),
  };
};

export const getNewsByIdQuery = (id: number) => {
  return {
    queryKey: [goodStoriesQueryKey, 'byId', id],
    queryFn: () => newsApi.getNewsById({ id }),
  };
};
