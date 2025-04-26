import Email from '@/assets/icons/Mail.svg';
import Phone from '@/assets/icons/PhoneContacts.svg';
import Telegram from '@/assets/icons/Telegram.svg';
import VK from '@/assets/icons/VK.svg';
import OK from '@/assets/icons/OK.svg';
import Dzen from '@/assets/icons/Dzen.svg';
import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';

type IconMapItem = {
  icon: JSX.Element;
  text: string;
};

export const IconMap: Record<keyof ContactsDto, IconMapItem> = {
  email: { icon: <Email />, text: 'Почта' },
  phone: { icon: <Phone />, text: 'Телефон' },
  telegram: { icon: <Telegram />, text: 'Телеграм' },
  vk: { icon: <VK />, text: 'ВКонтакте' },
  odnoklassniki: { icon: <OK />, text: 'Одноклассники' },
  dzen: { icon: <Dzen />, text: 'Дзен' },
} as const;
