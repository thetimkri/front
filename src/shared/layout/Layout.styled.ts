import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const StyledMainContainer = styled.main`
  max-width: 1700px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin: 0 auto;
  padding-inline: 40px;
  background-color: ${colors.bg};

  @media screen and (max-width: ${(props) => props.theme.mediaWidth.mDesktop}) {
    max-width: 1060px;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaWidth.smallDesktop}) {
    width: 100%;
    margin: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
    padding-inline: 40px;
    gap: 52px;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaWidth.sMobile}) {
    padding-inline: 24px;
    gap: 32px;
  }
`;
