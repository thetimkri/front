import React, { useEffect, useState } from 'react';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import {
  ButtonWrapper,
  Content,
  Message,
  SubmitModalImg,
  SubmitModalOverlay,
} from '@/shared/UiKit/Modals/SubmitModal/SubmitModal.styled.ts';

import Deer from '@/assets/images/Logo.webp';
import { ScrollToPositionOnMount } from '@/shared/utils/scrollToTop.ts';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const SubmitModal = ({ isOpen, onClose, message }: SubmitModalProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <>
      <ScrollToPositionOnMount top={0} />
      <SubmitModalOverlay onClick={handleOverlayClick} $isClosing={!isOpen}>
        <Content>
          <SubmitModalImg src={Deer} alt="Deer" />
          <Message>{message}</Message>
          <ButtonWrapper>
            <PrimaryButton label="Закрыть" $btnType="colored" onClick={handleClose} />
          </ButtonWrapper>
        </Content>
      </SubmitModalOverlay>
    </>
  );
};
