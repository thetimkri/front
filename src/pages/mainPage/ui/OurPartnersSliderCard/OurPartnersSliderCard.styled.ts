import styled from 'styled-components';
import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { Link } from 'react-router-dom';

export const StyledOurPartnersSliderCard = styled(Link)`
  background: ${MainTheme.colors.bgCard};
  padding: 20px;
  border-radius: 16px;
  height: 244px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    height: 90%;
    filter: grayscale(50%);
    transition: filter 0.3s ease;
    object-fit: scale-down;

    &:hover {
      filter: grayscale(0%) contrast(150%);
    }
  }

  @media (max-width: ${MainTheme.mediaWidth.mDesktop}) {
    height: 138px;
  }

  @media (max-width: ${MainTheme.mediaWidth.fontTabBreakPoint}) {
    height: 148px;
  }

  @media (max-width: 767px) {
    height: 210px;
  }

  @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
    height: 154px;
  }
`;
