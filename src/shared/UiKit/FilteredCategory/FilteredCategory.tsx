import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { StoryCategory } from '@/shared/utils/storyCategories';
import { StorySection } from '@/shared/constants/navigation/storySection';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { page } from '@/shared/constants/navigation/page';
import TagButton from './TagButton/TagButton';
import { TagButtonLink } from './TagButtonLink/TagButtonLink';
import CloseIcon from '@/assets/icons/CloseIconHover.svg';
import {
  CategoryButtons,
  FilterSection,
  Search,
  SearchForm,
  SearchInput,
  StoryWrap,
  SearchButton,
  StyledButtonContainer,
  StyledStoryButtonLink,
  StyledTellBtn,
  StyledClearButton,
} from './FilteredCategory.styled';

type FilteredCategoryProps = {
  sections: typeof StorySection;
  withLinks?: boolean;
  onSearch?: (query?: string) => void;
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onClear?: () => void;
};

export const FilteredCategory: React.FC<FilteredCategoryProps> = ({
  sections,
  withLinks,
  onSearch,
  searchQuery,
  setSearchQuery,
  onClear,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 560px)' });
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTheme, setActiveTheme] = useState<StoryCategory | null>(null);
  const [showPlaceholderError, setShowPlaceholderError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const themeParam = searchParams.get('theme') as StoryCategory | null;
    setActiveTheme(themeParam || null);
  }, [searchParams]);

  const handleTagClick = (theme: StoryCategory) => {
    setActiveTheme(theme);
    setSearchParams({ theme });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchQuery) {
      setSearchQuery(e.target.value);
    }
    if (showPlaceholderError) {
      setShowPlaceholderError(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!onSearch || !searchQuery || !setSearchQuery) return;

    const trimmedQuery = searchQuery.trim();

    if (!trimmedQuery) {
      setSearchQuery('');
      setShowPlaceholderError(true);
      return;
    }

    setShowPlaceholderError(false);

    const isOnDetailsPage =
      location.pathname.startsWith('/stories/') && !location.pathname.endsWith('/stories');

    if (isOnDetailsPage) {
      navigate('/stories', { state: { query: trimmedQuery } });
    } else {
      onSearch(trimmedQuery);
    }
  };

  const handleClear = () => {
    if (setSearchQuery) {
      setSearchQuery('');
    }
    if (showPlaceholderError) {
      setShowPlaceholderError(false);
    }
    if (onClear) {
      onClear();
    }
  };

  return (
    <div>
      <StoryWrap>
        <PageTitle titleText="Добрые истории" />
        <StyledButtonContainer>
          <PrimaryButton label="Рассказать историю" $btnType="transparent" link={page.tellStory} />
        </StyledButtonContainer>

        {isMobile && (
          <StyledStoryButtonLink to={page.tellStory}>
            <StyledTellBtn />
          </StyledStoryButtonLink>
        )}
      </StoryWrap>
      <FilterSection>
        <CategoryButtons>
          {withLinks
            ? Object.values(sections).map((section) => (
                <TagButtonLink key={section.theme} link={section.routerLink} text={section.title} />
              ))
            : Object.values(sections).map((section) => (
                <TagButton
                  key={section.theme}
                  text={section.title}
                  onClick={() => handleTagClick(section.theme)}
                  isActive={activeTheme === section.theme}
                />
              ))}
        </CategoryButtons>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchButton type="submit">
            <Search />
          </SearchButton>
          <SearchInput
            type="text"
            placeholder={showPlaceholderError ? 'Введите текст для поиска' : 'Поиск'}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && searchQuery.trim() && (
            <StyledClearButton type="button" onClick={handleClear}>
              <CloseIcon />
            </StyledClearButton>
          )}
        </SearchForm>
      </FilterSection>
    </div>
  );
};
