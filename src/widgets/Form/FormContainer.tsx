import React from 'react';
import Branch from '@/assets/icons/Branch.svg';
import { BranchContainer, Form, FormTitle, SectionForm } from './FormContainer.styled';

type TFormContainerProps = {
  title: string;
  children?: React.ReactNode;
};

const FormContainer: React.FC<TFormContainerProps> = ({ title, children }) => {
  return (
    <SectionForm>
      <Form>
        <BranchContainer>
          <Branch />
          <Branch />
        </BranchContainer>
        <FormTitle>{title}</FormTitle>
        {children}
        <BranchContainer>
          <Branch />
          <Branch />
        </BranchContainer>
      </Form>
    </SectionForm>
  );
};

export default FormContainer;
