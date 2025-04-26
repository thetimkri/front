import { journalApi } from '@/shared/api/hooks/journal/queries/apiJournal.ts';

const journalQueryKey = 'journal';

export const getJournalQuery = (page: number, page_size: number) => {
  return {
    queryKey: [journalQueryKey, 'journalAll', { page, page_size }],
    queryFn: () => journalApi.getAllJournals({ page, page_size }),
  };
};

export const getJournalByIdQuery = (id: number | undefined) => {
  return {
    queryKey: [journalQueryKey, 'journalById', id],
    queryFn: () => journalApi.getJournalById({ id }),
  };
};
