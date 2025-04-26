import { usePostJoinTeamFormMutation } from '@/entities/joinTeamForm/queries.ts';

export function useJoinTeamForm() {
  const { mutateAsync, isError, isSuccess, error, isPending } = usePostJoinTeamFormMutation();

  return {
    isError,
    isSuccess,
    error,
    isPending,
    joinTeamData: mutateAsync,
  };
}
