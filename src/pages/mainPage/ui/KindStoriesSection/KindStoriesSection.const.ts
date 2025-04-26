import { useEffect, useMemo, useState } from 'react';
import InHarmony from '@/assets/images/mainPage/InHarmony.webp';
import Family from '@/assets/images/mainPage/Family.webp';
import Heroes from '@/assets/images/mainPage/Heroes.webp';
import BeautySaveWorld from '@/assets/images/mainPage/BeautySaveWorld.webp';
import KindProjects from '@/assets/images/mainPage/KindProjects.webp';
import Animals from '@/assets/images/mainPage/Animals.webp';
import Willpower from '@/assets/images/mainPage/Willpower.webp';
import PeopleChangeWorld from '@/assets/images/mainPage/PeopleChangeWorld.webp';
import ManInProfession from '@/assets/images/mainPage/ManInProfession.webp';
import { page } from '@/shared/constants/navigation/page.ts';

interface Story {
  src: string;
  alt: string;
  subtitle: string;
  link?: string;
  $objectPosition?: string;
}

export const STORIES: Story[] = [
  {
    src: InHarmony,
    alt: 'В гармонии с природой',
    subtitle: 'В гармонии с природой',
    link: `${page.kindStories}?theme=6`,
    $objectPosition: 'bottom',
  },
  {
    src: Family,
    alt: 'Семейные ценности',
    subtitle: 'Семейные ценности',
    link: `${page.kindStories}?theme=9`,
  },
  {
    src: Heroes,
    alt: 'Герои среди нас',
    subtitle: 'Герои среди нас',
    link: `${page.kindStories}?theme=3`,
  },
  {
    src: BeautySaveWorld,
    alt: 'Красота спасет мир',
    subtitle: 'Красота спасёт мир',
    link: `${page.kindStories}?theme=7`,
  },
  {
    src: KindProjects,
    alt: 'Добрые проекты',
    subtitle: 'Добрые проекты',
    link: `${page.kindStories}?theme=2`,
  },
  {
    src: Animals,
    alt: 'Братья наши меньшие',
    subtitle: 'Братья наши меньшие',
    link: `${page.kindStories}?theme=5`,
  },
  {
    src: Willpower,
    alt: 'Сила воли',
    subtitle: 'Сила воли',
    link: `${page.kindStories}?theme=1`,
  },
  {
    src: PeopleChangeWorld,
    alt: 'Мир меняют люди',
    subtitle: 'Мир меняют люди',
    link: `${page.kindStories}?theme=4`,
  },
  {
    src: ManInProfession,
    alt: 'Человек в профессии',
    subtitle: 'Человек в профессии',
    link: `${page.kindStories}?theme=8`,
  },
];

export const useStories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stories = useMemo(() => {
    if (isMobile) {
      const mobileStories = [...STORIES];
      const familyIndex = mobileStories.findIndex((story) => story.alt === 'Семейные ценности');
      const beautyIndex = mobileStories.findIndex((story) => story.alt === 'Красота спасет мир');
      const kindMailIndex = mobileStories.findIndex((story) => story.alt === 'Добрые проекты');
      const heroesIndex = mobileStories.findIndex((story) => story.alt === 'Герои среди нас');

      if (kindMailIndex !== -1 && heroesIndex !== -1) {
        [mobileStories[kindMailIndex], mobileStories[heroesIndex]] = [
          mobileStories[heroesIndex],
          mobileStories[kindMailIndex],
        ];
      }

      if (familyIndex !== -1 && beautyIndex !== -1) {
        [mobileStories[familyIndex], mobileStories[beautyIndex]] = [
          mobileStories[beautyIndex],
          mobileStories[familyIndex],
        ];
      }
      return mobileStories;
    }
    return STORIES;
  }, [isMobile]);

  return stories;
};
