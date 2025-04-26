import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { GoodDirectoryListResDto, GoodDirectoryServiceDto } from '../types';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export type GoodDirectoryFilters = {
  services?: string[];
  addresses__location?: string[];
  online?: boolean;
};

export const goodDirectoryApi = {
  getGoodDirectoryData: async ({
    page,
    page_size,
    filters = {},
  }: {
    page: number;
    page_size: number;
    filters?: GoodDirectoryFilters;
  }): Promise<GoodDirectoryListResDto> => {
    const params = new URLSearchParams();

    params.set('page', page.toString());
    params.set('page_size', page_size.toString());

    if (filters.online) {
      params.set('online', 'true');
    }

    if (filters.services?.length) {
      filters.services.forEach((id) => params.append('services', id));
    }

    if (filters.addresses__location?.length) {
      filters.addresses__location.forEach((id) => params.append('addresses__location', id));
    }

    const url = `${API_BASE_URL}good-directory/?${params.toString()}`;

    return fetchWithErrorHandling<GoodDirectoryListResDto>(url);
  },

  getGoodDirectoryServicesList: async (): Promise<GoodDirectoryServiceDto[]> => {
    const url = `${API_BASE_URL}good-directory-services/`;
    return fetchWithErrorHandling<GoodDirectoryServiceDto[]>(url);
  },

  getAllGoodDirectoryData: async (): Promise<GoodDirectoryListResDto> => {
    const url = `${API_BASE_URL}good-directory/?page=1&page_size=1000`;
    return fetchWithErrorHandling<GoodDirectoryListResDto>(url);
  },
};
