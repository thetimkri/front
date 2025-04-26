import Arrow from '@/assets/icons/ArrowRight.svg';
import { ArrowButton, StyledSwiper, StyledSwiperSlide, SwiperWrapper } from './SliderCards.styled';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

export type SliderCardsProps<T extends { id: string | number }> = {
  cards: Array<T>;
  renderCard: (card: T) => ReactNode;
  spaceBetween: number;
  breakpoints: Record<number, { slidesPerView: number; spaceBetween?: number }>;
  sliderId?: string;
};

export const SliderCards = <T extends { id: string | number }>({
  cards,
  renderCard,
  spaceBetween,
  breakpoints,
  sliderId,
}: SliderCardsProps<T>) => {
  return (
    <>
      <SwiperWrapper>
        <StyledSwiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            el: `.custom-pagination-${sliderId}`,
          }}
          navigation={{
            prevEl: `.swiper-button-prev-${sliderId}`,
            nextEl: `.swiper-button-next-${sliderId}`,
          }}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
        >
          {cards.map((card) => (
            <StyledSwiperSlide key={card.id}>{renderCard(card)}</StyledSwiperSlide>
          ))}
        </StyledSwiper>

        <ArrowButton className={`swiper-button-prev-${sliderId}`}>
          <Arrow />
        </ArrowButton>
        <ArrowButton className={`swiper-button-next-${sliderId}`}>
          <Arrow />
        </ArrowButton>
        <div className={`custom-pagination-${sliderId}`}></div>
      </SwiperWrapper>
    </>
  );
};
