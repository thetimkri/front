import { Link } from 'react-router-dom';
import {
  AnotherEntityBlockItemImage,
  AnotherEntityBlockItemStyled,
  AnotherEntityBlockItemText,
} from './AnotherEntityBlockItem.styled';
import React from 'react';
import Image from '@/shared/UiKit/Image/Image.tsx';

type TAnotherEntityBlockItem = {
  entityItem: {
    id: number;
    main_image: string | null;
    title: string;
  };
  to: string;
};

const AnotherEntityBlockItem: React.FC<TAnotherEntityBlockItem> = ({ entityItem, to }) => {
  return (
    <Link to={`${to}/${entityItem.id}`}>
      <AnotherEntityBlockItemStyled>
        <AnotherEntityBlockItemImage
          as={Image}
          loading="lazy"
          src={entityItem.main_image || ''}
          alt={entityItem.title}
        />
        <AnotherEntityBlockItemText>{entityItem.title}</AnotherEntityBlockItemText>
      </AnotherEntityBlockItemStyled>
    </Link>
  );
};

export default AnotherEntityBlockItem;
