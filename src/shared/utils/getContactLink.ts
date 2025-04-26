import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';

export const getContactLink = (key: keyof ContactsDto, value: string) => {
  switch (key) {
    case 'email':
      return `mailto:${value}`;
    case 'phone':
      return `tel:${value}`;
    default:
      return value;
  }
};
