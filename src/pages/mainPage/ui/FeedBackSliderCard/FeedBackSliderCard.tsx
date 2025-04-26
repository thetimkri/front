import { useMemo } from 'react';
import { page } from '@/shared/constants/navigation/page';

import {
  StyledFeedBackSliderCard,
  StyledFeedBackSliderDescr,
  StyledFeedBackSliderLink,
  StyledFeedBackSliderWrap,
} from './FeedBackSliderCard.styled';

import Quote from '@/assets/icons/QuoteUp.svg';
import { truncateText } from '@/shared/utils/truncate.ts';
import { FeedbackDto } from '@/shared/api/hooks/feedback/types.ts';

export const FeedBackSliderCard = (feedback: FeedbackDto) => {
  const truncatedDescription = useMemo(
    () => truncateText(feedback.review_text, 30),
    [feedback.review_text]
  );

  return (
    <StyledFeedBackSliderCard>
      <StyledFeedBackSliderWrap>
        <Quote />
        <StyledFeedBackSliderDescr>{truncatedDescription}</StyledFeedBackSliderDescr>
      </StyledFeedBackSliderWrap>
      <StyledFeedBackSliderLink to={page.review.replace(':id', feedback.id.toString())}>
        Читать отзыв полностью
      </StyledFeedBackSliderLink>
    </StyledFeedBackSliderCard>
  );
};
