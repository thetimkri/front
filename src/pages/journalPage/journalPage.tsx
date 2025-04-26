import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { page } from '@/shared/constants/navigation/page.ts';
import { JournalNews } from '@/pages/journalPage/ui/journalNews/journalNews.tsx';
import { Cooperation } from '@/pages/journalPage/ui/cooperation/cooperation.tsx';
import { AllJournals } from '@/pages/journalPage/ui/allJournals/allJournals.tsx';
import { useJournalList } from '@/features/journalList/model/useJournalList.ts';
import { useEffect, useState } from 'react';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';

export const JournalPage = () => {
  const [journalId, setJournalId] = useState<number | null>(null);

  const { data, isLoading } = useJournalList(1, 1);

  useEffect(() => {
    if (!isLoading && data && data.results.length > 0) {
      setJournalId(data.results[0].id);
    }
  }, [data, isLoading]);

  const handleJournalSelect = (selectedId: number) => {
    setJournalId(selectedId);
  };

  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Журнал', url: '/journal' },
  ];

  if (isLoading) {
    return <Preloader pageLoad={true} />;
  }

  if (!journalId) {
    return <h1>Пока нет ни одного журнала</h1>;
  }

  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <JournalNews journalId={journalId || undefined} />
      <section>
        <AllJournals currentJournalId={journalId} onJournalSelect={handleJournalSelect} />
      </section>
      <section>
        <Cooperation />
      </section>
    </div>
  );
};
