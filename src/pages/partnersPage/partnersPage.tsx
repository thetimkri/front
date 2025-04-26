import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import { page } from '@/shared/constants/navigation/page.ts';
import {
  AddPartnerBtn,
  BtnContainer,
  MainContent,
  Paragraph,
  TextContainer,
  TitleContainer,
} from './PartnersPage.styled';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import Pagination from '@/shared/UiKit/Pagination/Pagination';
import PartnersList from '@/features/partnersList/ui/partnersList';
import { usePartnersList } from '@/features/partnersList/model/usePartnersList';
import Preloader from '@/shared/UiKit/Preloader/Preloader';
import { useMediaQuery } from 'react-responsive';
import Btn from '@/assets/icons/Close.svg';

export const PartnersPage = () => {
  const isSmallDesktop = useMediaQuery({ query: '(max-width: 1060px)' });
  const isFontMobBreakPoint = useMediaQuery({ query: '(max-width: 767px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 559px)' });

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(6);
    } else if (isFontMobBreakPoint) {
      setItemsPerPage(8);
    } else if (isSmallDesktop) {
      setItemsPerPage(9);
    } else {
      setItemsPerPage(12);
    }
  }, [isMobile, isFontMobBreakPoint, isSmallDesktop]);

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Партнёры', url: page.partners },
  ];

  const { data, isLoading, error } = usePartnersList(currentPage, itemsPerPage);

  if (error && error.message === 'Неправильная страница') {
    setSearchParams('');
  }

  return (
    <section>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <MainContent>
        <TitleContainer>
          <PageTitle titleText="Партнёры" />
          <BtnContainer>
            <PrimaryButton
              link={page.becomePartner}
              label="Стать партнёром"
              $btnType="transparent"
            />
          </BtnContainer>
          <AddPartnerBtn to={page.becomePartner}>
            <Btn />
          </AddPartnerBtn>
        </TitleContainer>
        <TextContainer>
          <Paragraph>
            Наши партнёры — это основа, на которой строится развитие проекта «Новости Добрых
            Деяний». Благодаря Вашей поддержке мы можем расширять границы добрых дел.
          </Paragraph>
          <Paragraph>
            Вместе с Вами мы создаём мир, где помощь и забота становятся нормой. Каждый вклад наших
            партнёров — это шаг к светлому будущему, в котором добро процветает.
          </Paragraph>
          <Paragraph>Спасибо за то, что вместе с нами вы делаете этот мир лучше!</Paragraph>
        </TextContainer>

        {isLoading ? (
          <Preloader pageLoad />
        ) : (
          <>
            <PartnersList data={data?.results || []} />
            <Pagination itemsPerPage={itemsPerPage} count={data?.count || 0} />
          </>
        )}
      </MainContent>
    </section>
  );
};
