import { CreateCityResDto } from '@/shared/api/hooks/locations/types.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';

export const ApiCreateCity = {
  postCreateCity: (data: CreateCityResDto): Promise<CreateCityResDto> => {
    const url = `${API_BASE_URL}create-city/`;
    return fetchWithErrorHandling(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
      },
      body: JSON.stringify(data),
    });
  },
};
