import React from 'react';
import {
  InternalServerErrorContainer,
  InternalServerErrorWrap,
  InternalServerErrorTitle,
  Title,
  Paragraph,
  List,
  ListItem,
  InternalServerErrorImage,
  Link,
} from '@/pages/internalServerError500/InternalServerError.styled';
import boyImg from '@/assets/images/internalSeverError500/boyImg.png';
import { MAIN_PAGE_URL } from '@/shared/constants/navigation';

const InternalServerError = () => {
  return (
    <InternalServerErrorContainer>
      <InternalServerErrorWrap>
        <InternalServerErrorTitle>500</InternalServerErrorTitle>
        <Title>Ой-ой! Даже серверы порой нуждаются в&nbsp;добром деле 😅</Title>
        <Paragraph>Мы&nbsp;уже отправили отряд добрых айтишников ему на&nbsp;помощь.</Paragraph>
        <List>
          <ListItem>
            Попробуйте обновить страницу или <Link href={MAIN_PAGE_URL}>вернуться на главную</Link>
          </ListItem>
          <ListItem>
            Сделать что‑то хорошее&nbsp;&mdash; улыбнуться соседу, помочь другу или просто
            поделиться теплом. Добрые дела всегда спасают, даже серверы!
          </ListItem>
        </List>
        <Paragraph>
          Скоро всё наладится, и&nbsp;добрые новости снова будут радовать вас. Спасибо
          за&nbsp;терпение и&nbsp;ваше доброе сердце! 😊
        </Paragraph>
      </InternalServerErrorWrap>
      <InternalServerErrorImage src={boyImg} />
    </InternalServerErrorContainer>
  );
};

export default InternalServerError;
