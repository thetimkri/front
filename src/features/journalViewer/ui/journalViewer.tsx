import { useJournalViewer } from '@/features/journalViewer/model/useJournalViewer.ts';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import { ErrorPage } from '@/pages';
import { JournalViewerContainer } from '@/features/journalViewer/ui/journalViewer.styled.ts';
import React from 'react';

interface JournalViewerProps {
  id: number;
}

const JournalViewer: React.FC<JournalViewerProps> = ({ id }) => {
  const { data, isLoading, isError } = useJournalViewer(id);

  if (isLoading) {
    return <Preloader pageLoad />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!data) {
    return <div>Журнал не найден</div>;
  }

  return (
    <JournalViewerContainer>
      <iframe
        src={data.link}
        className="w-full h-full border-none"
        title={data.name}
        allowFullScreen={true}
      />
    </JournalViewerContainer>
  );
};

export default JournalViewer;
