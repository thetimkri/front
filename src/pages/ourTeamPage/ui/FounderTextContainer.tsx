import { useState } from 'react';
import { ReadMore, TeamParagraph, TeamTextContainer } from '../ourTeamPage.styled';

const FounderTextContainer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TeamTextContainer $expanded={isExpanded}>
      <TeamParagraph>
        Мария Зацаринная создала проект про добрые деяния, который стал настоящей сенсацией в её
        городе. Вдохновлённая желанием сделать мир лучше, она объединила усилия с местными
        волонтёрами, школьниками и даже пожилыми людьми. Проект получил название «Новости добрых
        деяний» и включал в себя серию мероприятий, направленных на помощь нуждающимся в позитивных
        событиях.
      </TeamParagraph>
      <ReadMore $expanded={isExpanded} onClick={handleReadMoreClick}>
        Читать дальше
      </ReadMore>
      <TeamParagraph>
        В рамках проекта Мария организовала сбор пожертвований, проведение благотворительных
        концертов и мастер-классов. Волонтёры помогали в приютах для бездомных животных, собирали
        одежду и продукты для малоимущих семей, а также проводили уроки доброты для детей.
      </TeamParagraph>
    </TeamTextContainer>
  );
};

export default FounderTextContainer;
