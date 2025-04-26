import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle';
import smileHover from '@/assets/images/mainPage/SmileHover.webp';
import tellAboutUs from '@/assets/images/mainPage/TellAboutAsHover.webp';
import { FC } from 'react';
import {
  HelpCard,
  HelpContainer,
  HelpDescription,
  HelpSubtitle,
  HelpWrapper,
  HoverImg,
} from './HowToHelpSection.styled';

import Heart from '@/assets/icons/Heart.svg';
import Check from '@/assets/icons/Check.svg';
import CheckHover from '@/assets/icons/CheckHover.svg';
import Star from '@/assets/icons/Star.svg';
import StarHover from '@/assets/icons/StarHover.svg';
import Write from '@/assets/icons/Write.svg';
import WriteHover from '@/assets/icons/WriteHover.svg';
import People from '@/assets/icons/People.svg';
import PeopleHover from '@/assets/icons/PeopleHover.svg';
import Message from '@/assets/icons/Message.svg';
import { HelpProjectCard } from '@/shared/api/hooks/helpProject/types.ts';

const iconMap = {
  1: { Icon: Heart, IconHover: Heart },
  2: { Icon: Check, IconHover: CheckHover },
  3: { Icon: Star, IconHover: StarHover },
  4: { Icon: Write, IconHover: WriteHover },
  5: { Icon: People, IconHover: PeopleHover },
  6: { Icon: Message, IconHover: Message },
};

interface HowToHelpSectionProps {
  data: HelpProjectCard[];
}

export const HowToHelpSection: FC<HowToHelpSectionProps> = ({ data }) => {
  const helpCards = data.map((cardData) => ({
    ...cardData,
    ...iconMap[cardData.id as keyof typeof iconMap],
  }));

  return (
    <section>
      <SectionTitle title="Как помочь проекту" />
      <HelpContainer>
        {helpCards.map(({ id, Icon, title, description, link }, index) => {
          const isFirst = index === 0;
          const isLast = index === helpCards.length - 1;

          return (
            <HelpCard key={id} to={link}>
              <HelpWrapper>
                {Icon && <Icon />}
                <HelpSubtitle>{title}</HelpSubtitle>
              </HelpWrapper>
              <HelpDescription>{description}</HelpDescription>
              {(isFirst || isLast) && (
                <HoverImg
                  src={isFirst ? smileHover : tellAboutUs}
                  alt={isFirst ? 'smile girl' : 'share with'}
                  loading="lazy"
                />
              )}
            </HelpCard>
          );
        })}
      </HelpContainer>
    </section>
  );
};
