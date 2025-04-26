import React, { useMemo } from 'react';
import { useContactsList } from '@/features/contactsList/model/useContactsList';
import { getFilteredContacts } from '@/shared/utils/getFilteredContacts';
import {
  ContactsListItem,
  ContactItemWrapper,
  ContactLink,
  SocialLinks,
  SocialItem,
  SocialIcon,
  Thanks,
  ContactListTitle,
  ContactList,
  ContactsWrapper,
} from './Contacts.styled.ts';
import { formatPhoneNumber } from '@/shared/utils/formatPhoneNumber.ts';

const Contacts = () => {
  const { data } = useContactsList();

  const { socialContacts, contactInfo } = useMemo(() => {
    const contacts = getFilteredContacts(data);
    return {
      socialContacts: contacts.filter((contact) =>
        ['vk', 'telegram', 'dzen', 'odnoklassniki'].includes(contact.key)
      ),
      contactInfo: contacts.filter((contact) => ['phone', 'email'].includes(contact.key)),
    };
  }, [data]);

  const getDisplayValue = (contact: { key: string; value: string }) => {
    if (contact.key === 'phone') {
      return formatPhoneNumber(contact.value);
    }
    return contact.value;
  };

  return (
    <ContactsWrapper>
      <ContactListTitle>Контакты</ContactListTitle>
      <ContactList aria-label="Список контактов">
        {contactInfo.map((contact) => (
          <ContactsListItem key={contact.key}>
            <ContactItemWrapper>
              <ContactLink href={contact.link} target="_blank" rel="noopener noreferrer">
                {getDisplayValue(contact)}
              </ContactLink>
            </ContactItemWrapper>
          </ContactsListItem>
        ))}
      </ContactList>

      <ContactListTitle>Мы в социальных сетях</ContactListTitle>
      <SocialLinks aria-label="Социальные сети">
        {socialContacts.map((contact) => (
          <SocialItem key={contact.key}>
            <SocialIcon
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.text}
            >
              {contact.icon}
            </SocialIcon>
          </SocialItem>
        ))}
      </SocialLinks>
      <Thanks>Благодарим, что&nbsp;Вы с&nbsp;нами!</Thanks>
    </ContactsWrapper>
  );
};

export default Contacts;
