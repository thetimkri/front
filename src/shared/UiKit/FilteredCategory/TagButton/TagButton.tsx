import { StyledTagButton } from './TagButton.styled';
import React from 'react';

type TagButtonProps = {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
};

const TagButton: React.FC<TagButtonProps> = ({ text, onClick, isActive }) => {
  return (
    <StyledTagButton onClick={onClick} $isActive={isActive}>
      {text}
    </StyledTagButton>
  );
};

export default TagButton;
