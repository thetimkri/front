import Telegram from '@/assets/icons/Telegram.svg';
import VK from '@/assets/icons/VK.svg';
import OK from '@/assets/icons/OK.svg';
import Web from '@/assets/icons/Website.svg';

type SocialLinksDto = {
  website: string | null;
  vkontakte: string | null;
  telegram: string | null;
  odnoklasniki: string | null;
};

type IconMapItem = {
  icon: JSX.Element;
  text: string;
};

export const SocialIconMap: Record<keyof SocialLinksDto, IconMapItem> = {
  telegram: { icon: <Telegram />, text: 'Телеграм' },
  vkontakte: { icon: <VK />, text: 'ВКонтакте' },
  odnoklasniki: { icon: <OK />, text: 'Одноклассники' },
  website: { icon: <Web />, text: 'Сайт' },
} as const;
