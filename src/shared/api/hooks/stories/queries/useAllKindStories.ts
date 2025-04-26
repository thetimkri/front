import { useQuery } from '@tanstack/react-query';
import { kindStoriesApi } from './apiKindStories';

export const useAllKindStories = () => {
  return useQuery({
    queryKey: ['kindStories', 'all'],
    queryFn: () => kindStoriesApi.getAllKindStories(),
  });
};
