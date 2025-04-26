import Flower from '../Flower/Flower';
import {
  Container,
  PreloaderBackgroundBlue,
  PreloaderBackgroundGreen,
  PreloaderBackgroundYellow,
  PreloaderContainer,
} from './Preloader.styled';
import React from 'react';

type TPreloaderProps = {
  backgroundBlur?: boolean;
  pageLoad?: boolean;
};

const Preloader: React.FC<TPreloaderProps> = ({ backgroundBlur = true, pageLoad = false }) => {
  return (
    <PreloaderContainer $pageLoad={pageLoad}>
      <Container $pageLoad={pageLoad}>
        <Flower />
        {backgroundBlur && (
          <>
            <PreloaderBackgroundBlue />
            <PreloaderBackgroundGreen />
            <PreloaderBackgroundYellow />
          </>
        )}
      </Container>
    </PreloaderContainer>
  );
};

export default Preloader;
