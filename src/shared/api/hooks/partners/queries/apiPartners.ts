import { PartnersResDto } from '@/shared/api/hooks/partners/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const partnersApi = {
  getPartnersData: async ({
    page,
    page_size,
  }: {
    page: number;
    page_size: number;
  }): Promise<PartnersResDto> => {
    const url = `${API_BASE_URL}partners-list/?page=${page}&page_size=${page_size}`;
    return fetchWithErrorHandling<PartnersResDto>(url);
  },
};
