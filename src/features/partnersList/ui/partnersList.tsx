import { OurPartnersSliderCard } from '@/pages/mainPage/ui/OurPartnersSliderCard/OurPartnersSliderCard';
import { PartnersListContainer } from './partnersList.styled';
import { ScrollToPositionOnMount } from '@/shared/utils/scrollToTop.ts';
import React from 'react';
import { PartnerDto } from '@/shared/api/hooks/partners/types.ts';

type TPartnerListProps = {
  data: PartnerDto[];
};

const PartnersList: React.FC<TPartnerListProps> = ({ data }) => {
  return (
    <>
      <ScrollToPositionOnMount top={585} />
      <PartnersListContainer>
        {data.map((partner) => (
          <OurPartnersSliderCard key={partner.id} {...partner} />
        ))}
      </PartnersListContainer>
    </>
  );
};

export default PartnersList;
