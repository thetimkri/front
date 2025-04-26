import { useQuery } from '@tanstack/react-query';
import { getGoodDirectoryListQuery } from '@/entities/goodDirectory/queries.ts';
import { GoodDirectoryFilters } from '@/shared/api/hooks/goodDirectory/queries/apiGoodDirectory';

export function useDirectoryInfoCardList(
  page: number,
  page_size: number,
  filters?: GoodDirectoryFilters
) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getGoodDirectoryListQuery(page, page_size, filters),
  });
  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
