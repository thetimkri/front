import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { H2_tab, H3_tab } from '@/shared/constants/typography';
import { NavLink } from 'react-router-dom';

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const SectionLinkBtn = styled(NavLink)`
  ${H2_tab};
  padding: 5px 0;
  color: ${MainTheme.colors.accent};

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${H3_tab};
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: none;
  }
`;

const StyledBtnContainer = styled.div`
  display: none;
  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    display: flex;
    margin-top: 24px;
  }
`;

export { SectionWrapper, SectionLinkBtn, StyledBtnContainer };
