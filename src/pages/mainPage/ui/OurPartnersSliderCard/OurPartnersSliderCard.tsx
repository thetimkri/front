import { StyledOurPartnersSliderCard } from './OurPartnersSliderCard.styled';
import { PartnerDto } from '@/shared/api/hooks/partners/types.ts';

export const OurPartnersSliderCard = (partner: PartnerDto) => (
  <StyledOurPartnersSliderCard to={partner.link_url} target="_blank" rel="noopener noreferrer">
    <img src={partner.image} alt={partner.company_name} />
  </StyledOurPartnersSliderCard>
);
