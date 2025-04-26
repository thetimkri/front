import styled from 'styled-components';
import { ButtonSmall, TextBig_desk } from '@/shared/constants/typography';
import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const BreadcrumbsList = styled.ul`
  color: ${colors.grey};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  gap: 29px;
  margin-bottom: 12px;
  padding: 8px 0;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 9.4px 0;
    margin-bottom: 10px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${ButtonSmall};
    padding: 16px 0;
    margin-bottom: 6px;
    gap: 12px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    margin-bottom: 0px;
  }
`;

export const BreadcrumbsListItem = styled.li`
  position: relative;

  &:after {
    content: '/';
    position: absolute;
    margin-left: 10px;

    @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
      top: 0;
    }
    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      margin-left: 3px;
    }
  }

  &:last-child:after {
    content: '';
  }
`;

export const BreadcrumbsLink = styled.a`
  ${TextBig_desk};
  color: inherit;
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    ${ButtonSmall};
  }
`;
