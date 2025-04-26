export type TeamMemberDto = {
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name: string;
  image: string;
  archived: boolean;
  role: number;
  about: string;
  location: number;
};

export interface TeamAllResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: TeamMemberDto[];
}
