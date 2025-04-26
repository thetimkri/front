import { NewsDetailsDto, NewsResDto } from '@/shared/api/hooks/news/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const newsApi = {
  getNewsData: async ({
    page,
    page_size,
  }: {
    page: number;
    page_size: number;
  }): Promise<NewsResDto> => {
    const url = `${API_BASE_URL}news-all/?page=${page}&page_size=${page_size}`;
    return fetchWithErrorHandling<NewsResDto>(url);
  },

  getNewsById: async ({ id }: { id: number }): Promise<NewsDetailsDto> => {
    const url = `${API_BASE_URL}news/${id}/`;
    return fetchWithErrorHandling<NewsDetailsDto>(url);
  },
};
