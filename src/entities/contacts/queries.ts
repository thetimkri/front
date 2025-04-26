import { contactsApi } from '@/shared/api/hooks/contacts/queries/apiContacts.ts';

const contactsQueryKey = 'contacts';

export const getContactsQuery = () => {
  return {
    queryKey: [contactsQueryKey],
    queryFn: ({ signal }: { signal: AbortSignal }) => contactsApi.getContactsData({ signal }),
  };
};
