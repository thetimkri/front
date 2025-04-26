import { FC } from 'react';
import {
  StyledInfoCardWithContentCircle,
  StyledInfoCardWithContentText,
  StyledInfoCardWithContentWrapper,
  borderRadiusStyles,
} from './InfoCardWithContent.styled';

type TInfoCardWithContentProps = {
  borderRadiusType: 'roundedLarge' | 'roundedSmall';
  circleText: string;
  circleColor: string;
  contentText: string;
  hoverColor?: string;
};

export const InfoCardWithContent: FC<TInfoCardWithContentProps> = ({
  borderRadiusType,
  circleText,
  circleColor,
  contentText,
  hoverColor,
}) => {
  const borderRadius = borderRadiusStyles[borderRadiusType];

  return (
    <StyledInfoCardWithContentWrapper $borderRadius={borderRadius} $circleColor={circleColor}>
      <StyledInfoCardWithContentCircle
        $circleColor={circleColor}
        $hoverColor={hoverColor || circleColor}
        $borderRadiusType={borderRadiusType}
      >
        {circleText}
      </StyledInfoCardWithContentCircle>
      <StyledInfoCardWithContentText>{contentText}</StyledInfoCardWithContentText>
    </StyledInfoCardWithContentWrapper>
  );
};
