import React from 'react';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import { FormInputWrapper } from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { getValidationPatronymicRules } from '@/shared/constants/validationRules/validationText.ts';

const MIN_NAME_LENGTH = 4;
const MAX_NAME_LENGTH = 64;

interface AuthorFieldsProps {
  register: UseFormRegister<FormTypes>;
  errors: FieldErrors<FormTypes>;
  maxLength: number;
  namePrefix?: string;
  values: {
    surname: string | undefined;
    name: string | undefined;
    patronymic: string | undefined;
  };
  validationRules?: object;
}

export const AuthorFields = ({
  register,
  errors,
  maxLength,
  namePrefix = '',
  values,
  validationRules,
}: AuthorFieldsProps) => {
  const getFieldName = (field: string) => (namePrefix ? `${namePrefix}.${field}` : field);

  return (
    <FormInputWrapper>
      <FormInput<FormTypes>
        name={getFieldName('surname')}
        register={register}
        errors={errors}
        placeholder="Фамилия"
        maxLength={maxLength}
        value={values.surname || ''}
        validationRules={validationRules}
      />
      <FormInput<FormTypes>
        name={getFieldName('name')}
        register={register}
        errors={errors}
        placeholder="Имя"
        maxLength={maxLength}
        value={values.name || ''}
        validationRules={validationRules}
      />
      <FormInput<FormTypes>
        name={getFieldName('patronymic')}
        register={register}
        errors={errors}
        placeholder="Отчество"
        maxLength={maxLength}
        value={values.patronymic || ''}
        validationRules={getValidationPatronymicRules(MAX_NAME_LENGTH, MIN_NAME_LENGTH)}
      />
    </FormInputWrapper>
  );
};
