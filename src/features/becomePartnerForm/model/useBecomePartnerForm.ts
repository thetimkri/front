import { usePostBecomePartnerFormMutation } from '@/entities/becomePartner/queries';

export function useBecomePartnerForm() {
  const { mutateAsync, isError, isSuccess, error, isPending } = usePostBecomePartnerFormMutation();

  return {
    isError,
    isSuccess,
    error,
    isPending,
    becomePartnerData: mutateAsync,
  };
}
