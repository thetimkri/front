export const STORY_CATEGORIES = {
  WILLPOWER: '1',
  KIND_PROJECTS: '2',
  HEROES: '3',
  PEOPLE_CHANGE: '4',
  ANIMALS: '5',
  NATURE: '6',
  BEAUTY: '7',
  PROFESSIONAL: '8',
  FAMILY: '9',
} as const;

export type StoryCategory = (typeof STORY_CATEGORIES)[keyof typeof STORY_CATEGORIES];
