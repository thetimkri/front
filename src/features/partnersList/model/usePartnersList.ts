import { getPartnersQuery } from '@/entities/partners/queries.ts';
import { useQuery } from '@tanstack/react-query';

export function usePartnersList(page: number, page_size: number) {
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    ...getPartnersQuery(page, page_size),
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}
