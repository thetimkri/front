import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import {
  TextLarge_tab,
  TextMedium_desk,
  TextMedium_mob,
  TextMedium_tab,
  TextSmall_mob,
} from '@/shared/constants/typography';
import { NavLink } from 'react-router-dom';

const StyledFeedBackSliderCard = styled.article`
  background: ${MainTheme.colors.bgCard};
  padding: 53px 28px;
  border-radius: 16px;
  height: 244px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 210px;
    padding: 36px 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    height: 200px;
    padding: 31px 28px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    height: 168px;
    padding: 11px 28px;
    ${TextMedium_mob};

    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 156px;
    padding: 18px 0 0 29px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const StyledFeedBackSliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 12px;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    gap: 19px;
  }
`;

const StyledFeedBackSliderDescr = styled.div`
  ${TextLarge_tab};
  line-height: 130%;

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextMedium_mob};
  }
`;

const StyledFeedBackSliderLink = styled(NavLink)`
  ${TextMedium_desk};
  display: inline;
  color: ${MainTheme.colors.accent};
  padding-bottom: 4px;
  border-bottom: 2px dotted ${MainTheme.colors.accent};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
  }
`;

export {
  StyledFeedBackSliderCard,
  StyledFeedBackSliderDescr,
  StyledFeedBackSliderLink,
  StyledFeedBackSliderWrap,
};
