import { useQuery } from '@tanstack/react-query';
import { getJournalByIdQuery } from '@/entities/journal/queries.ts';
import { JournalDto } from '@/shared/api/hooks/journal/types.ts';

export function useJournalViewer(id: number | undefined) {
  const { data, isLoading, isError, isSuccess, error } = useQuery<JournalDto>({
    ...getJournalByIdQuery(id),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
