import styled from 'styled-components';
import ImgTree from '@/assets/images/support-page/tree.webp';

export const TreeWithButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageChapter = styled.div`
  min-width: 572px;
  max-width: 572px;
  height: 572px;
  background-image: url(${ImgTree});
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (max-width: 1280px) {
    min-width: 562px;
    max-width: 562px;
    height: 571px;
  }

  @media screen and (max-width: 768px) {
    min-width: 310px;
    width: 100%;
  }

  @media screen and (max-width: 360px) {
    height: 314px;
  }
`;

export const StyledButtonsWrapper = styled.div``;

export const StyledAloneButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  @media screen and (max-width: 360px) {
    margin: 11px 0 34px;
  }
`;

export const StyledTwoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 360px) {
    margin: 0 0 34px;
  }
`;
