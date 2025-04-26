import { useQuery } from '@tanstack/react-query';
import { getContactsQuery } from '@/entities/contacts/queries.ts';

export function useContactsList() {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getContactsQuery(),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
