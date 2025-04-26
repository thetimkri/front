import { page } from '@/shared/constants/navigation/page.ts';
import { STORY_CATEGORIES } from '@/shared/utils/storyCategories.ts';

export const StorySection = {
  kindProjects: {
    title: 'Добрые проекты',
    theme: STORY_CATEGORIES.KIND_PROJECTS,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.KIND_PROJECTS}`,
  },
  heroesAmongUs: {
    title: 'Герои среди нас',
    theme: STORY_CATEGORIES.HEROES,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.HEROES}`,
  },
  peopleChangeTheWorld: {
    title: 'Мир меняют люди',
    theme: STORY_CATEGORIES.PEOPLE_CHANGE,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.PEOPLE_CHANGE}`,
  },
  ourAnimalFriends: {
    title: 'Братья наши меньшие',
    theme: STORY_CATEGORIES.ANIMALS,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.ANIMALS}`,
  },
  willpower: {
    title: 'Сила воли',
    theme: STORY_CATEGORIES.WILLPOWER,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.WILLPOWER}`,
  },
  inHarmonyWithNature: {
    title: 'В гармонии с природой',
    theme: STORY_CATEGORIES.NATURE,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.NATURE}`,
  },
  theProfessional: {
    title: 'Человек в профессии',
    theme: STORY_CATEGORIES.PROFESSIONAL,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.PROFESSIONAL}`,
  },
  beautyWillSaveTheWorld: {
    title: 'Красота спасёт мир',
    theme: STORY_CATEGORIES.BEAUTY,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.BEAUTY}`,
  },
  familyValues: {
    title: 'Семейные ценности',
    theme: STORY_CATEGORIES.FAMILY,
    routerLink: `${page.kindStories}?theme=${STORY_CATEGORIES.FAMILY}`,
  },
} as const;

export type StorySectionKey = keyof typeof StorySection;
