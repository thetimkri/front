import { API_BASE_URL } from '@/shared/api/baseUrl';
import { CityDto, CreateCityDto, LocationDto } from '../types';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling';
import { LocationItemDto } from '@/shared/api/hooks/stories/types.ts';

export const locationsApi = {
  getRegionsByCountry: async ({ countryId }: { countryId: number }): Promise<LocationDto[]> => {
    const url = `${API_BASE_URL}locations-region-by-country/${countryId}/`;
    return fetchWithErrorHandling<LocationDto[]>(url);
  },

  getCitiesByRegion: async ({ regionId }: { regionId: number }): Promise<CreateCityDto[]> => {
    const url = `${API_BASE_URL}locations-city-by-region/${regionId}/`;
    return fetchWithErrorHandling<CreateCityDto[]>(url);
  },

  getLocationById: async (locationId: number[] | undefined): Promise<LocationItemDto> => {
    const url = `${API_BASE_URL}locations/${locationId}/`;
    return fetchWithErrorHandling<LocationItemDto>(url);
  },

  getAllCities: async (): Promise<CityDto[]> => {
    const url = `${API_BASE_URL}cities-all/`;
    return fetchWithErrorHandling<CityDto[]>(url);
  },

  getAllCountries: async (): Promise<LocationDto[]> => {
    const url = `${API_BASE_URL}locations-country/`;
    return fetchWithErrorHandling<LocationDto[]>(url);
  },
};
