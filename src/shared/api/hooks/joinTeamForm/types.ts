export interface FormTeamReqDto {
  first_name: string;
  last_name: string;
  patronymic_name?: string | undefined;
  location?: number;
  role: string;
  phone: string;
  image: File | null;
  about: string;
}
