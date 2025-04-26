export interface FormPartnerResDto {
  first_name: string;
  last_name: string;
  middle_name?: string | undefined;
  company_name: string;
  email: string;
  phone: string;
  about: string;
  image: File | null;
  link_url: string;
}
