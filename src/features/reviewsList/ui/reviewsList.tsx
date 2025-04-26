import { ReviewsListContainer } from './reviewsList.styled';
import { FeedBackSliderCard } from '@/pages/mainPage/ui/FeedBackSliderCard/FeedBackSliderCard';
import { FeedbackDto } from '@/shared/api/hooks/feedback/types.ts';
import React from 'react';
import { ScrollToPositionOnMount } from '@/shared/utils/scrollToTop.ts';

type TReviewsListProps = {
  data: FeedbackDto[];
};

const ReviewsList: React.FC<TReviewsListProps> = ({ data }) => {
  return (
    <>
      <ScrollToPositionOnMount top={0} />
      <ReviewsListContainer>
        {data.map((review) => (
          <FeedBackSliderCard key={review.id} {...review} />
        ))}
      </ReviewsListContainer>
    </>
  );
};

export default ReviewsList;
