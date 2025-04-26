import { useLocation } from 'react-router-dom';
import { VKShareButton, OKShareButton, TelegramShareButton } from 'react-share';

import Copy from '@/assets/icons/Copy.svg';
import OK from '@/assets/icons/OK.svg';
import Telegram from '@/assets/icons/Telegram.svg';
import VK from '@/assets/icons/VK.svg';

import {
  ShareButtonsContainer,
  ShareButtonsSVGContainer,
  ShareButtonsTitle,
  ShareButtonsCopyWrap,
  ShareMessage,
  ShareButtonsCopyButton,
} from './ShareButtons.styled';
import { useState } from 'react';

export const ShareButtons = () => {
  const location = useLocation();
  const shareUrl = `${window.location.origin}${location.pathname}`;
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <ShareButtonsContainer>
      <ShareButtonsTitle>Поделиться</ShareButtonsTitle>
      <ShareButtonsSVGContainer>
        <VKShareButton url={shareUrl}>
          <VK aria-label="Поделиться в VK" />
        </VKShareButton>
        <OKShareButton url={shareUrl}>
          <OK aria-label="Поделиться в OK" />
        </OKShareButton>
        <TelegramShareButton url={shareUrl}>
          <Telegram aria-label="Поделиться в Telegram" />
        </TelegramShareButton>
        <ShareButtonsCopyWrap onClick={copyToClipboard}>
          {showNotification ? (
            <ShareButtonsCopyButton type="button">
              <ShareMessage>Скопировано</ShareMessage>
              <Copy aria-label="Копировать ссылку" />
            </ShareButtonsCopyButton>
          ) : (
            <ShareButtonsCopyButton type="button">
              <ShareMessage>Скопировать</ShareMessage>
              <Copy aria-label="Копировать ссылку" />
            </ShareButtonsCopyButton>
          )}
        </ShareButtonsCopyWrap>
      </ShareButtonsSVGContainer>
    </ShareButtonsContainer>
  );
};
