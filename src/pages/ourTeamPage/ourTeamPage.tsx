import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import { page } from '@/shared/constants/navigation/page.ts';
import {
  FounderCard,
  FounderCardImg,
  FounderCardText,
  FounderCardTextContainer,
  FounderCardTitle,
  HowJoinImg,
  HowJoinImgContainer,
  HowJoinTextContainer,
  OurTeamSection,
  Overlay,
  SectionContainerHowJoin,
  SectionContainerTeam,
  TeamParagraph,
} from './ourTeamPage.styled';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import Maria from '@/assets/images/ourTeam/Maria.jpg';
import HowJoin from '@/assets/images/aboutUs/heroSectionImg.jpg';
import OurTeamList from '@/features/ourTeamList/ui/ourTeamList';
import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle';
import Pagination from '@/shared/UiKit/Pagination/Pagination';
import { useOurTeamList } from '@/features/ourTeamList/model/useOurTeamList';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import FounderTextContainer from './ui/FounderTextContainer';
import Preloader from '@/shared/UiKit/Preloader/Preloader';
import { JOIN_TEAM_URL } from '@/shared/constants/navigation';

export const OurTeamPage = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'О нас', url: page.aboutUs },
    { name: 'Наша команда', url: '/' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const isBigMobile = useMediaQuery({ maxWidth: 767 });
  const isMobile = useMediaQuery({ maxWidth: 500 });

  useEffect(() => {
    if (isMobile) {
      setItemsPerPage(1);
    } else if (isBigMobile) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(3);
    }
  }, [isMobile, isBigMobile]);

  const { data, error, isLoading } = useOurTeamList(currentPage, itemsPerPage);

  if (error && error.message === 'Неправильная страница') {
    setSearchParams('');
  }

  return (
    <>
      <section>
        <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
        <OurTeamSection>
          <PageTitle titleText="Наша команда" />
          <SectionContainerTeam>
            <FounderCard>
              <FounderCardImg src={Maria} alt="Мария Зацаринная" />
              <FounderCardTextContainer>
                <FounderCardTitle>Мария Зацаринная</FounderCardTitle>
                <FounderCardText>Создатель проекта «Новости Добрых Деяний» </FounderCardText>
              </FounderCardTextContainer>
            </FounderCard>
            <FounderTextContainer />
          </SectionContainerTeam>
        </OurTeamSection>
      </section>
      <OurTeamSection>
        <SectionTitle title="Как вступить в команду?" />
        <SectionContainerHowJoin>
          <HowJoinImgContainer>
            <HowJoinImg src={HowJoin} alt="Люди обнимаются" />
            <Overlay />
          </HowJoinImgContainer>
          <HowJoinTextContainer>
            <TeamParagraph>
              Хотите внести свой вклад в создание более дружелюбного и поддерживающего сообщества?
              Тогда присоединяйтесь к нам!
            </TeamParagraph>
            <TeamParagraph>
              Наша команда занимается тем, что помогаем людям делиться своими историями доброты и
              взаимопомощи. Мы убеждены, что каждый из нас может сделать мир лучше, просто проявив
              внимание и заботу к окружающим.
            </TeamParagraph>
            <TeamParagraph>
              Присоединяйтесь к нашему сообществу, где вы сможете рассказать свою историю, услышать
              истории других и, возможно, найти новых друзей и единомышленников. Вместе мы сможем
              сделать больше хороших дел и сделать наш мир добрее!
            </TeamParagraph>
            <PrimaryButton
              link={JOIN_TEAM_URL}
              label="Хочу в команду"
              $btnType="colored"
              size="250px"
            />
          </HowJoinTextContainer>
        </SectionContainerHowJoin>
      </OurTeamSection>
      {isLoading && (
        <OurTeamSection>
          <SectionTitle title="Участники" />
          <Preloader pageLoad />
        </OurTeamSection>
      )}

      {!isLoading && (
        <OurTeamSection>
          <SectionTitle title="Участники" />
          {data && data.results && data.results.length > 0 ? (
            <>
              <OurTeamList data={data.results} />
              <Pagination count={data.count || 0} itemsPerPage={itemsPerPage} />
            </>
          ) : (
            <h3>Не удалось загрузить список участников</h3>
          )}
        </OurTeamSection>
      )}
    </>
  );
};
