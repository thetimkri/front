import styled from 'styled-components';
import {
  TextBig_desk,
  TextLarge_desk,
  TextLarge_tab,
  TextMedium_tab,
  TextSmall_mob,
} from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';
export const ContactsListWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 93px 100px;

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    padding: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding: 12px;
  }
`;

export const ContactsItems = styled.ul`
  list-style: none;
  width: 100%;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    gap: 16px;
  }
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 12px;

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    column-gap: 6px;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      margin-bottom: 0;
    }
  }
`;

export const ContactsItemLink = styled.p`
  ${TextBig_desk};
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextMedium_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${TextSmall_mob};
  }
`;

export const IconWrapper = styled.div`
  svg {
    @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const ContactsItemWrapper = styled.a``;

export const ContactsItemText = styled.p`
  ${TextLarge_desk};
  color: ${colors.basic};

  @media (max-width: ${MainTheme.mediaWidth.smallDesktop}) {
    ${TextLarge_tab};
  }
`;
