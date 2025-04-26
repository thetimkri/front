import { teamApi } from '@/shared/api/hooks/team/queries/apiTeam.ts';

const ourTeamQueryKey = 'ourTeam';

export const getOurTeamQuery = (page: number, page_size: number) => {
  return {
    queryKey: [ourTeamQueryKey, 'allTeam', { page, page_size }],
    queryFn: () => teamApi.getTeamData({ page, page_size }),
  };
};
