import { StoryCategory } from '@/shared/utils/storyCategories.ts';

// Базовый тип для истории
export type KindStoryDto = {
  id: number;
  theme: StoryCategory;
  title: string;
  created_at: string;
  main_image: string;
};

export type CategoryKey =
  | 'willpower'
  | 'good_projects'
  | 'heroes_among_us'
  | 'people_change_the_world'
  | 'our_smaller_brothers'
  | 'harmony_with_nature'
  | 'beauty_will_save_the_world'
  | 'professional_identity'
  | 'family_values';

export type CategoryStories = {
  [K in CategoryKey]?: KindStoryDto[];
};

export type KindStoriesCategorizedResDto = CategoryStories[];

export interface KindStoriesResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: KindStoryDto[];
}

export interface GetKindStoriesParams {
  page: number;
  page_size: number;
  theme?: StoryCategory;
  search?: string;
}

type ImageDetail = {
  id: number;
  image: string;
  order: number;
};

export type KindStoryDetailsDto = {
  id: number;
  main_image: string;
  title: string;
  description: string;
  authors: Author[];
  created_at: string;
  updated_at: string;
  images: ImageDetail[];
  location: number;
};

export interface CreateStoryResponse {
  id: number;
  title: string;
  description: string;
  main_image: File | null;
  theme: string;
  location: number;
}

export interface CreateStoryImagesResponse {
  story_id: number;
  images?: string[];
}

export interface Author {
  first_name: string;
  last_name: string;
  patronymic?: string;
  location: number;
}

export interface CreateStoryWithAuthorRequest {
  story_id: number;
  authors: Author[];
}

export interface CreateStoryWithAuthorResponse {
  authors: Author[];
}

export interface LocationItemDto {
  name: string;
  pk: number;
  parent: number | null;
}
