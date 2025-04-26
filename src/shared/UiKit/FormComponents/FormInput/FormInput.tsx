import React, { ChangeEvent } from 'react';
import { Path, UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';
import InputCharCounter from '@/shared/UiKit/FormComponents/InputCharCounter/InputCharCounter.tsx';
import { Input, InputContainer } from './FormInput.styled.ts';
import { getValidationTitleRules } from '@/shared/constants/validationRules/validationText.ts';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes.ts';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

type CustomRegisterOptions = {
  onChange?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
};

interface FormInputProps<T extends BaseFormFields> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder: string;
  maxLength: number;
  value: FormFieldValue;
  type?: 'text' | 'url' | 'email';
  validationRules?: RegisterOptions<T, Path<T>>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
  onFocus?: () => void;
  id?: string;
  customRegisterOptions?: CustomRegisterOptions;
}

export const FormInput = <T extends BaseFormFields>({
  name,
  register,
  errors,
  placeholder,
  maxLength,
  value,
  type = 'text',
  onChange,
  onBlur,
  disabled,
  validationRules,
  onFocus,
  id,
  customRegisterOptions,
}: FormInputProps<T>): React.ReactElement => {
  const findError = (errors: FieldErrors<T>, name: string): FieldErrors | undefined => {
    if (errors?.[name] && typeof errors[name] === 'object' && 'message' in errors[name]!) {
      return errors[name] as FieldErrors;
    }

    const parts = name.split('.');
    if (parts.length > 1) {
      const [arrayName, index, field] = parts;

      const arrayErrors = errors[arrayName] as unknown;
      if (Array.isArray(arrayErrors)) {
        const parsedIndex = Number(index);
        if (!isNaN(parsedIndex) && arrayErrors?.[parsedIndex]?.[field]) {
          return arrayErrors[parsedIndex][field] as FieldErrors;
        }
      }
    }
  };

  const error = findError(errors, name);

  const inputLength = String(value || '').length;

  const {
    onChange: registerOnChange,
    onBlur: registerOnBlur,
    ...registerRest
  } = register(name, validationRules || getValidationTitleRules(maxLength));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    registerOnChange(e);
    onChange?.(e);
    customRegisterOptions?.onChange?.();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    registerOnBlur(e);
    onBlur?.();
    customRegisterOptions?.onBlur?.();
  };

  return (
    <InputContainer>
      <Input
        autoComplete={'off'}
        type={type}
        $hasError={!!error}
        placeholder={placeholder}
        disabled={disabled || customRegisterOptions?.disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={onFocus}
        {...registerRest}
        id={id}
      />
      <InputCharCounter
        error={typeof error?.message === 'string' ? error.message : undefined}
        length={inputLength}
        maxLength={maxLength}
      />
    </InputContainer>
  );
};
