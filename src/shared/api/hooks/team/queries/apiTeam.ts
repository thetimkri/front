import { TeamAllResDto } from '@/shared/api/hooks/team/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const teamApi = {
  getTeamData: async ({
    page,
    page_size,
  }: {
    page: number;
    page_size: number;
  }): Promise<TeamAllResDto> => {
    const url = `${API_BASE_URL}team-all/?page=${page}&page_size=${page_size}`;
    return fetchWithErrorHandling<TeamAllResDto>(url);
  },
};
