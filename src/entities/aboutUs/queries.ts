import { aboutUsApi } from '@/shared/api/hooks/aboutUs/queries/apiAboutUs.ts';

export const getAboutUsQuery = () => {
  return {
    queryKey: ['aboutUs'],
    queryFn: () => aboutUsApi.getAboutUsData(),
  };
};
