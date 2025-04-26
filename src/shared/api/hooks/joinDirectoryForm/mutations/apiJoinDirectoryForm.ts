import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';
import {
  KindDirectoryFormReqDto,
  KindDirectoryFormResponseDto,
} from '@/shared/api/hooks/joinDirectoryForm/types.ts';

export const joinDirectoryFormApi = {
  postJoinDirectoryRequest: async (
    data: KindDirectoryFormReqDto
  ): Promise<KindDirectoryFormResponseDto> => {
    const url = `${API_BASE_URL}good-directory/create/`;
    return fetchWithErrorHandling<KindDirectoryFormResponseDto>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: JSON.stringify(data),
    });
  },
};
