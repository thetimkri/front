import VK from '@/assets/icons/VKContacts.svg';
import OK from '@/assets/icons/OKContacts.svg';
import Telegram from '@/assets/icons/TGContacts.svg';
import Dzen from '@/assets/icons/DZContacts.svg';
import Email from '@/assets/icons/Mail.svg';
import Phone from '@/assets/icons/PhoneContacts.svg';
import { ContactsDto } from '@/shared/api/hooks/contacts/types.ts';

export const ContactsIconMap: Record<keyof ContactsDto, { icon: JSX.Element; text: string }> = {
  email: { icon: <Email />, text: 'Почта' },
  phone: { icon: <Phone />, text: 'Телефон' },
  telegram: { icon: <Telegram />, text: 'Телеграм' },
  vk: { icon: <VK />, text: 'ВКонтакте' },
  odnoklassniki: { icon: <OK />, text: 'Одноклассники' },
  dzen: { icon: <Dzen />, text: 'Дзен' },
};
