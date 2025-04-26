import { getOurTeamQuery } from '@/entities/ourTeam/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function useOurTeamList(page: number, page_size: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getOurTeamQuery(page, page_size),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
