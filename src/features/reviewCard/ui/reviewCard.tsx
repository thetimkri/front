import Quote from '@/assets/icons/QuoteUp.svg';
import QuoteDown from '@/assets/icons/QuoteDown.svg';
import React from 'react';
import {
  QuoteWrapper,
  ReviewContainer,
  ReviewDate,
  ReviewText,
  ReviewTextWrapper,
  ReviewTitle,
  ReviewWrapper,
} from './reviewCard.styled.ts';
import { formatDate } from '@/shared/utils/formatDate.ts';
import { FeedbackDto } from '@/shared/api/hooks/feedback/types.ts';

interface ReviewCardProps {
  data: FeedbackDto;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ data }) => {
  if (!data) return <h1>Не удалось загрузить отзыв</h1>;
  return (
    <ReviewContainer>
      <ReviewWrapper>
        <ReviewTitle>{data.name}</ReviewTitle>
        <ReviewDate>{`Опубликовано ${formatDate(data.created_at)}`}</ReviewDate>
      </ReviewWrapper>
      <ReviewTextWrapper>
        <QuoteWrapper>
          <Quote />
        </QuoteWrapper>
        <ReviewText>{data.review_text}</ReviewText>
        <QuoteWrapper>
          <QuoteDown />
        </QuoteWrapper>
      </ReviewTextWrapper>
    </ReviewContainer>
  );
};
