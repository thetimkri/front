import { FC } from 'react';
import {
  StyledStoryCardLink,
  StyledStoryCardLinkImage,
  StyledStoryCardLinkText,
} from './StoryCardLink.styled';
import Image from '@/shared/UiKit/Image/Image.tsx';

type StoryCardLinkProps = {
  main_image: string | null;
  title: string;
  link: string;
};

export const StoryCardLink: FC<StoryCardLinkProps> = ({ main_image, title, link }) => {
  return (
    <li>
      <StyledStoryCardLink to={link}>
        <StyledStoryCardLinkImage loading="lazy" src={main_image || ''} alt={title} as={Image} />
        <StyledStoryCardLinkText>{title}</StyledStoryCardLinkText>
      </StyledStoryCardLink>
    </li>
  );
};
