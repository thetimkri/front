import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import {
  CKEditorNewsContent,
  OpenNewsDate,
  OpenNewsDetails,
  OpenNewsDetailsContainer,
  OpenNewsFeedbackContainer,
  OpenNewsFeedbackTextContainer,
  OpenNewsImage,
  OpenNewsInfoText,
  OpenNewsSection,
  OpenNewsTeamContainer,
  OpenNewsTeamLogo,
  OpenNewsTeamText,
  OpenNewsTitle,
  OpenNewsWrapper,
} from './kindNewsDetails.styled.ts';
import { useKindNews } from '@/features/kindNews/model/useKindNews.tsx';

import AnotherNewsBlock from '@/features/anotherNews/ui/anotherNewsBlock.tsx';
import SliderNews from '@/widgets/Sliders/SliderNews.tsx';
import { ErrorPage } from '@/pages';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel.ts';
import { page } from '@/shared/constants/navigation/page.ts';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs.tsx';
import { formatDate } from '@/shared/utils/formatDate.ts';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import Image from '@/shared/UiKit/Image/Image.tsx';
import { ShareButtons } from '@/shared/UiKit/ShareButtons/ShareButtons.tsx';

const KindNewsDetails = ({ newsId }: { newsId: number }) => {
  const { data, isLoading, error } = useKindNews(newsId);
  const { id } = useParams<{ id: string }>();

  if (isLoading) {
    return <Preloader pageLoad={true} />;
  }

  if (error) {
    return <ErrorPage />;
  }

  if (!data) {
    return <h2>Новость не найдена</h2>;
  }

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: page.aboutUs },
    { name: 'Новости проекта', url: page.news },
    { name: data?.title || '', url: `${page.new}/${id}` },
  ];

  return (
    <>
      <OpenNewsSection>
        <div>
          <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
          <OpenNewsTitle>{data?.title}</OpenNewsTitle>
          <OpenNewsImage alt={'Изображение'} src={data?.main_image || ''} loading="lazy" />
          <OpenNewsWrapper>
            <CKEditorNewsContent>{parse(data?.description || '')}</CKEditorNewsContent>
            <OpenNewsDetails>
              <OpenNewsDetailsContainer>
                <OpenNewsDate>Опубликовано</OpenNewsDate>
                <OpenNewsInfoText>{formatDate(data.created_at)}</OpenNewsInfoText>
              </OpenNewsDetailsContainer>
              <ShareButtons />
            </OpenNewsDetails>
          </OpenNewsWrapper>
        </div>
        {!!data.images.length && <SliderNews images={data.images} />}
        {!!data.comments.length && (
          <ul>
            {data.comments.map((comment) => (
              <li key={comment.id} style={{ listStyle: 'none' }}>
                <OpenNewsFeedbackContainer>
                  <OpenNewsTeamContainer>
                    <OpenNewsTeamLogo
                      as={Image}
                      alt={'Логотип проекта'}
                      src={comment.image}
                      loading="lazy"
                    />
                    <OpenNewsTeamText>Команда</OpenNewsTeamText>
                    <OpenNewsTeamText>«Новости Добрых Деяний»</OpenNewsTeamText>
                  </OpenNewsTeamContainer>
                  <OpenNewsFeedbackTextContainer>
                    {parse(comment.comment)}
                  </OpenNewsFeedbackTextContainer>
                </OpenNewsFeedbackContainer>
              </li>
            ))}
          </ul>
        )}
        <AnotherNewsBlock title="Другие новости проекта" spaceBetween={24} />
      </OpenNewsSection>
    </>
  );
};

export default KindNewsDetails;
