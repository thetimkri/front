import { LocationDto } from '@/shared/api/hooks/locations/types.ts';
import { useQuery } from '@tanstack/react-query';
import { getSearchRegionsQuery } from '@/entities/locations/queries.ts';

export function useSearchRegions(search: string) {
  return useQuery<LocationDto[], Error>(getSearchRegionsQuery(search));
}
