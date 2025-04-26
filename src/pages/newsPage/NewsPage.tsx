import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MainTitle,
  MainContainer,
  NewsContainer,
  VideoBlock,
  StyledIframe,
  VideoTitle,
  NewsDate,
  NewsList,
  NewsListItem,
  NewsTitle,
  NewsText,
  NewsCardList,
  NewsCardLink,
  NewsCardItem,
  NewsCardImg,
  NewsCardTitle,
  NewsItem,
  PublicationDate,
  IFrameContainer,
  VideoDescription,
} from './NewsPage.styled';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { page } from '@/shared/constants/navigation/page.ts';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { formatDate } from '@/shared/utils/formatDate.ts';
import { useAllNews } from '@/features/kindNews/model/useAllNews.ts';
import { truncateText } from '@/shared/utils/truncate.ts';
import Image from '@/shared/UiKit/Image/Image.tsx';
import { NewsDto } from '@/shared/api/hooks/news/types.ts';

export const NewsPage = () => {
  const { data, error, isLoading } = useAllNews(1, 10);
  const [newsList, setNewsList] = useState<NewsDto[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(4);

  useEffect(() => {
    if (data && data.results.length > 0) {
      const sortedNews = data.results
        .slice()
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      setNewsList(sortedNews);
    }
  }, [data]);

  const displayedNews = newsList.slice(0, visibleCount);

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: page.aboutUs },
    { name: 'Новости проекта', url: page.news },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 4, newsList.length));
  };

  if (!data) return <h2>Не удалось загрузить новости</h2>;

  return (
    <>
      <section>
        <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
        <MainTitle>Новости проекта</MainTitle>
        <MainContainer>
          <NewsContainer>
            <VideoBlock>
              <IFrameContainer>
                <StyledIframe controls width="100%">
                  <source
                    src="https://good-news-test.god-it.ru/media/Video/news_page/about_us.mp4"
                    type="video/mp4"
                  />
                  Ваш браузер не поддерживает воспроизведение видео.
                </StyledIframe>
              </IFrameContainer>
              <VideoDescription>
                <VideoTitle>О проекте "Новости Добрых Деяний"</VideoTitle>
                <PublicationDate>Опубликовано 07.08.2024</PublicationDate>
              </VideoDescription>
            </VideoBlock>

            <NewsList>
              {newsList.length > 0 && !isLoading && !error ? (
                newsList.map((item) => (
                  <NewsItem key={item.id}>
                    <NavLink
                      to={`${page.new}/${item.id}`}
                      style={{ color: 'inherit', width: '100%' }}
                    >
                      <NewsListItem>
                        <NewsTitle>{item.title}</NewsTitle>
                        <NewsText>{truncateText(item.short_description, 100)}</NewsText>
                        <NewsDate>Опубликовано {formatDate(item.created_at)}</NewsDate>
                      </NewsListItem>
                    </NavLink>
                  </NewsItem>
                ))
              ) : !isLoading && !error ? (
                <h3>Новости не найдены</h3>
              ) : null}
            </NewsList>
          </NewsContainer>
        </MainContainer>
      </section>
      <section>
        {displayedNews.length > 0 ? (
          <NewsCardList>
            {displayedNews.map(({ id, title, main_image }) => (
              <NewsCardLink key={id} to={`${page.new}/${id}`}>
                <NewsCardItem>
                  <NewsCardImg as={Image} src={main_image || ''} alt={title} loading="lazy" />
                  <NewsCardTitle>{title}</NewsCardTitle>
                </NewsCardItem>
              </NewsCardLink>
            ))}
          </NewsCardList>
        ) : null}
        {visibleCount < newsList.length && (
          <PrimaryButton label="Загрузить ещё" $btnType="colored" onClick={handleLoadMore} />
        )}
      </section>
    </>
  );
};

export default NewsPage;
