import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/shared/layout/Layout';

import {
  ErrorPage,
  KindStoriesPage,
  MainPage,
  SupportProjectPage,
  OpenStories,
  OpenNews,
  ContactsPage,
  AboutUsPage,
  JournalPage,
  KindDirectoryPage,
  PartnersPage,
  ReviewsPage,
  ReviewPage,
  NewsPage,
  OurTeamPage,
  BecomePartnerPage,
} from '@/pages';
import { page } from '@/shared/constants/navigation/page.ts';
import InternalServerError from '@/pages/internalServerError500/InternalServerError.tsx';
import JoinTeamPage from '@/pages/joinTeamPage/JoinTeamPage';
import TellStoryPage from '@/pages/tellStoryPage/TellStoryPage';
import JoinDirectoryFormPage from '@/pages/joinDirectoryFormPage/joinDirectoryFormPage.tsx';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={page.mainPage} element={<Layout />}>
          <Route path={page.mainPage} element={<MainPage />} />
          <Route path={page.kindStories} element={<KindStoriesPage />} />
          <Route path={page.kindStoriesOpen} element={<OpenStories />} />
          <Route path={page.kindDirectory} element={<KindDirectoryPage />} />
          <Route path={page.kindDirectoryForm} element={<JoinDirectoryFormPage />} />
          <Route path={page.journal} element={<JournalPage />} />
          <Route path={page.aboutUs} element={<AboutUsPage />} />
          <Route path={page.newsOpen} element={<OpenNews />} />
          <Route path={page.contacts} element={<ContactsPage />} />
          <Route path={page.support} element={<SupportProjectPage />} />
          <Route path={page.tellStory} element={<TellStoryPage />} />
          <Route path={page.joinTeam} element={<JoinTeamPage />} />
          <Route path={page.news} element={<NewsPage />} />
          <Route path={page.partners} element={<PartnersPage />} />
          <Route path={page.becomePartner} element={<BecomePartnerPage />} />
          <Route path={page.reviews} element={<ReviewsPage />} />
          <Route path={page.review} element={<ReviewPage />} />
          <Route path={page.ourTeam} element={<OurTeamPage />} />
          <Route path={page.serverError} element={<InternalServerError />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
