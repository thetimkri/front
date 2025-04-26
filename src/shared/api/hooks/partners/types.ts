export type PartnerDto = {
  id: number;
  company_name: string;
  display_order: number;
  link_url: string;
  image: string;
};

export interface PartnersResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: PartnerDto[];
}

export interface PartnerFormDto {
  first_name: string;
  last_name: string;
  middle_name: string;
  company_name: string;
  email: string;
  phone: string;
  about: string;
  image: string;
  link_url: string;
}
