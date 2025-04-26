import { JournalDto, JournalResDto } from '@/shared/api/hooks/journal/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const journalApi = {
  getAllJournals: async ({
    page,
    page_size,
  }: {
    page: number;
    page_size: number;
  }): Promise<JournalResDto> => {
    const url = `${API_BASE_URL}journal/?page=${page}&page_size=${page_size}`;
    return fetchWithErrorHandling<JournalResDto>(url);
  },

  getJournalById: async ({ id }: { id: number | undefined }): Promise<JournalDto> => {
    const url = `${API_BASE_URL}journal/${id}/`;
    return fetchWithErrorHandling<JournalDto>(url);
  },
};
