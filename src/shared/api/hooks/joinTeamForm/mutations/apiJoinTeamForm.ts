import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { FormTeamReqDto } from '@/shared/api/hooks/joinTeamForm/types.ts';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';

export const joinTeamFormApi = {
  postJoinTeamRequest: async (data: FormData): Promise<FormTeamReqDto> => {
    const url = `${API_BASE_URL}team/`;
    const response = await fetchWithErrorHandling<FormTeamReqDto>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: data,
    });
    return response;
  },
};
