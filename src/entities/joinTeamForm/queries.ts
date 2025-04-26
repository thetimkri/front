import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/queryClient.ts';
import { joinTeamFormApi } from '@/shared/api/hooks/joinTeamForm/mutations/apiJoinTeamForm.ts';

export const usePostJoinTeamFormMutation = () => {
  return useMutation({
    mutationFn: joinTeamFormApi.postJoinTeamRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] });
    },
  });
};
