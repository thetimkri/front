import React from 'react';
import UniversalSwiper, { ImageData } from '@/widgets/Sliders/UniversalSwiper.tsx';

type TSliderHistory = {
  images: ImageData[];
};

const SliderHistory: React.FC<TSliderHistory> = ({ images }) => {
  return <UniversalSwiper images={images} initialIndex={0} />;
};

export default SliderHistory;
