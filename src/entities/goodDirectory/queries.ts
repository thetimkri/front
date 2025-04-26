import {
  GoodDirectoryFilters,
  goodDirectoryApi,
} from '@/shared/api/hooks/goodDirectory/queries/apiGoodDirectory';

export const getGoodDirectoryListQuery = (
  page: number,
  page_size: number,
  filters?: GoodDirectoryFilters
) => {
  return {
    queryKey: ['GoodDirectory', { page, page_size, filters }],
    queryFn: () => goodDirectoryApi.getGoodDirectoryData({ page, page_size, filters }),
  };
};

export const getGoodDirectoryServicesListQuery = () => {
  return {
    queryKey: ['GoodDirectoryServices'],
    queryFn: () => goodDirectoryApi.getGoodDirectoryServicesList(),
  };
};

export const getAllGoodDirectoryListQuery = () => {
  return {
    queryKey: ['AllGoodDirectory'],
    queryFn: () => goodDirectoryApi.getAllGoodDirectoryData(),
  };
};
