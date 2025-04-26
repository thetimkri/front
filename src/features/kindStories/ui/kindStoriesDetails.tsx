import { useCallback, useEffect, useState } from 'react';
import { useKindStory } from '@/features/kindStories/model/useKindStory';
import { UseLocationChain } from '@/features/kindStories/model/useLocationChain';
import { useNavigate } from 'react-router-dom';
import { locationsApi } from '@/shared/api/hooks/locations/queries/apiLocations';
import { formatDate } from '@/shared/utils/formatDate';
import { page } from '@/shared/constants/navigation/page';
import { StorySection } from '@/shared/constants/navigation/storySection';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import { FilteredCategory } from '@/shared/UiKit/FilteredCategory/FilteredCategory';
import Preloader from '@/shared/UiKit/Preloader/Preloader';
import { ShareButtons } from '@/shared/UiKit/ShareButtons/ShareButtons';
import SliderHistory from '@/widgets/Sliders/SliderHistory';
import parse from 'html-react-parser';
import { ErrorPage } from '@/pages';
import {
  CKEditorContent,
  OpenStoriesAuthorItem,
  OpenStoriesAuthorItems,
  OpenStoriesAuthorList,
  OpenStoriesContainer,
  OpenStoriesDesc,
  OpenStoriesDescription,
  OpenStoriesDetails,
  OpenStoriesDetailsContainer,
  OpenStoriesImage,
  OpenStoriesInfoText,
  OpenStoriesQuoteBlock,
  OpenStoriesTitle,
} from './kindStoriesDetails.styled';
import { Author } from '@/shared/api/hooks/stories/types';

const formatAuthorName = (author: Author): string => {
  const { first_name, last_name, patronymic } = author;
  return `${last_name} ${first_name}${patronymic ? ` ${patronymic}` : ''}`;
};

const KindStoriesDetails = ({ storyId }: { storyId: number }) => {
  const { data: storyData, isLoading: isStoryLoading, error: storyError } = useKindStory(storyId);
  const [regionName, setRegionName] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const authorLocation = storyData?.location;
  const locationIds = authorLocation ? [authorLocation] : undefined;

  const {
    data: locationData,
    isLoading: isLocationLoading,
    error: locationError,
  } = UseLocationChain(locationIds ?? undefined);

  useEffect(() => {
    const fetchRegionName = async () => {
      if (locationData?.parent) {
        try {
          const regionData = await locationsApi.getLocationById([locationData.parent]);
          setRegionName(regionData.name || '');
        } catch (error) {
          console.error('Error fetching region:', error);
          setRegionName('');
        }
      }
    };

    fetchRegionName();
  }, [locationData?.parent]);

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Добрые истории', url: page.kindStories },
    { name: storyData?.title || '', url: '' },
  ];

  const handleSearch = () => {
    navigate('/stories');
  };

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  const renderLocation = () => {
    if (isLocationLoading) return 'Загрузка...';
    if (locationError || !locationData) return 'Место не указано';

    if (locationData.name && regionName) {
      return `Россия, ${regionName}, г. ${locationData.name}`;
    } else if (locationData.name) {
      return `Россия, г. ${locationData.name}`;
    } else if (regionName) {
      return `Россия, ${regionName}`;
    }

    return 'Место не указано';
  };

  if (isStoryLoading) return <Preloader pageLoad />;
  if (storyError || !storyData) return <ErrorPage />;

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
      <section>
        <OpenStoriesQuoteBlock>{storyData.title}</OpenStoriesQuoteBlock>
        <OpenStoriesImage alt={storyData.title} src={storyData.main_image} loading="lazy" />
        <OpenStoriesContainer>
          <OpenStoriesDesc className="cke-content">
            <CKEditorContent>{parse(storyData.description || 'Текст не найден')}</CKEditorContent>
            <OpenStoriesDescription>
              Фото взяты из&nbsp;сети Интернет с&nbsp;благодарностью к&nbsp;их&nbsp;авторам.
            </OpenStoriesDescription>
          </OpenStoriesDesc>
          <OpenStoriesDetails>
            <OpenStoriesDetailsContainer>
              <OpenStoriesTitle>Место истории</OpenStoriesTitle>
              <OpenStoriesInfoText>{renderLocation()}</OpenStoriesInfoText>
            </OpenStoriesDetailsContainer>
            <OpenStoriesDetailsContainer>
              <OpenStoriesTitle>Опубликовано</OpenStoriesTitle>
              <OpenStoriesInfoText>
                {storyData.created_at ? formatDate(storyData.created_at) : '-'}
              </OpenStoriesInfoText>
            </OpenStoriesDetailsContainer>
            <OpenStoriesDetailsContainer>
              <OpenStoriesTitle>Авторы</OpenStoriesTitle>
              <OpenStoriesAuthorList>
                {storyData.authors?.map((author, index) => (
                  <OpenStoriesAuthorItems key={index}>
                    <OpenStoriesAuthorItem>{formatAuthorName(author)}</OpenStoriesAuthorItem>
                  </OpenStoriesAuthorItems>
                ))}
              </OpenStoriesAuthorList>
            </OpenStoriesDetailsContainer>
            <ShareButtons />
          </OpenStoriesDetails>
        </OpenStoriesContainer>
      </section>
      {storyData.images && storyData.images.length > 0 && (
        <SliderHistory images={storyData.images} />
      )}
    </>
  );
};

export default KindStoriesDetails;
