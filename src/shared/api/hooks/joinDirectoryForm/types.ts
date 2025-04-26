import { DirectoryAddress, SocialLink } from '@/shared/UiKit/FormComponents/FormTypes.ts';

// Обновленный тип для запроса
export interface KindDirectoryFormReqDto {
  first_name: string;
  last_name: string;
  patronymic_name?: string;
  title: string;
  services_description: string;
  description: string;
  online: boolean;
  links: SocialLink[];
  locationInfo: DirectoryAddress;
}

// Обновленный тип для ответа
export interface KindDirectoryFormResponseDto {
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name?: string;
  title: string;
  services_description: string;
  description: string;
  online: boolean;
  links_output: SocialLink[][];
  locationInfo: DirectoryAddress;
}
