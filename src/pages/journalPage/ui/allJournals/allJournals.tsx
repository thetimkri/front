import { JournalComponentTitle } from '@/pages/journalPage/journalPage.styled.ts';
import JournalList from '@/features/journalList/ui/journalList.tsx';
import { useSearchParams } from 'react-router-dom';
import { useWindowSize } from '@/shared/utils/useWindowSize.ts';

interface AllJournalsProps {
  currentJournalId: number | null;
  onJournalSelect: (id: number) => void;
}

export const AllJournals = ({ currentJournalId, onJournalSelect }: AllJournalsProps) => {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const { width } = useWindowSize();

  const getPageSize = (screenWidth: number) => {
    if (screenWidth <= 560) {
      return 1;
    } else if (screenWidth <= 700) {
      return 2;
    } else {
      return 3;
    }
  };

  const page_size = getPageSize(width);

  return (
    <>
      <JournalComponentTitle>Все выпуски</JournalComponentTitle>
      <JournalList
        page={page}
        page_size={page_size}
        currentJournalId={currentJournalId}
        onJournalSelect={onJournalSelect}
      />
    </>
  );
};
