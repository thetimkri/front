import { useParams, useSearchParams } from 'react-router-dom';
import KindStoriesDetails from '@/features/kindStories/ui/kindStoriesDetails.tsx';
import AnotherStoriesBlock from '@/features/anotherStories/ui/anotherStoriesBlock';
import { StoryCategory } from '@/shared/utils/storyCategories.ts';

export const OpenStories = () => {
  const [searchParams] = useSearchParams();
  const theme = searchParams.get('theme') as StoryCategory;
  const { id } = useParams<{ id: string }>();
  const storyId = Number(id);

  return (
    <>
      <KindStoriesDetails storyId={storyId} />
      <AnotherStoriesBlock theme={theme} title="Похожие истории" spaceBetween={24} />
    </>
  );
};
