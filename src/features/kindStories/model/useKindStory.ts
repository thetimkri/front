import { getKindStoryByIdQuery } from '@/entities/kindStory/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useKindStory(id: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getKindStoryByIdQuery(id),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
