import React from 'react';
import { Control, Controller, FieldErrors, Path } from 'react-hook-form';
import { InputContainer } from '@/shared/UiKit/FormComponents/FormInput/FormInput.styled.ts';
import { AsYouType, parsePhoneNumber } from 'libphonenumber-js';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import { StyledPhoneInputContainer, StyledInput, FlagContainer } from './FormPhoneInput.styled';
import Flag from '@/assets/icons/Russia.svg';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

interface PhoneInputProps<T extends BaseFormFields> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
}

const FormPhoneInput = <T extends BaseFormFields>({
  name,
  control,
  errors,
}: PhoneInputProps<T>): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Поле ввода не может быть пустым',
        validate: (value) => {
          try {
            if (!value) return 'Поле ввода не может быть пустым';
            const phoneString = String(value);
            const digitsOnly = phoneString.replace(/\D/g, '');
            if (digitsOnly.length !== 11) {
              return 'Номер телефона должен содержать 11 цифр';
            }
            const phoneNumber = parsePhoneNumber(phoneString, 'RU');
            return phoneNumber.isValid() || 'Неверный формат номера телефона';
          } catch {
            return 'Неверный формат номера телефона';
          }
        },
      }}
      render={({ field: { value, onChange, ...fieldProps } }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputDigits = e.target.value.replace(/\D/g, '');
          if (inputDigits.length > 11) {
            return;
          }

          let formatted = new AsYouType('RU').input(e.target.value);
          if (!formatted.startsWith('+7') && formatted) {
            formatted = '+7' + formatted;
          }
          onChange(formatted);
        };

        const inputValue = value ? String(value) : '';

        return (
          <InputContainer>
            <StyledPhoneInputContainer>
              <FlagContainer>
                <Flag />
              </FlagContainer>
              <StyledInput
                {...fieldProps}
                type="tel"
                value={inputValue}
                onChange={handleChange}
                placeholder="(999) 999-99-99"
              />
            </StyledPhoneInputContainer>
            {errors[name] && (
              <ErrorMessage
                message={
                  typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined
                }
              />
            )}
          </InputContainer>
        );
      }}
    />
  );
};

export default FormPhoneInput;
