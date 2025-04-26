import { useMemo } from 'react';

import { SocialLinks, SocialItem, SocialIcon } from './SocialMediaLinks.styled.ts';
import { SocialIconMap } from './SocialMediaLinks.const.tsx';

type SocialMediaLinksDto = {
  website: string | null;
  vkontakte: string | null;
  telegram: string | null;
  odnoklasniki: string | null;
};

interface SocialMediaLinksProps {
  socialLinks: SocialMediaLinksDto;
}

type SocialMediaLinkItem = {
  key: keyof SocialMediaLinksDto;
  value: string;
  icon: JSX.Element;
  text: string;
  link: string;
};

const isValidContact = (
  entry: [string, string | null]
): entry is [keyof SocialMediaLinksDto, string] => {
  const [key, value] = entry;
  return key in SocialIconMap && typeof value === 'string' && value.trim() !== '';
};

const getFilteredContacts = (
  contactsData: SocialMediaLinksDto | undefined
): SocialMediaLinkItem[] => {
  if (!contactsData) return [];

  return Object.entries(contactsData)
    .filter(isValidContact)
    .map(([key, value]) => {
      const iconMapItem = SocialIconMap[key];

      return {
        key,
        value,
        icon: iconMapItem.icon,
        text: iconMapItem.text,
        link: value,
      };
    });
};

export const SocialMediaLinks = ({ socialLinks }: SocialMediaLinksProps) => {
  const socialContacts = useMemo(() => getFilteredContacts(socialLinks), [socialLinks]);

  if (socialContacts.length === 0) return null;

  return (
    <SocialLinks>
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
  );
};
