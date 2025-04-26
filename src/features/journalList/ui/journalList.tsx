import { useJournalList } from '@/features/journalList/model/useJournalList.ts';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import { ErrorPage } from '@/pages';
import React, { useEffect, useRef, useMemo } from 'react';
import {
  JournalCard,
  JournalGrid,
  JournalImg,
  JournalInfo,
} from '@/features/journalList/ui/journalList.styled.ts';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { Pagination } from '@/shared/UiKit/Pagination/Pagination.tsx';
import { smoothScrollToTop } from '@/shared/utils/scrollToTop.ts';

interface JournalListProps {
  page: number;
  page_size: number;
  currentJournalId: number | null;
  onJournalSelect: (id: number) => void;
}

const JournalList: React.FC<JournalListProps> = ({
  page,
  page_size,
  currentJournalId,
  onJournalSelect,
}) => {
  const { data, isLoading, isError } = useJournalList(page, page_size);
  const needsScrolling = useRef(false);
  const selectedJournalId = useRef<number | null>(null);

  const sortedJournals = useMemo(() => {
    if (!data || !data.results) return [];

    return [...data.results].sort((a, b) => b.id - a.id);
  }, [data]);

  useEffect(() => {
    if (needsScrolling.current && currentJournalId === selectedJournalId.current) {
      setTimeout(() => {
        smoothScrollToTop();
      }, 50);

      needsScrolling.current = false;
    }
  }, [currentJournalId]);

  if (isLoading) {
    return <Preloader pageLoad={true} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!data || data.results.length === 0) {
    return <div>Журналы не найдены</div>;
  }

  return (
    <>
      <JournalGrid>
        {sortedJournals.map((journal) => {
          const handleClick = () => {
            if (journal.id !== currentJournalId) {
              needsScrolling.current = true;
              selectedJournalId.current = journal.id;
              onJournalSelect(journal.id);
            }
          };

          return (
            <JournalCard key={journal.id}>
              <JournalImg src={journal.cover_image} alt={journal.name} />
              <JournalInfo>
                {`Выпуск №${journal.id}`}/{new Date(journal.release_date).getFullYear()}{' '}
                <PrimaryButton
                  label={journal.id === currentJournalId ? 'Открытый журнал' : 'Читать журнал'}
                  $btnType={journal.id === currentJournalId ? 'pressed' : 'transparent'}
                  onClick={handleClick}
                />
              </JournalInfo>
            </JournalCard>
          );
        })}
      </JournalGrid>
      {data.count > page_size && (
        <Pagination
          count={data.count}
          itemsPerPage={page_size}
          labels={{
            prev: 'Назад',
            next: 'Вперёд',
            dots: '. . .',
          }}
        />
      )}
    </>
  );
};

export default JournalList;
