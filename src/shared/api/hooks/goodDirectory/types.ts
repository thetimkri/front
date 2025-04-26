export type GoodDirectoryLocationDto = {
  name: string;
};

export type GoodDirectoryAddressDto = {
  location: GoodDirectoryLocationDto;
  address: string;
  comment_for_working_hours: string;
  end_time: string;
  start_time: string;
};

export type GoodDirectoryLinkDto = {
  type: 'website' | 'vkontakte' | 'telegram' | 'odnoklasniki';
  url: string;
};

export type GoodDirectoryServiceDto = {
  id: number;
  name: string;
};

export type GoodDirectoryMemberDto = {
  id: number;
  first_name: string;
  last_name: string;
  patronymic_name: string | null;
  services: GoodDirectoryServiceDto[];
  title: string | null;
  description: string;
  online: boolean;
  links: GoodDirectoryLinkDto[];
  addresses: GoodDirectoryAddressDto[];
};

export interface GoodDirectoryListResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: GoodDirectoryMemberDto[];
}
