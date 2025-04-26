import { usePostFeedbackFormMutation } from '@/entities/feedbackForm/queries.ts';

export function useFeedBackForm() {
  const { data, isError, isSuccess, error, mutate, isPending } = usePostFeedbackFormMutation();

  return {
    data,
    isError,
    isSuccess,
    error,
    isPending,
    submitFeedback: mutate,
  };
}
