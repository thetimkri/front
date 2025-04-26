import {
  JournalContactsItem,
  JournalContactsLink,
  JournalContactsList,
  JournalContactsTitle,
  JournalContainer,
  JournalContentDescription,
  JournalContentTitle,
  JournalContentWrapper,
  JournalImg,
  Journalsection,
} from '@/pages/journalPage/ui/journalNews/journalNews.styled.ts';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle.tsx';
import JournalViewer from '@/features/journalViewer/ui/journalViewer.tsx';
import { useJournalViewer } from '@/features/journalViewer/model/useJournalViewer.ts';
import Preloader from '@/shared/UiKit/Preloader/Preloader.tsx';
import { ErrorPage } from '@/pages';
import React, { useMemo } from 'react';
import { truncateText } from '@/shared/utils/truncate.ts';
import { useContactsList } from '@/features/contactsList/model/useContactsList.ts';
import { getFilteredContacts } from '@/shared/utils/getFilteredContacts.ts';

interface JournalNewsProps {
  journalId?: number | undefined;
}

export const JournalNews = ({ journalId }: JournalNewsProps) => {
  const { data: contacts } = useContactsList();
  const { data, isLoading, isError } = useJournalViewer(journalId);
  const { socialContacts } = useMemo(() => {
    const filteredContacts = getFilteredContacts(contacts);
    return {
      socialContacts: filteredContacts.filter((contact) =>
        ['vk', 'telegram', 'dzen', 'odnoklassniki'].includes(contact.key)
      ),
    };
  }, [contacts]);

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
    <>
      <PageTitle titleText="Журнал" />
      <Journalsection>
        <JournalContainer>
          <JournalImg src={data.cover_image} alt={data.name} />
          <JournalContentWrapper>
            <JournalContentTitle>{truncateText(data.name, 50)}</JournalContentTitle>
            <JournalContentDescription>
              {truncateText(data.description, 600)}
            </JournalContentDescription>
            <div>
              <JournalContactsTitle>Мы в социальных сетях</JournalContactsTitle>
              <JournalContactsList>
                {socialContacts.map((contact) => {
                  return (
                    <JournalContactsItem key={contact.key}>
                      <JournalContactsLink
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={contact.text}
                      >
                        {contact.icon}
                      </JournalContactsLink>
                    </JournalContactsItem>
                  );
                })}
              </JournalContactsList>
            </div>
          </JournalContentWrapper>
        </JournalContainer>
        {journalId && <JournalViewer id={journalId} />}
      </Journalsection>
    </>
  );
};
