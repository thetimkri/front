import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput.tsx';
import { FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { useSearchRegions } from '@/features/joinTeamForm/model/useSearchRegions.ts';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import {
  SearchContainer,
  SearchList,
  Wrapper,
} from '@/shared/UiKit/FormComponents/LocationSearchComponent/LocationSearchComponent.styled.ts';
import { CreateCityDto, LocationDto } from '@/shared/api/hooks/locations/types.ts';
import { useCreateCity, useSearchCity } from '@/entities/locations/queries.ts';
import { locationsApi } from '@/shared/api/hooks/locations/queries/apiLocations.ts';

type LocationType = 'story' | 'author' | 'residence' | 'company';

interface CityData {
  name: string;
  pk?: number;
  id?: number;
  parent: number;
}

interface LocationSearchProps {
  register: UseFormRegister<FormTypes>;
  setValue: UseFormSetValue<FormTypes>;
  watch: UseFormWatch<FormTypes>;
  errors: FieldErrors<FormTypes>;
  maxLocationLength: number;
  prefix?: string;
  type: LocationType;
  instanceId: string;
  setSelectedCityId: (id: number | undefined) => void;
  validationRules?: object;
}

const LocationSearchComponent = ({
  register,
  setValue,
  watch,
  errors,
  maxLocationLength,
  prefix = '',
  type,
  instanceId,
  setSelectedCityId,
  validationRules,
}: LocationSearchProps) => {
  const [regionSearch, setRegionSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCityDropdownVisible, setIsCityDropdownVisible] = useState(false);
  const [isCreatingCity, setIsCreatingCity] = useState(false);
  const [isHandlingCitySelection, setIsHandlingCitySelection] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const cityDropdownRef = useRef<HTMLUListElement>(null);
  const selectedRegionRef = useRef<LocationDto | null>(null);
  const cityInputRef = useRef<string>('');
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { data: regions = [] } = useSearchRegions(regionSearch);
  const { data: cities = [] } = useSearchCity(citySearch, selectedRegionRef.current?.pk) as {
    data: CreateCityDto[];
  };
  const createCity = useCreateCity();

  const getFieldName = (field: string) => {
    let typePrefix;

    switch (type) {
      case 'story':
        if (prefix) {
          return `${prefix}.${field}`;
        }
        return field;
      case 'author':
        typePrefix = 'author';
        break;
      case 'residence':
        typePrefix = 'residence';
        break;
    }

    if (prefix) {
      return `${prefix}.${field}`;
    }
    return `${typePrefix}${field.charAt(0).toUpperCase()}${field.slice(1)}`;
  };

  const handleRegionChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegionSearch(value);
    setValue(getFieldName('region'), value);
    setIsDropdownVisible(true);
    selectedRegionRef.current = null;
    setCitySearch('');
    setValue(getFieldName('city'), '');
    setValue(getFieldName('location'), undefined);
    setSelectedCityId(undefined);
  }, 300);

  const debouncedCitySearch = debounce((value: string) => {
    setCitySearch(value);
    setIsCityDropdownVisible(true);
  }, 300);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

    cityInputRef.current = formattedValue;
    setValue(getFieldName('city'), formattedValue, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setIsCityDropdownVisible(true);

    if (selectedRegionRef.current) {
      debouncedCitySearch(formattedValue);
    }
  };

  const handleCityBlur = async () => {
    if (isHandlingCitySelection) {
      return;
    }

    blurTimeoutRef.current = setTimeout(async () => {
      const currentValue = cityInputRef.current.trim();

      if (!currentValue || isCreatingCity) {
        return;
      }

      const existingCity = cities.find(
        (city) => city.name.toLowerCase() === currentValue.toLowerCase()
      );

      if (existingCity) {
        setValue(getFieldName('city'), existingCity.name);
        setValue(getFieldName('location'), existingCity.pk);
        setSelectedCityId(existingCity.pk);
        setCitySearch(existingCity.name);
        setIsCityDropdownVisible(false);
        return;
      }

      if (
        selectedRegionRef.current &&
        currentValue.length > 0 &&
        !cities.some((city) => city.name.toLowerCase() === currentValue.toLowerCase())
      ) {
        try {
          setIsCreatingCity(true);

          await createCity.mutateAsync({
            name: currentValue,
            parent: selectedRegionRef.current.pk,
          });

          const citiesList = await locationsApi.getCitiesByRegion({
            regionId: selectedRegionRef.current.pk,
          });

          const createdCity = citiesList.find(
            (city) => city.name.toLowerCase() === currentValue.toLowerCase()
          );

          if (createdCity) {
            setValue(getFieldName('city'), createdCity.name);
            setValue(getFieldName('location'), createdCity.pk);
            setSelectedCityId(createdCity.pk);
            setCitySearch(createdCity.name);
          }
        } catch (error) {
          console.error('Failed to create city:', error);
        } finally {
          setIsCreatingCity(false);
        }
      }
      setIsCityDropdownVisible(false);
    }, 200);
  };

  const handleRegionSelect = (region: LocationDto) => {
    setRegionSearch(region.name);
    selectedRegionRef.current = region;
    setValue(getFieldName('region'), region.name);
    setIsDropdownVisible(false);
  };

  const handleCitySelect = async (city: CityData) => {
    setIsHandlingCitySelection(true);

    try {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = null;
      }

      setCitySearch(city.name);
      cityInputRef.current = city.name;

      const cityId = city.pk ?? city.id;

      if (cityId === undefined) {
        return;
      }

      setValue(getFieldName('city'), city.name);
      setValue(getFieldName('location'), cityId);
      setSelectedCityId(cityId);
      setIsCityDropdownVisible(false);
    } catch (error) {
      console.error('Error in handleCitySelect:', error);
    } finally {
      setTimeout(() => {
        setIsHandlingCitySelection(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (!watch(getFieldName('country'))) {
      setValue(getFieldName('country'), 'Россия');
    }
  }, [watch(getFieldName('country')), setValue, prefix, type]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  register(getFieldName('location'));

  return (
    <>
      <FormInput<FormTypes>
        name={getFieldName('country')}
        register={register}
        errors={errors}
        placeholder="Россия"
        maxLength={maxLocationLength}
        value={watch(getFieldName('country'))}
        disabled
      />

      <Wrapper>
        <FormInput<FormTypes>
          name={getFieldName('region')}
          register={register}
          errors={errors}
          placeholder="Область"
          maxLength={maxLocationLength}
          value={watch(getFieldName('region'))}
          onChange={(e) => handleRegionChange(e)}
          onFocus={() => setIsDropdownVisible(true)}
          validationRules={validationRules}
        />

        {isDropdownVisible && regions.length > 0 && regionSearch && (
          <SearchContainer ref={dropdownRef}>
            {regions.map((region) => (
              <SearchList key={region.pk} onClick={() => handleRegionSelect(region)}>
                {region.name}
              </SearchList>
            ))}
          </SearchContainer>
        )}
      </Wrapper>

      <Wrapper>
        <FormInput<FormTypes>
          name={getFieldName('city')}
          register={register}
          errors={errors}
          placeholder="Город"
          maxLength={maxLocationLength}
          value={watch(getFieldName('city'))}
          onChange={handleCityChange}
          onBlur={handleCityBlur}
          onFocus={() => selectedRegionRef.current && setIsCityDropdownVisible(true)}
          validationRules={validationRules}
          id={instanceId}
        />

        {isCityDropdownVisible && cities.length > 0 && (
          <SearchContainer ref={cityDropdownRef}>
            {cities.map((city) => (
              <SearchList
                key={`${city.pk}-${city.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCitySelect(city);
                }}
              >
                {city.name}
              </SearchList>
            ))}
          </SearchContainer>
        )}
      </Wrapper>
    </>
  );
};

export default LocationSearchComponent;
