import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import { page } from '@/shared/constants/navigation/page.ts';
import { HeroSection, InfoSection, NavigationSection } from './ui';

export const AboutUsPage = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: '/' },
  ];
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <PageTitle titleText="О нас" />
      <HeroSection />
      <NavigationSection />
      <InfoSection />
    </div>
  );
};
