import { page } from '@/shared/constants/navigation/page.ts';
import {
  ImageChapter,
  StyledAloneButton,
  StyledButtonsWrapper,
  StyledTwoButtons,
  TreeWithButtonWrapper,
} from './TreeWithButton.styled.ts';
import { AccentButton } from '@/shared/UiKit/Buttons';

const TreeWithButton = () => {
  return (
    <TreeWithButtonWrapper>
      <ImageChapter>
        <StyledButtonsWrapper>
          <StyledAloneButton>
            <AccentButton label={'Хочу в команду'} link={page.joinTeam} size={''} height={''} />
          </StyledAloneButton>
          <StyledTwoButtons>
            <AccentButton
              label={'Добавиться в\u00A0cправочник'}
              link={page.kindDirectoryForm}
              size={''}
              height={''}
            />
            <AccentButton
              label={'Рассказать историю'}
              link={page.tellStory}
              size={''}
              height={''}
            />
          </StyledTwoButtons>
          <StyledAloneButton>
            <AccentButton
              label={'Стать партнёром'}
              link={page.becomePartner}
              size={''}
              height={''}
            />
          </StyledAloneButton>
        </StyledButtonsWrapper>
      </ImageChapter>
    </TreeWithButtonWrapper>
  );
};

export default TreeWithButton;
