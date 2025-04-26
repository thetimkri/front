import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { AboutUsData } from '@/shared/api/hooks/aboutUs/types.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const aboutUsApi = {
  getAboutUsData: async () => {
    const url = `${API_BASE_URL}about-us/`;
    return fetchWithErrorHandling<AboutUsData[]>(url);
  },
};
