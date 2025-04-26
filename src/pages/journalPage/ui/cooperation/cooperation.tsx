import {
  CooperationBtnWrap,
  CooperationContainer,
  CooperationContentWrapper,
  CooperationDescription,
  CooperationImg,
  CooperationTextWrap,
} from '@/pages/journalPage/ui/cooperation/cooperation.styled.ts';
import { page } from '@/shared/constants/navigation/page.ts';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import CooperationImage from '@/assets/images/journalPage/cooperation.webp';
import { JournalComponentTitle } from '@/pages/journalPage/journalPage.styled.ts';

export const Cooperation = () => {
  return (
    <>
      <JournalComponentTitle>Сотрудничество</JournalComponentTitle>
      <CooperationContainer>
        <CooperationContentWrapper>
          <CooperationTextWrap>
            <CooperationDescription>
              Если вы&nbsp;работаете в&nbsp;социальной сфере, ежедневно взаимодействуете
              с&nbsp;людьми, поддерживаете благотворительность, а&nbsp;может у&nbsp;вас есть своё
              дело, то&nbsp;мы&nbsp;приглашаем вас к&nbsp;сотрудничеству!
            </CooperationDescription>
            <CooperationDescription>
              1. Наши редакторы подготовят статью о&nbsp;вас и&nbsp;ваших добрых деяниях, красиво
              разместят её&nbsp;в&nbsp;электронной версии журнала и&nbsp;отправят макет вам.
            </CooperationDescription>
            <CooperationDescription>
              2. А&nbsp;вы, в&nbsp;свою очередь, сможете распечатать любое количество экземпляров
              со&nbsp;статьёй о&nbsp;вас и&nbsp;распространить их&nbsp;в&nbsp;своей организации или
              среди своих клиентов.
            </CooperationDescription>
            <CooperationDescription>
              Таким образом, добро умножится! Чем больше людей узнают о&nbsp;благих поступках, тем
              выше вероятность вдохновения на&nbsp;новые бескорыстные дела.
            </CooperationDescription>
          </CooperationTextWrap>
          <CooperationBtnWrap>
            <PrimaryButton link={page.becomePartner} label="Стать партнёром" $btnType="colored" />
          </CooperationBtnWrap>
        </CooperationContentWrapper>
        <CooperationImg src={CooperationImage} alt={''} />
      </CooperationContainer>
    </>
  );
};
