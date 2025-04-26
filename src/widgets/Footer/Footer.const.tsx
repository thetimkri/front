import { page } from '@/shared/constants/navigation/page';

type NavMenuItem = {
  name: string;
  url: string;
};

export const navFooterMenuSections: NavMenuItem[] = [
  { name: 'Главная', url: page.mainPage },
  { name: 'Добрые истории', url: page.kindStories },
  { name: 'Добрый справочник', url: page.kindDirectory },
  { name: 'Журнал', url: page.journal },
  { name: 'Контакты', url: page.contacts },
  { name: 'О нас', url: page.aboutUs },
] as const;
