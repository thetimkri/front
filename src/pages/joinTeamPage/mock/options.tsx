import { SelectItem } from '@/shared/UiKit/FormComponents/FormRoleSelect/FormRoleSelect.tsx';
import { RoleContainer } from '../JoinTeamPage.styled';
import Designer from '@/assets/icons/Designer.svg';
import ContentSearcher from '@/assets/icons/ContentSearcher.svg';
import TextWriter from '@/assets/icons/TextWriter.svg';
import ProjectManager from '@/assets/icons/ProjectManager.svg';
import PostArtist from '@/assets/icons/PostArtist.svg';
import MagazineStaff from '@/assets/icons/MagazineStaff.svg';
import GoodGuideStaff from '@/assets/icons/GoodGuideStaff.svg';
import Corrector from '@/assets/icons/Corrector.svg';
import Inspirer from '@/assets/icons/Inspirer.svg';
import Master from '@/assets/icons/Master.svg';
import Director from '@/assets/icons/Director.svg';
import Editor from '@/assets/icons/Editor.svg';

export const options: SelectItem[] = [
  {
    value: '1',
    label: (
      <RoleContainer>
        <ContentSearcher />
        <p>Поисковик позитивного контента</p>
      </RoleContainer>
    ),
  },
  {
    value: '2',
    label: (
      <RoleContainer>
        <TextWriter />
        <p>Автор текстов по готовым темам</p>
      </RoleContainer>
    ),
  },
  {
    value: '3',
    label: (
      <RoleContainer>
        <ProjectManager />
        <p>Менеджер по продвижению проекта</p>
      </RoleContainer>
    ),
  },
  {
    value: '4',
    label: (
      <RoleContainer>
        <PostArtist />
        <p>Визуальный оформитель постов</p>
      </RoleContainer>
    ),
  },
  {
    value: '5',
    label: (
      <RoleContainer>
        <MagazineStaff />
        <p>Сотрудник журнала</p>
      </RoleContainer>
    ),
  },
  {
    value: '6',
    label: (
      <RoleContainer>
        <GoodGuideStaff />
        <p>Сотрудник Доброго справочника</p>
      </RoleContainer>
    ),
  },
  {
    value: '7',
    label: (
      <RoleContainer>
        <Designer />
        <p>Дизайнер</p>
      </RoleContainer>
    ),
  },
  {
    value: '8',
    label: (
      <RoleContainer>
        <Corrector />
        <p>Корректор</p>
      </RoleContainer>
    ),
  },
  {
    value: '9',
    label: (
      <RoleContainer>
        <Inspirer />
        <p>Идейный вдохновитель</p>
      </RoleContainer>
    ),
  },
  {
    value: '10',
    label: (
      <RoleContainer>
        <Master />
        <p>На все руки мастер</p>
      </RoleContainer>
    ),
  },
  {
    value: '11',
    label: (
      <RoleContainer>
        <Director />
        <p>Руководитель</p>
      </RoleContainer>
    ),
  },
  {
    value: '12',
    label: (
      <RoleContainer>
        <Editor />
        <p>Редактор</p>
      </RoleContainer>
    ),
  },
];
