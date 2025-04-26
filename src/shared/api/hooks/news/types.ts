export type NewsDto = {
  id: number;
  title: string;
  short_description: string;
  created_at: string;
  main_image: string | null;
};

export interface NewsResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsDto[];
}

type ImageDetail = {
  id: number;
  image: string;
  order: number;
};

type CommentDetail = {
  id: number;
  comment: string;
  image: string;
};

export type NewsDetailsDto = {
  id: number;
  title: string;
  main_image: string | null;
  short_description: string;
  description: string;
  created_at: string;
  updated_at: string;
  images: ImageDetail[];
  comments: CommentDetail[];
};
