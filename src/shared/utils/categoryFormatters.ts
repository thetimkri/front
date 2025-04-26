import { StoryCategory } from '@/shared/utils/storyCategories.ts';
import { StorySection } from '@/shared/constants/navigation/storySection.ts';

export function getStorySectionByTheme(theme: StoryCategory | null) {
  if (!theme) return null;
  return Object.values(StorySection).find((section) => section.theme === theme);
}

export function formatCategoryTranslate(theme: StoryCategory | null): string {
  const section = getStorySectionByTheme(theme);
  return section?.title || '';
}
