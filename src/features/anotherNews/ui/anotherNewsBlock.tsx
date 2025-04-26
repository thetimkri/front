import AnotherEntityBlockItem from '@/shared/UiKit/AnotherEntityBlock/AnotherEntityBlockItem/AnotherEntityBlockItem';
import { useAnotherNews } from '../model/useAnotherNews';
import AnotherEntityBlock from '@/shared/UiKit/AnotherEntityBlock/AnotherEntityBlock';
import Preloader from '@/shared/UiKit/Preloader/Preloader';
import { NewsDto } from '@/shared/api/hooks/news/types.ts';
import React from 'react';

interface AnotherNewsBlockProps {
  title: string;
  spaceBetween: number;
}

const AnotherNewsBlock: React.FC<AnotherNewsBlockProps> = ({ title, spaceBetween }) => {
  const { data, isLoading, error } = useAnotherNews();
  const results = data?.results || [];
  console.log(results);
  const breakpoints = {
    360: { slidesPerView: 1 },
    560: { slidesPerView: 2, spaceBetween: 16 },
    768: { slidesPerView: 3.825, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 16 },
    1280: { slidesPerView: 3.586 },
    1920: { slidesPerView: 3.7469 },
  };

  const to = '/about/news';

  const anotherNewsRender = (storyData: NewsDto) => (
    <AnotherEntityBlockItem to={to} entityItem={storyData} />
  );

  if (isLoading) return <Preloader />;
  if (error) return <div>{error.message}</div>;
  if (!results.length) return <h2>Нет похожих историй</h2>;

  return (
    <AnotherEntityBlock
      title={title}
      breakpoints={breakpoints}
      spaceBetween={spaceBetween}
      cards={results}
      renderCard={anotherNewsRender}
    />
  );
};

export default AnotherNewsBlock;
