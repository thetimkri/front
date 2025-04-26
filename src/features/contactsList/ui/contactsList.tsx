import {
  ContactsItem,
  ContactsItemLink,
  ContactsItems,
  ContactsItemText,
  ContactsItemWrapper,
  ContactsListWrapper,
  IconWrapper,
} from '@/features/contactsList/ui/contactsList.styled.ts';
import { ContactsIconMap } from '@/features/contactsList/ui/contactsList.const.tsx';
import { getContactLink } from '@/shared/utils/getContactLink.ts';
import React from 'react';
import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';
import { formatPhoneNumber } from '@/shared/utils/formatPhoneNumber.ts';

interface ContactsListProps {
  data: ContactsDto;
}

const ContactsList: React.FC<ContactsListProps> = ({ data }) => {
  const filteredContacts = Object.entries(data).filter(([key, value]) => {
    return value !== null && value !== '' && key in ContactsIconMap;
  });

  return (
    <ContactsListWrapper>
      <ContactsItems>
        {filteredContacts.map(([key, value]) => {
          const contactKey = key as keyof ContactsDto;
          const iconMapItem = ContactsIconMap[contactKey];

          const displayValue = contactKey === 'phone' ? formatPhoneNumber(value) : value;

          return (
            <ContactsItem key={key}>
              <IconWrapper>{iconMapItem.icon}</IconWrapper>
              <ContactsItemWrapper href={getContactLink(contactKey, value)} target="_blank">
                <ContactsItemText>{iconMapItem.text}</ContactsItemText>
                <ContactsItemLink>{displayValue}</ContactsItemLink>
              </ContactsItemWrapper>
            </ContactsItem>
          );
        })}
      </ContactsItems>
    </ContactsListWrapper>
  );
};

export default ContactsList;
