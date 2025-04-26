import TreeWithButton from '@/pages/supportProjectPage/Chapters/TreeWithButton';
import {
  StyledAppealSupportProject,
  StyledTextSupportProject,
  StyledSupportPage,
  StyledTreeSupportProject,
  StyledTitleSupportProject,
  StyledContentWrapper,
} from './SupportProjectPage.styled.ts';
import { Breadcrumbs } from '@/shared/UiKit/Breadcrumbs/Breadcrumbs.tsx';
import BreadcrumbsModel from '@/shared/UiKit/Breadcrumbs/BreadcrumbsModel.ts';

import { page } from '@/shared/constants/navigation/page.ts';

export const SupportProjectPage = () => {
  const breadcrumbsItems: BreadcrumbsModel[] = [
    { name: 'Главная', url: page.mainPage },
    { name: 'Поддержать проект', url: page.support },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadcrumbsItems} />
      <StyledTitleSupportProject>Поддержка проекта</StyledTitleSupportProject>
      <StyledSupportPage>
        <StyledContentWrapper>
          <StyledAppealSupportProject>Дорогие друзья!</StyledAppealSupportProject>
          <StyledTextSupportProject>
            Каждая добрая история прорастает в&nbsp;наших сердцах семенами добрых поступков
            и&nbsp;распускается цветами добрых дел.
          </StyledTextSupportProject>
          <StyledTextSupportProject>
            Так пусть&nbsp;же сад &laquo;Новостей добрых деяний&raquo; будет пышным
            и&nbsp;плодоносным, a&nbsp;ваши истории, активность и&nbsp;ваше участие&nbsp;&mdash;
            это&nbsp;то, что поможет нашему проекту процветать.
          </StyledTextSupportProject>
        </StyledContentWrapper>
        <StyledTreeSupportProject>
          <TreeWithButton />
        </StyledTreeSupportProject>
      </StyledSupportPage>
    </div>
  );
};
