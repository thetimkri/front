import { FeedbackFormReqDto, FeedbackFormResDto } from '@/shared/api/hooks/feedback/types.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl';
import { getCsrfToken } from '@/shared/api/hooks/getCsrfToken.ts';

export const feedbackFormApi = {
  postFeedback: (data: FeedbackFormReqDto): Promise<FeedbackFormResDto> => {
    return fetchWithErrorHandling(`${API_BASE_URL}feedback/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
      },
      body: JSON.stringify(data),
    });
  },
};
