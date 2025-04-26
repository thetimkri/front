import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import { page } from '@/shared/constants/navigation/page.ts';
import {
  ContactsContainer,
  ContactsImage,
  SectionWrap,
} from '@/pages/contactsPage/ContactsPage.styles.ts';
import ContactsImg from '@/assets/images/contactsPage/ContactsImg.webp';
import ContactsList from '@/features/contactsList/ui/contactsList.tsx';
import { useContactsList } from '@/features/contactsList/model/useContactsList.ts';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import React from 'react';

export const ContactsPage = () => {
  const { data, isLoading } = useContactsList();

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Контакты', url: '/' },
  ];

  if (isLoading) return <Preloader pageLoad />;
  if (!data) return <h1>Не удалось загрузить список контактов</h1>;
  return (
    <>
      <section>
        <SectionWrap>
          <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
          <PageTitle titleText="Контакты" />
        </SectionWrap>
        <ContactsContainer>
          {data && <ContactsList data={data} />}
          <ContactsImage src={ContactsImg} alt={'contacts illustration'} />
        </ContactsContainer>
      </section>
    </>
  );
};
