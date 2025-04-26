import { partnersApi } from '@/shared/api/hooks/partners/queries/apiPartners.ts';

const partnersQueryKey = 'partners';

export const getPartnersQuery = (page: number, page_size: number) => {
  return {
    queryKey: [partnersQueryKey, 'partnersAll', { page, page_size }],
    queryFn: () => partnersApi.getPartnersData({ page, page_size }),
  };
};
