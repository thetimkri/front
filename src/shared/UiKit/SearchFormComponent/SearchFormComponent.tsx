import {
  StyledSearch,
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
  StyledClearButton,
} from './SearchFormComponent.styled';
import { useState } from 'react';
import CloseIcon from '@/assets/icons/CloseFillColor.svg';

type SearchFormComponentProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (query: string) => void;
  onClear: () => void;
};

export const SearchFormComponent: React.FC<SearchFormComponentProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch,
  onClear,
}) => {
  const [showPlaceholderError, setShowPlaceholderError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      setSearchQuery('');
      setShowPlaceholderError(true);
      return;
    }

    setShowPlaceholderError(false);
    onSearch(trimmedQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    if (showPlaceholderError) {
      setShowPlaceholderError(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowPlaceholderError(false);
    onClear();
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchButton type="submit">
        <StyledSearch />
      </StyledSearchButton>

      <StyledSearchInput
        type="text"
        placeholder={showPlaceholderError ? 'Введите текст для поиска' : 'Поиск'}
        value={searchQuery}
        onChange={handleChange}
      />

      {searchQuery.trim() && (
        <StyledClearButton type="button" onClick={handleClear}>
          <CloseIcon />
        </StyledClearButton>
      )}
    </StyledSearchForm>
  );
};
