import { usePostJoinDirectoryFormMutation } from '@/entities/joinDirectoryForm/queries.ts';

export function UseJoinDirectoryForm() {
  const { mutateAsync, isError, isSuccess, error, isPending } = usePostJoinDirectoryFormMutation();

  return {
    isError,
    isSuccess,
    error,
    isPending,
    joinDirectoryData: mutateAsync,
  };
}
