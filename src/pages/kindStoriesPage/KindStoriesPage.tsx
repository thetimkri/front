import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { StoryCategory } from '@/shared/utils/storyCategories';
import { formatCategoryTranslate } from '@/shared/utils/categoryFormatters';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { page } from '@/shared/constants/navigation/page';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import { FilteredCategory } from '@/shared/UiKit/FilteredCategory/FilteredCategory';
import {
  KindStoriesCategoryTitle,
  GroupedThemeWrapper,
  StoryCardList,
} from './KindStoriesPage.styled';
import { StorySection } from '@/shared/constants/navigation/storySection';
import { UniversalCards } from '@/shared/UiKit/UniversalCards/UniversalCards';
import { KindStoriesCategorySection } from '@/features/kindStoriesCategorySection/ui/kindStoriesCategorySection';
import { StoryCardLink } from '@/shared/UiKit/StoryCardLink/StoryCardLink';
import { useAllKindStories } from '@/shared/api/hooks/stories/queries/useAllKindStories';
import { KindStoryDto } from '@/shared/api/hooks/stories/types';

export const KindStoriesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const { pathname } = location;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [foundStories, setFoundStories] = useState<KindStoryDto[]>([]);
  const { data } = useAllKindStories();
  const allStories = data?.results || [];
  const [errorMessage, setErrorMessage] = useState<string>('');
  const theme = searchParams.get('theme') as StoryCategory | null;
  const title = formatCategoryTranslate(theme);

  const handleSearch = useCallback(
    (query?: string) => {
      if (!query?.trim()) return;

      const filtered = allStories.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) &&
          (!theme || story.theme === theme)
      );

      if (filtered.length > 0) {
        setFoundStories(filtered);
        setErrorMessage('');
      } else {
        setFoundStories([]);
        setErrorMessage(
          theme
            ? 'Истории с данным названием нет в данной теме.'
            : 'Истории с данным названием не существует.'
        );
      }

      if (!theme) {
        setSearchParams({});
      }
    },
    [allStories, theme, setSearchParams]
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setFoundStories([]);
    setErrorMessage('');
  }, []);

  useEffect(() => {
    setSearchQuery('');
    setFoundStories([]);
    setErrorMessage('');
  }, [theme]);

  useEffect(() => {
    const incomingQuery = location.state?.query;
    if (incomingQuery && allStories.length > 0) {
      handleSearch(incomingQuery);
      setSearchQuery('');
      window.history.replaceState({}, document.title);
    }
  }, [location.state, allStories, handleSearch]);

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Добрые истории', url: page.kindStories },
    ...(theme ? [{ name: title, url: '' }] : []),
  ];

  const groupedStories = foundStories.length
    ? foundStories.reduce(
        (acc, story) => {
          if (!acc[story.theme]) {
            acc[story.theme] = [];
          }
          acc[story.theme].push(story);
          return acc;
        },
        {} as Record<StoryCategory, KindStoryDto[]>
      )
    : {};

  return (
    <>
      <div>
        <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
        <FilteredCategory
          sections={StorySection}
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClear={handleClearSearch}
        />
      </div>

      {theme ? (
        <section>
          <KindStoriesCategoryTitle>{title}</KindStoriesCategoryTitle>
          {foundStories.length > 0 ? (
            <StoryCardList>
              {foundStories.map((story) => (
                <StoryCardLink
                  key={story.id}
                  main_image={story.main_image}
                  title={story.title}
                  link={`${pathname}/${story.id}?theme=${story.theme}`}
                />
              ))}
            </StoryCardList>
          ) : !errorMessage ? (
            <KindStoriesCategorySection theme={theme} />
          ) : (
            <p>{errorMessage}</p>
          )}
        </section>
      ) : (
        <section>
          {Object.entries(groupedStories).length > 0
            ? Object.entries(groupedStories).map(([themeKey, stories]) => {
                const typedStories = stories as KindStoryDto[];

                return (
                  <GroupedThemeWrapper key={themeKey}>
                    <KindStoriesCategoryTitle>
                      {formatCategoryTranslate(themeKey as StoryCategory)}
                    </KindStoriesCategoryTitle>
                    <StoryCardList>
                      {typedStories.map((foundStory) => (
                        <StoryCardLink
                          key={foundStory.id}
                          main_image={foundStory.main_image}
                          title={foundStory.title}
                          link={`${pathname}/${foundStory.id}?theme=${foundStory.theme}`}
                        />
                      ))}
                    </StoryCardList>
                  </GroupedThemeWrapper>
                );
              })
            : !errorMessage
              ? Object.entries(StorySection).map(([key, section]) => (
                  <UniversalCards
                    key={key}
                    title={section.title}
                    theme={section.theme}
                    routerLink={section.routerLink}
                  />
                ))
              : null}
          {errorMessage && <p>{errorMessage}</p>}
        </section>
      )}
    </>
  );
};
