import React from 'react';
import { Control, Controller, FieldError, FieldErrors, Path } from 'react-hook-form';
import { InputContainer } from '@/shared/UiKit/FormComponents/FormInput/FormInput.styled';
import { getValidationFailRulesBase } from '@/shared/constants/validationRules/validationFail';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes';
import UploadImage from '@/shared/UiKit/FormComponents/FormImageUpload/UploadImage/UploadImage.tsx';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

interface FormImageUploadComponentProps<T extends BaseFormFields> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors;
  required?: boolean;
  isSubmitting?: boolean;
}

export const FormUploadImageComponent = <T extends BaseFormFields>({
  name,
  control,
  errors,
  required = false,
  isSubmitting,
}: FormImageUploadComponentProps<T>): React.ReactElement => {
  const fieldError = errors[name] as FieldError;

  return (
    <InputContainer>
      <Controller
        name={name}
        control={control}
        rules={{
          ...(required && { required: 'Выберите файл для загрузки' }),
          validate: (value) => getValidationFailRulesBase(value as File | null),
        }}
        render={({ field: { value, onChange } }) => (
          <UploadImage
            value={value as File | null}
            onChange={onChange}
            errors={fieldError}
            isSubmitting={isSubmitting}
          />
        )}
      />
    </InputContainer>
  );
};

export default FormUploadImageComponent;
