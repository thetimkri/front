import FoundError from '@/assets/icons/NotFound.svg';
import {
  NoResultsContainer,
  NoResultsDescription,
  NoResultsItem,
  NoResultsList,
  NoResultsTitle,
  NoResultsWrapper,
} from '@/pages/noResultsPage/NoResultsPage.styled.ts';

export const NoResultsPage = () => {
  return (
    <NoResultsContainer>
      <FoundError />
      <NoResultsWrapper>
        <NoResultsTitle>По вашему запросу ничего не найдено</NoResultsTitle>
        <NoResultsList>
          <NoResultsItem>Проверьте, правильно ли введен запрос, нет ли опечаток.</NoResultsItem>
          <NoResultsItem>Попробуйте изменить ваш запрос</NoResultsItem>
        </NoResultsList>
        <NoResultsDescription>
          У нас более тысячи добрых историй, может, посмотрите что‑нибудь ещё?
        </NoResultsDescription>
      </NoResultsWrapper>
    </NoResultsContainer>
  );
};
