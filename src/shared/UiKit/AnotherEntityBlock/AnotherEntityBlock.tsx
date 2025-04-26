import { SliderCards, type SliderCardsProps } from '@/widgets/Sliders/SliderCards';
import { AnotherEntityBlockContainer, AnotherEntityTitle } from './AnotherEntityBlock.styled';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';

type TAnotherEntityBlockProps<T extends { id: string | number }> = {
  title: string;
  theme?: StoryCategory;
} & SliderCardsProps<T>;

const AnotherEntityBlock = <T extends { id: string | number }>({
  title,
  ...sliderProps
}: TAnotherEntityBlockProps<T>) => {
  return (
    <AnotherEntityBlockContainer>
      <AnotherEntityTitle>{title}</AnotherEntityTitle>
      <SliderCards {...sliderProps} />
    </AnotherEntityBlockContainer>
  );
};

export default AnotherEntityBlock;
