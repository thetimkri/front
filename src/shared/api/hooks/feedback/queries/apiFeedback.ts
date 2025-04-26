import { FeedbackDto, FeedbackResDto } from '@/shared/api/hooks/feedback/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';

export const feedbackApi = {
  getFeedbackData: async ({
    page,
    page_size,
  }: {
    page: number;
    page_size: number;
  }): Promise<FeedbackResDto> => {
    const url = `${API_BASE_URL}feedback/?page=${page}&page_size=${page_size}`;
    return fetchWithErrorHandling<FeedbackResDto>(url);
  },

  getFeedbackById: async ({ id }: { id: number }): Promise<FeedbackDto> => {
    const url = `${API_BASE_URL}feedback/${id}/`;
    return fetchWithErrorHandling<FeedbackDto>(url);
  },
};
