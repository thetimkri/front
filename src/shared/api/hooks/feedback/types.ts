export interface FeedbackDto {
  id: number;
  name: string;
  review_text: string;
  created_at: string;
}

export interface FeedbackResDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: FeedbackDto[];
}

export interface FeedbackFormReqDto {
  name: string;
  review_text: string;
}

export interface FeedbackFormResDto {
  id: number;
  name: string;
  review_text: string;
}
