import { locationsApi } from '@/shared/api/hooks/locations/queries/apiLocations.ts';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ApiCreateCity } from '@/shared/api/hooks/locations/mutation/apiCreateCity.ts';
import { queryClient } from '@/shared/api/queryClient.ts';
import { CreateCityDto } from '@/shared/api/hooks/locations/types.ts';

export const getSearchRegionsQuery = (search: string) => ({
  queryKey: ['regions', 'search', search],
  queryFn: () =>
    search.trim().length > 0
      ? locationsApi
          .getRegionsByCountry({ countryId: 1 })
          .then((regions) =>
            regions.filter((region) => region.name.toLowerCase().includes(search.toLowerCase()))
          )
      : Promise.resolve([]),
  enabled: search.trim().length > 0,
});

export const useSearchCity = (search: string, regionId?: number) => {
  return useQuery<CreateCityDto[]>({
    queryKey: ['cities', 'search', search, regionId],
    queryFn: () =>
      search.trim().length > 0 && regionId
        ? locationsApi
            .getCitiesByRegion({ regionId })
            .then((cities) =>
              cities.filter((city) => city.name.toLowerCase().includes(search.toLowerCase()))
            )
        : Promise.resolve([]),
    enabled: search.trim().length > 0 && !!regionId,
  });
};

export const useCreateCity = () => {
  return useMutation({
    mutationFn: ApiCreateCity.postCreateCity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['createCity'] });
    },
  });
};

export const getStoryLocation = (id: number[] | undefined) => {
  return {
    queryKey: ['location', 'byId', id],
    queryFn: () => (id ? locationsApi.getLocationById(id) : Promise.resolve(null)),
  };
};
