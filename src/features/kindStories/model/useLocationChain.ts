import { useQuery } from '@tanstack/react-query';
import { getStoryLocation } from '@/entities/locations/queries.ts';

export function UseLocationChain(id: number[] | undefined) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getStoryLocation(id),
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
