import { getNewsByIdQuery } from '@/entities/goodNews/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useKindNews(id: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getNewsByIdQuery(id),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
