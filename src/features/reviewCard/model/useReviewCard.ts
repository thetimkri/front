import { useQuery } from '@tanstack/react-query';
import { getReviewsByIdQuery } from '@/entities/reviews/queries.ts';
import { FeedbackDto } from '@/shared/api/hooks/feedback/types.ts';

export function useReviewCard(id: number) {
  const { data, isLoading, isError, error } = useQuery<FeedbackDto>({
    ...getReviewsByIdQuery(id),
    enabled: !isNaN(id),
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
}
