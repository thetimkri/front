import { colors } from '@/shared/constants/colors';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { TitleLarge_desk, TitleLarge_tab, TitleMedium_mob } from '@/shared/constants/typography';
import styled from 'styled-components';

export const SectionForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BranchContainer = styled.div`
  padding-top: 20px;
  justify-content: space-between;
  display: flex;

  >svg: first-of-type {
    transform: rotate(90deg);
  }

  >svg: last-of-type {
    transform: rotate(180deg);
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding-top: 16px;
    > svg {
      width: 56px;
      height: 56px;
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    padding-top: 21px;
    > svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 30px;
  width: 904px;
  background-color: ${colors.white};

  @media (max-width: 988px) {
    width: 100%;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    padding: 0 16px;
    gap: 24px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    gap: 29px;
  }

  > ${BranchContainer}:last-of-type {
    padding-top: 0px;
    padding-bottom: 20px;

    >svg: first-of-type {
      transform: rotate(0deg);
    }

    >svg: last-of-type {
      transform: rotate(270deg);
    }
  }
`;

export const FormTitle = styled.p`
  ${TitleLarge_desk}
  line-height: 140%;
  text-align: center;

  @media (max-width: ${MainTheme.mediaWidth.fontMobBreakPoint}) {
    ${TitleLarge_tab}
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    ${TitleMedium_mob}
  }
`;
