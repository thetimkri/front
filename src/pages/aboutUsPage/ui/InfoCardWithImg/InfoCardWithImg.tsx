import { FC } from 'react';
import {
  StyledInfoCardWithImgImage,
  StyledInfoCardWithImgWrapper,
  borderRadiusStyles,
} from './InfoCardWithImg.styled';

interface InfoCardWithImgProps {
  image: string;
  borderRadiusType: 'roundedLarge' | 'roundedSmall';
}

export const InfoCardWithImg: FC<InfoCardWithImgProps> = ({ image, borderRadiusType }) => {
  const borderRadius = borderRadiusStyles[borderRadiusType];

  return (
    <StyledInfoCardWithImgWrapper $borderRadius={borderRadius}>
      <StyledInfoCardWithImgImage src={image} alt="Card" />
    </StyledInfoCardWithImgWrapper>
  );
};
