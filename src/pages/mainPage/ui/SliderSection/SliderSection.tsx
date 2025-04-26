import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle';
import { SectionLinkBtn, SectionWrapper, StyledBtnContainer } from './SliderSection.styled';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { SliderCards, SliderCardsProps } from '@/widgets/Sliders/SliderCards';

type SliderSectionProps<T extends { id: string | number }> = {
  title: string;
  linkTitle: string;
  routerLink: string;
  sliderId: string;
  cards: Array<T>;
  renderCard: SliderCardsProps<T>['renderCard'];
  spaceBetween: number;
  breakpoints: Record<number, { slidesPerView: number; spaceBetween?: number }>;
};

export const SliderSection = <T extends { id: string | number }>({
  title,
  linkTitle,
  routerLink,
  cards,
  renderCard,
  sliderId,
  spaceBetween,
  breakpoints,
}: SliderSectionProps<T>) => {
  return (
    <section>
      <SectionWrapper>
        <SectionTitle title={title} />
        <SectionLinkBtn to={routerLink}>{linkTitle}</SectionLinkBtn>
      </SectionWrapper>
      <SliderCards
        cards={cards}
        renderCard={renderCard}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        sliderId={sliderId}
      />
      <StyledBtnContainer>
        <PrimaryButton label={linkTitle} $btnType="transparent" link={routerLink} />
      </StyledBtnContainer>
    </section>
  );
};
