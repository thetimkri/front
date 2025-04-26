import React from 'react';
import UniversalSwiper, { ImageData } from '@/widgets/Sliders/UniversalSwiper.tsx';

type TSliderNews = {
  images: ImageData[];
};

const SliderNews: React.FC<TSliderNews> = ({ images }) => {
  return <UniversalSwiper images={images} initialIndex={1} />;
};

export default SliderNews;
