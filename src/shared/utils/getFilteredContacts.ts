import { getContactLink } from '@/shared/utils/getContactLink.ts';
import { IconMap } from '@/shared/UiKit/Contacts/Contacts.const.tsx';
import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';

type ContactItem = {
  key: keyof ContactsDto;
  value: string;
  icon: JSX.Element;
  text: string;
  link: string;
};

const isValidContact = (entry: [string, string]): entry is [keyof ContactsDto, string] => {
  const [key, value] = entry;
  return key in IconMap && Boolean(value);
};

export const getFilteredContacts = (contactsData: ContactsDto | undefined): ContactItem[] => {
  if (!contactsData) return [];

  return Object.entries(contactsData)
    .filter(isValidContact)
    .map((entry) => {
      const [key, value] = entry;
      const iconMapItem = IconMap[key];

      return {
        key,
        value,
        icon: iconMapItem.icon,
        text: iconMapItem.text,
        link: getContactLink(key, value),
      };
    });
};
