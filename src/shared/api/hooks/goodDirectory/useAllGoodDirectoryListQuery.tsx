import { useQuery } from '@tanstack/react-query';
import { getAllGoodDirectoryListQuery } from '@/entities/goodDirectory/queries';

export const useAllGoodDirectoryListQuery = () => {
  return useQuery(getAllGoodDirectoryListQuery());
};
