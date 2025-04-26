import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs';
import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel';
import { page } from '@/shared/constants/navigation/page';
import {
  FormContainer,
  FormParagraph,
  FormSection,
  FormTitle,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled.ts';

export const BecomePartnerPageTextSection = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Поддержать проект', url: page.support },
    { name: 'Стать партнером', url: page.becomePartner },
  ];

  return (
    <FormSection>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <SectionTitle title="Стать партнёром" />
      <FormContainer>
        <FormTitle>Дорогие друзья!</FormTitle>
        <FormParagraph>
          Каждая добрая история прорастает в&nbsp;наших сердцах семенами добрых поступков
          и&nbsp;распускается цветами добрых дел.
        </FormParagraph>
        <FormParagraph>
          Так пусть&nbsp;же сад &laquo;Новостей добрых деяний&raquo; будет пышным
          и&nbsp;плодоносным, ваши истории, активность и&nbsp;ваше участие&nbsp;&mdash; это&nbsp;то,
          что поможет нашему проекту процветать.
        </FormParagraph>
        <FormParagraph>
          Поддержите наш проект, и&nbsp;изменим восприятие новостей вместе!
        </FormParagraph>
      </FormContainer>
    </FormSection>
  );
};
