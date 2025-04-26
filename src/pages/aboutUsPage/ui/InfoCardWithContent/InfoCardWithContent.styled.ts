import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import {
  ExoAccent,
  TextLarge_desk,
  TextLarge_mob,
  TextSmall_mob,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const borderRadiusStyles = {
  roundedLarge: '156px 156px 8px 156px',
  roundedSmall: '16px',
};

export const StyledInfoCardWithContentWrapper = styled.div<{
  $borderRadius: string;
  $circleColor: string;
}>`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 40px;
  border: 2px dashed ${(props) => props.$circleColor};
  border-radius: ${(props) => props.$borderRadius};

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding: 10px;
    gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 17px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    flex-direction: column;
    border-bottom-left-radius: unset;
  }
`;

export const StyledInfoCardWithContentCircle = styled.div<{
  $circleColor: string;
  $hoverColor: string;
  $borderRadiusType: 'roundedLarge' | 'roundedSmall';
}>`
  min-width: 276px;
  min-height: 276px;
  border-radius: ${(props) => (props.$borderRadiusType === 'roundedLarge' ? '50%' : '16px')};
  background-color: ${(props) => props.$circleColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  ${ExoAccent};
  transition: background-color 0.3s ease;

  ${StyledInfoCardWithContentWrapper}:hover & {
    background-color: ${(props) => props.$hoverColor};
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    font-size: 56px;
    min-height: unset;
    min-width: unset;
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    min-width: 180px;
    min-height: 180px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    font-size: 52px;
    min-width: 168px;
    min-height: 168px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    font-size: 32px;
    min-width: 116px;
    min-height: 116px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    font-size: 54px;
    min-height: 280px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 359px) {
    min-height: 230px;
    min-width: 230px;
  }
`;

export const StyledInfoCardWithContentText = styled.p`
    ${TextLarge_desk};
    font-size: 20px;

    @media (max-width: ${MainTheme.mediaWidth.largeDesktop}) {
        ${TextSmall_mob};
    }

    @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
        ${TextSmall_mob};
        font-size: 10px;
    }

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
        ${TextLarge_mob};
    }

}
`;
