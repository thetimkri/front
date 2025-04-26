import { useReviewsList } from '@/features/reviewsList/model/useReviewsList';
import ReviewsList from '@/features/reviewsList/ui/reviewsList';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import Pagination from '@/shared/UiKit/Pagination/Pagination';
import { page } from '@/shared/constants/navigation/page.ts';
import { ReviewsPageSection } from './ReviewsPage.styled.ts';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Preloader from '@/shared/UiKit/Preloader/Preloader';

export const ReviewsPage = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: page.aboutUs },
    { name: 'Отзывы', url: '/' },
  ];

  const isSmallDesktop = useMediaQuery({ query: '(max-width: 1040px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 560px)' });

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(3);
    } else if (isSmallDesktop) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(6);
    }
  }, [isMobile, isSmallDesktop]);

  const { data, isLoading, error } = useReviewsList(currentPage, itemsPerPage);

  if (error && error.message === 'Неправильная страница') {
    setSearchParams('');
  }

  if (data?.results.length === 0) return <h1>Не удалось загрузить список отзывов</h1>;

  return (
    <ReviewsPageSection>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <PageTitle titleText="Что о нас говорят" />
      {isLoading ? (
        <Preloader pageLoad />
      ) : (
        <>
          <ReviewsList data={data?.results || []} />
          <Pagination count={data?.count || 0} itemsPerPage={itemsPerPage} />
        </>
      )}
    </ReviewsPageSection>
  );
};
