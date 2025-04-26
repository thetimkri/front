import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/shared/api/queryClient.ts';
import { joinDirectoryFormApi } from '@/shared/api/hooks/joinDirectoryForm/mutations/apiJoinDirectoryForm.ts';
import { KindDirectoryFormReqDto } from '@/shared/api/hooks/joinDirectoryForm/types.ts';

export const usePostJoinDirectoryFormMutation = () => {
  return useMutation({
    mutationFn: (data: KindDirectoryFormReqDto) =>
      joinDirectoryFormApi.postJoinDirectoryRequest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['good-directory'] });
    },
  });
};
