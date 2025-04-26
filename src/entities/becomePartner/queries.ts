import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/queryClient.ts';
import { becomePartnerFormApi } from '@/shared/api/hooks/becomePartner/mutation/apiBecomePartnerForm';

export const usePostBecomePartnerFormMutation = () => {
  return useMutation({
    mutationFn: becomePartnerFormApi.postBecomePartnerRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partner'] });
    },
  });
};
