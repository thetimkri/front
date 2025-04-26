import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/queryClient.ts';
import { feedbackFormApi } from '@/shared/api/hooks/feedback/mutations/apiFeedbackForm.ts';

export const usePostFeedbackFormMutation = () => {
  return useMutation({
    mutationFn: feedbackFormApi.postFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
    },
  });
};
