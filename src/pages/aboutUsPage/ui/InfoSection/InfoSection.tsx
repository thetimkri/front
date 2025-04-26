import {
  StyleInfoSectionTitle,
  StyledInfoCardGrid,
  StyledInfoSectionSectionWrapper,
} from './InfoSection.styled';
import { INFO_CARDS_DATA, mergeAboutUsData } from './mockData';
import { useQuery } from '@tanstack/react-query';
import { getAboutUsQuery } from '@/entities/aboutUs/queries.ts';
import { InfoCardWithContent, InfoCardWithImg } from '@/pages/aboutUsPage/ui';
import React from 'react';

export const InfoSection = () => {
  const { data } = useQuery({
    ...getAboutUsQuery(),
  });

  const mergedData = data ? mergeAboutUsData(data) : INFO_CARDS_DATA;

  if (!data || mergedData.length === 0) {
    return null;
  }

  return (
    <StyledInfoSectionSectionWrapper>
      <StyleInfoSectionTitle>О проекте</StyleInfoSectionTitle>
      <StyledInfoCardGrid>
        {mergedData.map((card, index) =>
          card.type === 'content' ? (
            <InfoCardWithContent
              key={index}
              borderRadiusType={card.borderRadiusType}
              circleText={card.circleNumber || ''}
              circleColor={card.circleColor || ''}
              hoverColor={card.hoverColor || ''}
              contentText={card.contentText || ''}
            />
          ) : (
            <InfoCardWithImg
              key={index}
              image={card.image!}
              borderRadiusType={card.borderRadiusType}
            />
          )
        )}
      </StyledInfoCardGrid>
    </StyledInfoSectionSectionWrapper>
  );
};
