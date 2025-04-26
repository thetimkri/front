import { useQuery } from '@tanstack/react-query';
import { getJournalQuery } from '@/entities/journal/queries.ts';

export function useJournalList(page: number, page_size: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getJournalQuery(page, page_size),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
