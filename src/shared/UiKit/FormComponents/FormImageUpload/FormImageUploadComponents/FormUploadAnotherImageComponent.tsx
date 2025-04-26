import React from 'react';
import { Control, Controller, FieldError, FieldErrors, Path } from 'react-hook-form';
import { InputContainer } from '@/shared/UiKit/FormComponents/FormInput/FormInput.styled';
import { getValidationFailRulesAnother } from '@/shared/constants/validationRules/validationFail';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes';
import UploadAnotherImage from '@/shared/UiKit/FormComponents/FormImageUpload/UploadAnotherImage/UploadAnotherImage.tsx';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

interface FormUploadAnotherImageComponentProps<T extends BaseFormFields> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors;
  required?: boolean;
}

export const FormUploadAnotherImageComponent = <T extends BaseFormFields>({
  name,
  control,
  errors,
  required = false,
}: FormUploadAnotherImageComponentProps<T>): React.ReactElement => {
  const fieldError = errors[name] as FieldError;
  return (
    <InputContainer>
      <Controller
        name={name}
        control={control}
        rules={{
          ...(required && { required: 'Выберите файлы для загрузки' }),
          validate: (value) => getValidationFailRulesAnother(value as File[] | null),
        }}
        render={({ field: { value, onChange } }) => (
          <UploadAnotherImage
            value={value as File[] | null}
            onChange={onChange}
            errors={fieldError}
          />
        )}
      />
    </InputContainer>
  );
};

export default FormUploadAnotherImageComponent;
