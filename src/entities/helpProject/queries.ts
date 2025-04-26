import { useQuery } from '@tanstack/react-query';
import { howToHelpCardsApi } from '@/shared/api/hooks/helpProject/queries/apiHelpProject.ts';

export const useGetHowToHelpCardsQuery = () => {
  return useQuery({
    queryKey: ['howToHelpCards'],
    queryFn: (meta) => howToHelpCardsApi.getCardsData(meta),
  });
};
