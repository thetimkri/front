import { useQuery } from '@tanstack/react-query';
import { getGoodDirectoryServicesListQuery } from '@/entities/goodDirectory/queries.ts';

export function useGoodDirectoryServicesListQuery() {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getGoodDirectoryServicesListQuery(),
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
