import { FieldValues } from 'react-hook-form';

// Тип для дополнительного автора
export type AdditionalAuthor = {
  surname: string;
  name: string;
  patronymic?: string;
  location?: number;
};

// Тип для локации
export type LocationFields = {
  country: string;
  region: string;
  city: string;
  location?: number;
};

export type DirectoryAddress = {
  location: number | null;
  address: string;
  start_time: string;
  end_time: string;
  comment_for_working_hours: string;
};

export type SocialLink = {
  type: string;
  url: string;
};

export type SocialNetwork = {
  title: string;
  name: string;
};

export type FormFieldValue =
  | string
  | number
  | boolean
  | undefined
  | File
  | null
  | AdditionalAuthor[]
  | LocationFields[]
  | DirectoryAddress
  | SocialLink[]
  | File[]
  | string[]
  | number[];

export interface FormTypes extends FieldValues {
  title: string;
  description: string;
  story: string;
  message: string;
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name: string;
  services_description: string;
  surname: string;
  name: string;
  patronymic?: string | undefined;
  phone: string;
  services: number[];

  // Поля локации
  location: number;
  country: string;
  region: string;
  city: string;
  locationInfo: DirectoryAddress;

  // Дополнительные авторы и локации
  additionalAuthors: AdditionalAuthor[];
  additionalLocations: LocationFields[];

  // Файлы
  main_image: File | null;
  image: File | null;
  additionalPhotos: File[] | null;

  // Прочие поля
  role: string;
  consent: boolean;
  online: boolean;
  links: SocialLink[];

  [key: string]: FormFieldValue;

  // форма стать партнером
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  companyAbout: string;
  companyLinkURL: string;
}
