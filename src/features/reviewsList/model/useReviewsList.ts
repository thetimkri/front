import { getReviewsQuery } from '@/entities/reviews/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useReviewsList(page: number, page_size: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getReviewsQuery(page, page_size),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
