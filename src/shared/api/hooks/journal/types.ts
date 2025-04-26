export interface JournalResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: JournalDto[];
}

export interface JournalDto {
  id: number;
  name: string;
  cover_image: string;
  description: string;
  link: string;
  release_date: string;
}
