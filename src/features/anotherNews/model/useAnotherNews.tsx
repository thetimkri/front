import { getNewsQuery } from '@/entities/goodNews/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useAnotherNews() {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getNewsQuery(1, 7),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
