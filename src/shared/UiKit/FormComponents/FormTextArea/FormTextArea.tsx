import React, { ChangeEvent } from 'react';
import {
  Path,
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
  Control,
  Controller,
  PathValue,
} from 'react-hook-form';
import InputCharCounter from '@/shared/UiKit/FormComponents/InputCharCounter/InputCharCounter';
import { getValidationTextRules } from '@/shared/constants/validationRules/validationText';
import { TextArea } from './FormTextArea.styled';
import { InputContainer } from '@/shared/UiKit/FormComponents/FormInput/FormInput.styled';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

interface FormTextAreaProps<T extends BaseFormFields> {
  name: Path<T>;
  register: UseFormRegister<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  maxLength: number;
  defaultValue?: PathValue<T, Path<T>>;
  value?: FormFieldValue;
  validationRules?: RegisterOptions<T, Path<T>>;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  onFocus?: () => void;
}

const FormTextArea = <T extends BaseFormFields>({
  name,
  register,
  control,
  errors,
  placeholder,
  maxLength,
  defaultValue,
  value,
  onChange,
  disabled,
  validationRules,
  onFocus,
}: FormTextAreaProps<T>): React.ReactElement => {
  const error = errors[name];
  const inputLength = String(value || defaultValue || '').length;

  const customValidationRules: RegisterOptions<T, Path<T>> = {
    ...(validationRules || getValidationTextRules(maxLength, 'text')),
    validate: (value: PathValue<T, Path<T>>) => {
      if (!value) return true;
      return String(value).length <= maxLength || `Превышено допустимое количество символов`;
    },
  };

  const { onChange: registerOnChange, ...registerRest } = register(name, customValidationRules);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <InputContainer>
          <TextArea
            {...field}
            {...registerRest}
            value={String(field.value || '')}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) {
                field.onChange(e);
                registerOnChange(e);
                onChange?.(e);
              }
            }}
            onFocus={onFocus}
            disabled={disabled}
            $hasError={!!error}
            placeholder={placeholder}
            maxLength={maxLength}
          />
          <InputCharCounter
            error={typeof error?.message === 'string' ? error.message : undefined}
            length={inputLength}
            maxLength={maxLength}
          />
        </InputContainer>
      )}
    />
  );
};

export default FormTextArea;
