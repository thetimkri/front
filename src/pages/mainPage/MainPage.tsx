import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { breakpoints, breakpointsPartner } from '@/pages/mainPage/MainPage.const.ts';
import { page } from '@/shared/constants/navigation/page.ts';
import { Banner, HowToHelpSection, KindStoriesSection, SliderSection } from './ui';
import { MainContainer } from '@/pages/mainPage/MainPage.styled.ts';
import { OurPartnersSliderCard } from './ui/OurPartnersSliderCard/OurPartnersSliderCard';
import { FeedBackSliderCard } from './ui/FeedBackSliderCard/FeedBackSliderCard';
import { usePartnersList } from '@/features/partnersList/model/usePartnersList';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import { useReviewsList } from '@/features/reviewsList/model/useReviewsList';
import { useGetHowToHelpCardsQuery } from '@/entities/helpProject/queries.ts';

export const MainPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const {
    data: howToHelpCards,
    error: helpError,
    isPending: isHelpPending,
  } = useGetHowToHelpCardsQuery();

  const {
    data: partners,
    error: partnersError,
    isLoading: isPartnersPending,
  } = usePartnersList(1, 10);

  const {
    data: feedback,
    error: feedbackError,
    isLoading: isFeedbackPending,
  } = useReviewsList(1, 10);

  useEffect(() => {
    const isAllLoaded = !isHelpPending && !isPartnersPending && !isFeedbackPending;

    if (isAllLoaded) {
      const hasAllData = howToHelpCards && partners?.results && feedback?.results;
      const hasAnyError = helpError || partnersError || feedbackError;

      if (hasAnyError || !hasAllData) {
        navigate(page.serverError);
        return;
      }

      setIsLoading(false);
    }
  }, [
    isHelpPending,
    isPartnersPending,
    isFeedbackPending,
    howToHelpCards,
    partners,
    feedback,
    helpError,
    partnersError,
    feedbackError,
    navigate,
  ]);

  if (isLoading || !howToHelpCards || !partners || !feedback) {
    return <Preloader pageLoad={true} />;
  }

  return (
    <MainContainer>
      <Banner />
      <KindStoriesSection />
      <HowToHelpSection data={howToHelpCards} />
      <SliderSection
        breakpoints={breakpoints}
        spaceBetween={24}
        title="Что о нас говорят"
        linkTitle="Все отзывы"
        routerLink={page.reviews}
        cards={feedback.results}
        renderCard={FeedBackSliderCard}
        sliderId="whatTellAboutUs"
      />
      <SliderSection
        breakpoints={breakpointsPartner}
        spaceBetween={24}
        title="Наши партнёры"
        linkTitle="Все партнёры"
        routerLink={page.partners}
        cards={partners.results}
        renderCard={OurPartnersSliderCard}
        sliderId="oursPartners"
      />
    </MainContainer>
  );
};
