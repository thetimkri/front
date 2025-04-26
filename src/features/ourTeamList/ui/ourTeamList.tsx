import { useState, useEffect } from 'react';
import {
  OurTeamCard,
  OurTeamCardDescriptionContainer,
  OurTeamCardDescriptionContainerLocation,
  OurTeamCardDescriptionContainerText,
  OurTeamCardImg,
  OurTeamCardImgContainer,
  OurTeamCardTitleContainer,
  OurTeamCardTitleContainerName,
  OurTeamCardTitleContainerRole,
  OurTeamListContainer,
  Overlay,
} from './ourTeamList.styled';
import { TeamMemberDto } from '@/shared/api/hooks/team/types.ts';
import React from 'react';
import { ScrollToPositionOnMount } from '@/shared/utils/scrollToTop.ts';
import { useLocation } from 'react-router-dom';
import { locationsApi } from '@/shared/api/hooks/locations/queries/apiLocations';
import { options } from '@/pages/joinTeamPage/mock/options.tsx';

type TOurTeamList = {
  data: TeamMemberDto[];
};

const OurTeamList: React.FC<TOurTeamList> = ({ data }) => {
  const { search } = useLocation();
  const isFirstVisit = !search;
  const [cityNames, setCityNames] = useState<{ [key: number]: string }>({});

  const getRoleTitle = (roleId: number): string => {
    const option = options.find((opt) => opt.value === roleId.toString());
    if (!option || !option.label) {
      return 'Неизвестная роль';
    }
    const labelElement = option.label as React.ReactElement;
    const pElement = React.Children.toArray(labelElement.props.children).find(
      (child) => React.isValidElement(child) && child.type === 'p'
    ) as React.ReactElement;

    return pElement?.props?.children || 'Неизвестная роль';
  };

  const getCityName = async (locationId: number): Promise<void> => {
    if (cityNames[locationId]) {
      return;
    }

    try {
      const locationCity = await locationsApi.getLocationById([locationId]);

      if (locationCity.name === 'Россия') {
        setCityNames((prevCityNames) => ({
          ...prevCityNames,
          [locationId]: '',
        }));
        return;
      }

      let cityAndRegion = locationCity.name || 'Неизвестный город';

      if (locationCity.parent !== null) {
        const locationRegion = await locationsApi.getLocationById([locationCity.parent]);
        if (locationRegion.name && locationRegion.name !== 'Россия') {
          cityAndRegion = locationCity.name
            ? `${locationRegion.name}, ${cityAndRegion}`
            : locationRegion.name;
        }
      }

      setCityNames((prevCityNames) => ({
        ...prevCityNames,
        [locationId]: cityAndRegion,
      }));
    } catch (error) {
      console.error(`Ошибка при получении названия города для ID ${locationId}:`, error);
      setCityNames((prevCityNames) => ({
        ...prevCityNames,
        [locationId]: 'Ошибка загрузки',
      }));
    }
  };

  useEffect(() => {
    data.forEach((teammate) => {
      if (teammate.location) {
        getCityName(teammate.location);
      }
    });
  }, [data]);

  return (
    <>
      <ScrollToPositionOnMount top={isFirstVisit ? 0 : 1700} />
      <OurTeamListContainer>
        {data.map((teammate) => (
          <OurTeamCard key={teammate.id}>
            <OurTeamCardImgContainer>
              <OurTeamCardImg
                src={teammate.image}
                alt={`${teammate.first_name} ${teammate.last_name}`}
              />
              <Overlay />
              <OurTeamCardTitleContainer>
                <OurTeamCardTitleContainerName>
                  {teammate.last_name} {teammate.first_name} {teammate.patronymic_name}
                </OurTeamCardTitleContainerName>
                <OurTeamCardTitleContainerRole>
                  {getRoleTitle(teammate.role)}
                </OurTeamCardTitleContainerRole>
              </OurTeamCardTitleContainer>
            </OurTeamCardImgContainer>
            <OurTeamCardDescriptionContainer>
              <OurTeamCardDescriptionContainerLocation>
                {cityNames[teammate.location]
                  ? `Россия, ${cityNames[teammate.location]}`
                  : 'Россия'}
              </OurTeamCardDescriptionContainerLocation>
              <OurTeamCardDescriptionContainerText>
                {teammate.about}
              </OurTeamCardDescriptionContainerText>
            </OurTeamCardDescriptionContainer>
          </OurTeamCard>
        ))}
      </OurTeamListContainer>
    </>
  );
};

export default OurTeamList;
