import {
  GetKindStoriesParams,
  KindStoriesCategorizedResDto,
  KindStoriesResDto,
  KindStoryDetailsDto,
} from '@/shared/api/hooks/stories/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const kindStoriesApi = {
  getKindStoriesData: async ({
    page,
    page_size,
    theme,
    search,
  }: GetKindStoriesParams): Promise<KindStoriesResDto> => {
    const params = new URLSearchParams({
      page: page.toString(),
      page_size: page_size.toString(),
      ...(theme && { theme }),
      ...(search && { search }),
    });

    const url = `${API_BASE_URL}good-stories-all/?${params}`;
    return fetchWithErrorHandling<KindStoriesResDto>(url);
  },

  getKindStoryById: async ({ id }: { id: number }): Promise<KindStoryDetailsDto> => {
    const url = `${API_BASE_URL}good-stories/${id}/`;
    return fetchWithErrorHandling<KindStoryDetailsDto>(url);
  },

  getKindStoryByTheme: async (): Promise<KindStoriesCategorizedResDto> => {
    const url = `${API_BASE_URL}good-stories-by-theme/`;
    return fetchWithErrorHandling<KindStoriesCategorizedResDto>(url);
  },

  getAllKindStories: async (): Promise<KindStoriesResDto> => {
    const url = `${API_BASE_URL}good-stories-all/`;
    return fetchWithErrorHandling<KindStoriesResDto>(url);
  },
};
