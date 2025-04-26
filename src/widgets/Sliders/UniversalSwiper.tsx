import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Swiper from 'swiper';
import {
  SliderContainer,
  MainSwiper,
  ThumbsSwiper,
  ModalOverlay,
  ModalBtn,
} from '@/widgets/Sliders/UniversalSwiper.styled.tsx';

export interface ImageData {
  id: number;
  image: string;
  order: number;
}

interface UniversalSwiperProps {
  images: ImageData[];
  initialIndex?: number;
}

const UniversalSwiper = ({ images, initialIndex = 0 }: UniversalSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwiperChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SliderContainer>
        <MainSwiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          onSwiper={handleSwiperChange}
          onSlideChange={handleSwiperChange}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                className="img"
                src={image.image}
                alt="Картинка слайдера"
                loading="lazy"
                onClick={handleImageClick}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  cursor: 'pointer',
                }}
              />
            </SwiperSlide>
          ))}
        </MainSwiper>
        <ThumbsSwiper
          spaceBetween={24}
          slidesPerView={4}
          freeMode={true}
          onSwiper={setThumbsSwiper}
          initialSlide={activeIndex}
          breakpoints={{
            1024: { spaceBetween: 16 },
            768: { spaceBetween: 16 },
            560: { spaceBetween: 8 },
            360: { spaceBetween: 8 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.image}
                alt="Картинка слайдера"
                loading="lazy"
                style={{ objectFit: 'cover', objectPosition: 'center', cursor: 'pointer' }}
              />
            </SwiperSlide>
          ))}
        </ThumbsSwiper>
      </SliderContainer>

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <div
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              animation: 'scaleIn 0.3s ease-in-out',
            }}
          >
            <img
              src={images[activeIndex].image}
              alt="Увеличенное изображение"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            />
            <ModalBtn onClick={handleCloseModal}>✕</ModalBtn>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

export default UniversalSwiper;
