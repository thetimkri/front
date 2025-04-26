import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel.ts';
import { page } from '@/shared/constants/navigation/page.ts';
import {
  FormContainer,
  FormParagraph,
  FormSection,
  FormTitle,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled.ts';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs.tsx';
import { SectionTitle } from '@/shared/UiKit/SectionTitle/SectionTitle.tsx';

const JoinDirectoryFormPageTextSection = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Поддержать проект', url: page.support },
    { name: 'Добавиться в справочник', url: page.kindDirectory },
  ];

  return (
    <FormSection>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <SectionTitle title="Добавиться в справочник" />
      <FormContainer>
        <FormTitle>Дорогие друзья!</FormTitle>
        <FormParagraph>
          Каждая добрая история прорастает&nbsp;в&nbsp;наших сердцах семенами добрых поступков
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

export default JoinDirectoryFormPageTextSection;
