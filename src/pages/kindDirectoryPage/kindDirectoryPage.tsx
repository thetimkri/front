import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useDirectoryInfoCardList } from '@/features/directoryInfoCardComponent/model/useDirectoryInfoCardList.tsx';
import { useGoodDirectoryServicesListQuery } from '@/features/directoryInfoCardComponent/model/useDirectoryServiceList.tsx';
import { locationsApi } from '@/shared/api/hooks/locations/queries/apiLocations';
import { GoodDirectoryMemberDto } from '@/shared/api/hooks/goodDirectory/types';
import { useAllGoodDirectoryListQuery } from '@/shared/api/hooks/goodDirectory/useAllGoodDirectoryListQuery';
import { page } from '@/shared/constants/navigation/page.ts';
import { SearchFormComponent } from '@/shared/UiKit/SearchFormComponent/SearchFormComponent';
import { DirectoryInfoCardComponent } from '@/features/directoryInfoCardComponent/ui/directoryInfoCardComponent.tsx';
import Pagination from '@/shared/UiKit/Pagination/Pagination.tsx';

import Preloader from '@/shared/UiKit/Preloader/Preloader';
import { MultiSelectDropdown } from '@/shared/UiKit/MultiSelectDropdown/MultiSelectDropdown';

import {
  StyledDirectoryCardsContainer,
  StyledDirectorySelectorsContainer,
  StyledSelectorsContainerLeft,
  StyledSelectorsContainerRight,
  ToggleCircle,
  ToggleContainer,
  ToggleWrapper,
} from './kindDirectoryPage.styled';
import KindDirectoryPageTextSection from '@/pages/kindDirectoryPage/ui/kindDirectoryPageTextSection.tsx';

export const KindDirectoryPage = () => {
  const navigate = useNavigate();

  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);

  const [countryOptions, setCountryOptions] = useState<{ value: string; label: string }[]>([]);
  const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<GoodDirectoryMemberDto[] | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [itemsPerPage, setItemsPerPage] = useState<number>(9);
  const isBigMobile = useMediaQuery({ maxWidth: 1281 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const locationId = selectedCities.length > 0 ? [...selectedCities] : undefined;

  const { data, isLoading, error } = useDirectoryInfoCardList(currentPage, itemsPerPage, {
    online: isOnline,
    services: selectedCategories,
    addresses__location: locationId,
  });

  const { data: allDirectoryData } = useAllGoodDirectoryListQuery();

  const {
    data: servicesData,
    isLoading: isServicesLoading,
    error: servicesError,
  } = useGoodDirectoryServicesListQuery();

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredResults(null);
      return;
    }

    setSearchParams({ page: '1' });

    const lowerQuery = query.toLowerCase();
    const allItems = allDirectoryData?.results || [];

    const filtered = allItems.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
    );

    setFilteredResults(filtered);
  };

  const clearSearch = () => {
    setSearchParams({ page: '1' });
    setFilteredResults(null);
    setSearchQuery('');
  };

  const serviceOptions = useMemo(() => {
    return (
      servicesData?.map((item) => ({
        value: item.id.toString(),
        label: item.name,
      })) || []
    );
  }, [servicesData]);

  useEffect(() => {
    if (error || servicesError) {
      navigate(page.serverError);
    }
  }, [error, servicesError, navigate]);

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(5);
    } else if (isBigMobile) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(9);
    }
  }, [isMobile, isBigMobile]);

  useEffect(() => {
    if (error && error.message === 'Неправильная страница') {
      setSearchParams('');
    }
  }, [error, setSearchParams]);

  useEffect(() => {
    const fetchInitialLocationData = async () => {
      try {
        const [cities, countries] = await Promise.all([
          locationsApi.getAllCities(),
          locationsApi.getAllCountries(),
        ]);

        const cityOpts = cities.map((city) => ({
          value: city.id.toString(),
          label: city.name,
        }));
        setCityOptions(cityOpts);

        const countryOpts = countries.map((country) => ({
          value: country.pk.toString(),
          label: country.name,
        }));
        setCountryOptions(countryOpts);

        if (countries.length > 0) {
          const defaultCountryId = countries[0].pk.toString();
          setSelectedCountry([defaultCountryId]);
        }
      } catch (error) {
        console.error('Ошибка при загрузке геоданных:', error);
      }
    };

    fetchInitialLocationData();
  }, []);

  if (isLoading || isServicesLoading) {
    return <Preloader pageLoad={true} />;
  }

  return (
    <section>
      <KindDirectoryPageTextSection isMobile={isMobile} />
      <StyledDirectorySelectorsContainer>
        <StyledSelectorsContainerLeft>
          <MultiSelectDropdown
            options={countryOptions}
            selectedValues={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="Страна"
            disabled={true}
            withoutArrow={true}
          />
          <MultiSelectDropdown
            options={cityOptions}
            selectedValues={selectedCities}
            onChange={setSelectedCities}
            placeholder="Город"
            withSearch
          />
        </StyledSelectorsContainerLeft>
        <StyledSelectorsContainerRight>
          <MultiSelectDropdown
            options={serviceOptions}
            selectedValues={selectedCategories}
            onChange={setSelectedCategories}
            placeholder="Категория"
          />
          <ToggleContainer
            onClick={() => {
              setIsOnline(!isOnline);
            }}
          >
            <span>Онлайн</span>
            <ToggleWrapper $isOnline={isOnline}>
              <ToggleCircle $isOnline={isOnline} />
            </ToggleWrapper>
          </ToggleContainer>
        </StyledSelectorsContainerRight>
      </StyledDirectorySelectorsContainer>
      <SearchFormComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        onClear={clearSearch}
      />

      {servicesData &&
        (filteredResults ? (
          filteredResults.length > 0 ? (
            <StyledDirectoryCardsContainer>
              {filteredResults.map((card) => (
                <DirectoryInfoCardComponent key={card.id} {...card} servicesList={servicesData} />
              ))}
            </StyledDirectoryCardsContainer>
          ) : (
            <p style={{ marginTop: '72px', marginBottom: '40px' }}>
              По вашему запросу контакт не найден. Попробуйте сделать поиск по другим ключевым
              словам.
            </p>
          )
        ) : (
          <StyledDirectoryCardsContainer>
            {data?.results.map((card) => (
              <DirectoryInfoCardComponent key={card.id} {...card} servicesList={servicesData} />
            ))}
          </StyledDirectoryCardsContainer>
        ))}

      {!filteredResults && <Pagination count={data?.count || 0} itemsPerPage={itemsPerPage} />}
    </section>
  );
};
