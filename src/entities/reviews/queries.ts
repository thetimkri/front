import { feedbackApi } from '@/shared/api/hooks/feedback/queries/apiFeedback';

const reviewsQueryKey = 'reviews';

export const getReviewsQuery = (page: number, page_size: number) => {
  return {
    queryKey: [reviewsQueryKey, 'reviewsAll', { page, page_size }],
    queryFn: () => feedbackApi.getFeedbackData({ page, page_size }),
  };
};

export const getReviewsByIdQuery = (id: number) => {
  return {
    queryKey: [reviewsQueryKey, 'reviewsById', id],
    queryFn: () => feedbackApi.getFeedbackById({ id }),
  };
};
