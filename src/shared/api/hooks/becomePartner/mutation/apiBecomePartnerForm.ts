import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { FormPartnerResDto } from '@/shared/api/hooks/becomePartner/types.ts';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';

export const becomePartnerFormApi = {
  postBecomePartnerRequest: async (data: FormData): Promise<FormPartnerResDto> => {
    const url = `${API_BASE_URL}partner/`;
    const response = await fetchWithErrorHandling<FormPartnerResDto>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: data,
    });
    return response;
  },
};
