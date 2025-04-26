import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { page } from '@/shared/constants/navigation/page.ts';
import { ReviewCard } from '@/features/reviewCard/ui/reviewCard.tsx';
import { useReviewCard } from '@/features/reviewCard/model/useReviewCard.ts';
import { ErrorPage } from '@/pages';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';

export const ReviewPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useReviewCard(Number(id));

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: page.aboutUs },
    { name: 'Отзывы', url: page.reviews },
    { name: 'Отзыв от' + ' ' + data?.name || 'Отзыв', url: '/' },
  ];

  if (isLoading) {
    return <Preloader />;
  }

  if (isError || !data) {
    return <ErrorPage />;
  }

  return (
    <section>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <ReviewCard data={data} />
    </section>
  );
};
