import InfoImg1 from '@/assets/images/aboutUs/1.png';
import InfoImg2 from '@/assets/images/aboutUs/2.png';
import InfoImg3 from '@/assets/images/aboutUs/3.png';
import InfoImg4 from '@/assets/images/aboutUs/4.png';
import { AboutUsData } from '@/shared/api/hooks/aboutUs/types.ts';

type BorderRadiusType = 'roundedSmall' | 'roundedLarge';

export const INFO_CARDS_DATA: {
  type: 'content' | 'image';
  borderRadiusType: BorderRadiusType;
  circleNumber?: string;
  circleColor?: string;
  hoverColor?: string;
  contentText?: string;
  image?: string;
}[] = [
  {
    type: 'content',
    borderRadiusType: 'roundedSmall',
    circleColor: 'rgba(110, 133, 75, 1)',
    hoverColor: 'rgba(147, 164, 122, 1)',
  },
  { type: 'image', borderRadiusType: 'roundedLarge', image: InfoImg1 },
  { type: 'image', borderRadiusType: 'roundedSmall', image: InfoImg2 },
  {
    type: 'content',
    borderRadiusType: 'roundedLarge',
    circleColor: 'rgba(184, 153, 53, 1)',
    hoverColor: 'rgba(174, 158, 107, 1)',
  },
  {
    type: 'content',
    borderRadiusType: 'roundedLarge',
    circleColor: 'rgba(164, 188, 66, 1)',
    hoverColor: 'rgba(172, 180, 140, 1)',
  },
  { type: 'image', borderRadiusType: 'roundedSmall', image: InfoImg3 },
  { type: 'image', borderRadiusType: 'roundedLarge', image: InfoImg4 },
  {
    type: 'content',
    borderRadiusType: 'roundedSmall',
    circleColor: 'rgba(211, 120, 63, 1)',
    hoverColor: 'rgba(200, 163, 140, 1)',
  },
];

export const mergeAboutUsData = (apiData: AboutUsData[]) => {
  let currentIndex = 0;

  return INFO_CARDS_DATA.map((card) => {
    if (card.type === 'content') {
      if (currentIndex < apiData.length) {
        const apiItem = apiData[currentIndex];
        currentIndex++;

        return {
          ...card,
          circleNumber: apiItem.number.toString(),
          contentText: apiItem.text,
        };
      }
    }
    return card;
  });
};
