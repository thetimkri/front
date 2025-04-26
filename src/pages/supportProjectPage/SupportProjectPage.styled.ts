import { colors } from '@/shared/constants/colors';
import {
  H1,
  H1_mob,
  H1_tab,
  TextBigger_desk,
  TextLarge_desk,
  TextLarge_tab,
  TextSmalled_mob,
  TitleBig_tab,
  TitleLarge_desk,
} from '@/shared/constants/typography';
import styled from 'styled-components';

export const StyledSupportPage = styled.div`
  display: flex;
  align-items: self-start;
  gap: 24px;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const StyledContentWrapper = styled.div`
  max-width: 792px;
  flex: 1;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const StyledTitleSupportProject = styled.h1`
  margin-bottom: 40px;
  ${H1};

  @media screen and (max-width: 768px) {
    ${H1_tab};
  }

  @media screen and (max-width: 560px) {
    ${H1_mob};
    margin-bottom: 32px;
  }
`;

export const StyledAppealSupportProject = styled.h2`
  ${TitleLarge_desk};
  margin-bottom: 33px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 560px) {
    ${TitleBig_tab};
    margin-bottom: 16px;
  }
`;

export const StyledTextSupportProject = styled.p`
  width: 100%;
  max-width: 1034px;
  margin-bottom: 20px;
  line-height: 130%;
  ${TextLarge_desk};

  @media screen and (max-width: 1280px) {
    ${TextBigger_desk};
    margin-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 6px;
    ${TextLarge_tab};
  }

  @media screen and (max-width: 560px) {
    ${TextSmalled_mob};
    color: ${colors.basic};
  }
`;

export const StyledTreeSupportProject = styled.div`
  flex: 0 0 50%;
  @media screen and (max-width: 1020px) {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
`;
