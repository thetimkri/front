import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel.ts';
import { page } from '@/shared/constants/navigation/page.ts';
import { FormSection } from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled.ts';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs.tsx';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { PageTitle } from '@/shared/UiKit/PageTitle/PageTitle.tsx';
import {
  StyledAddBtn,
  StyledButtonContainer,
  StyledButtonLink,
  StyledKindDirectoryPageText,
  StyledKindDirectoryPageTextContainer,
  StyledTitleWrap,
} from '@/pages/kindDirectoryPage/kindDirectoryPage.styled.ts';
import React from 'react';

interface KindDirectoryPageTextSectionProps {
  isMobile?: boolean;
}

const KindDirectoryPageTextSection = ({ isMobile }: KindDirectoryPageTextSectionProps) => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Добрый справочник', url: page.kindDirectory },
  ];

  return (
    <FormSection>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems}></Breadcrumbs>
      <StyledTitleWrap>
        <PageTitle titleText="Добрый справочник" />
        <StyledButtonContainer>
          <PrimaryButton
            label="Добавиться в справочник"
            $btnType="transparent"
            link={page.kindDirectoryForm}
          />
        </StyledButtonContainer>
        {isMobile && (
          <StyledButtonLink to={page.kindDirectoryForm}>
            <StyledAddBtn />
          </StyledButtonLink>
        )}
      </StyledTitleWrap>
      <StyledKindDirectoryPageTextContainer>
        <StyledKindDirectoryPageText>
          Перед Вами Добрый справочник&nbsp;- источник щедрости и&nbsp;веры в&nbsp;самое лучшее.
        </StyledKindDirectoryPageText>
        <StyledKindDirectoryPageText>
          Справочник создан для взаимной поддержки и&nbsp;осознания, что каждый может внести свой
          вклад и&nbsp;принести пользу окружающим.
        </StyledKindDirectoryPageText>
        <StyledKindDirectoryPageText>
          Тут вы&nbsp;сможете найти полезную информацию, ссылки и&nbsp;адреса на&nbsp;удивительные
          проекты в&nbsp;Вашем городе, воспользоваться услугой и&nbsp;оставить своё предложение
          поддержки.
        </StyledKindDirectoryPageText>
        <StyledKindDirectoryPageText>
          Благодарим, что&nbsp;Вы с&nbsp;нами!
        </StyledKindDirectoryPageText>
      </StyledKindDirectoryPageTextContainer>
    </FormSection>
  );
};

export default KindDirectoryPageTextSection;
