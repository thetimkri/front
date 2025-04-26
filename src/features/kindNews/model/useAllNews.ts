import { getNewsQuery } from '@/entities/goodNews/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useAllNews(page: number, page_size: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getNewsQuery(page, page_size),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
