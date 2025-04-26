import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';

export const contactsApi = {
  getContactsData: async ({ signal }: { signal: AbortSignal }) => {
    const res = await fetch(`${API_BASE_URL}pages/contacts/`, {
      signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await (res.json() as Promise<ContactsDto>);
  },
};
