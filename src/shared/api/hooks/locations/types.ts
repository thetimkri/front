export interface LocationDto {
  name: string;
  pk: number;
  parent: number | null;
}

export interface CreateCityResDto {
  name: string;
  parent: number;
}

export interface CreateCityDto {
  name: string;
  pk: number;
  parent: number;
}

export interface CityDto {
  id: number;
  name: string;
}
