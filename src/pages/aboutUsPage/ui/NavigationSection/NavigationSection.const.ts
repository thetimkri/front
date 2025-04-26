import Img1 from '@/assets/images/aboutUs/navCard1.webp';
import Img2 from '@/assets/images/aboutUs/navCard2.webp';
import Img3 from '@/assets/images/aboutUs/navCard3.webp';
import { page } from '@/shared/constants/navigation/page';

export const CARDS_DATA = [
  {
    id: 1,
    title: 'Наша команда',
    image: Img1,
    link: page.ourTeam,
  },
  {
    id: 2,
    title: 'Наши новости',
    image: Img2,
    link: page.news,
  },
  {
    id: 3,
    title: 'Ваши отзывы',
    image: Img3,
    link: page.reviews,
  },
];
