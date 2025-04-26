import { useQuery } from '@tanstack/react-query';
import { getKindStoryByTheme } from '@/entities/kindStory/queries.ts';

export function useKindStoriesByTheme() {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getKindStoryByTheme(),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
