import {
  CreateStoryImagesResponse,
  CreateStoryResponse,
  CreateStoryWithAuthorRequest,
  CreateStoryWithAuthorResponse,
} from '@/shared/api/hooks/stories/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';

export const ApiKindStoriesForm = {
  createKindStory: async (data: FormData): Promise<CreateStoryResponse> => {
    const url = `${API_BASE_URL}good-story/create/`;
    const response = await fetchWithErrorHandling<CreateStoryResponse>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: data,
    });
    return response;
  },

  createKindStoryAddImages: async (data: FormData): Promise<CreateStoryImagesResponse> => {
    const url = `${API_BASE_URL}good-story/images/`;
    const response = await fetchWithErrorHandling<CreateStoryImagesResponse>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: data,
    });
    return response;
  },

  createKindStoryAddAuthors: async (
    data: CreateStoryWithAuthorRequest
  ): Promise<CreateStoryWithAuthorResponse> => {
    const url = `${API_BASE_URL}good-story/author/`;
    const response = await fetchWithErrorHandling<CreateStoryWithAuthorResponse>(url, {
      method: 'POST',
      headers: {
        'X-CSRFToken': getCsrfToken(),
      },
      body: JSON.stringify(data),
    });
    return response;
  },
};
