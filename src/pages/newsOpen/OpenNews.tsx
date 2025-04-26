import { useParams } from 'react-router-dom';
import KindNewsDetails from '@/features/kindNews/ui/kindNewsDetails.tsx';

export const OpenNews = () => {
  const { id } = useParams<{ id: string }>();
  const newsId = Number(id);

  return (
    <>
      <KindNewsDetails newsId={newsId} />
    </>
  );
};
