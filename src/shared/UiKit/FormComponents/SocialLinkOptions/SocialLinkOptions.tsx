import {
  DropdownMenu,
  SocialLinkButton,
  SocialLinkContainer,
  SocialLinkOption,
} from '@/shared/UiKit/FormComponents/SocialLinkOptions/SocialLinkOptions.styled.ts';
import React, { useEffect, useRef, useState } from 'react';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput.tsx';
import { FormTypes, SocialNetwork } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import { UseFormRegister, UseFormSetValue, FieldErrors, UseFormWatch } from 'react-hook-form';
import Arrow from '@/assets/icons/Arrow.svg';
import { ValidationRules } from '@/shared/constants/validationRules/validationText.ts';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';

interface SocialLinkOptionsProps {
  register: UseFormRegister<FormTypes>;
  setValue: UseFormSetValue<FormTypes>;
  errors: FieldErrors<FormTypes>;
  placeholder?: string;
  disabledOptions?: string[];
  onChange?: (option: string) => void;
  onUrlChange?: (url: string) => void;
  maxLength: number;
  fieldName: string;
  resetKey?: string;
  validationLinkRules: ValidationRules;
  required?: boolean;
  typeFieldName?: string;
  errorMessage?: string;
  watch?: UseFormWatch<FormTypes>;
}

const SocialLinkOptions = ({
  register,
  setValue,
  errors,
  placeholder = 'Выбрать',
  onChange,
  onUrlChange,
  maxLength,
  fieldName,
  disabledOptions,
  resetKey,
  validationLinkRules,
  required = false,
  typeFieldName,
  errorMessage = 'Выберите тип ссылки',
  watch,
}: SocialLinkOptionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [linkValue, setLinkValue] = useState<string>('');
  const selectRef = useRef<HTMLDivElement | null>(null);

  const options: SocialNetwork[] = [
    {
      title: 'Сайт',
      name: 'website',
    },
    {
      title: 'Вконтакте',
      name: 'vkontakte',
    },
    {
      title: 'Telegram',
      name: 'telegram',
    },
    {
      title: 'Одноклассники',
      name: 'odnoklasniki',
    },
  ];

  useEffect(() => {
    if (resetKey) {
      setSelectedOption(null);
      setLinkValue('');
      setIsOpen(false);
      if (typeFieldName) {
        setValue(typeFieldName, '');
      }
    }
  }, [resetKey, setValue, typeFieldName]);

  useEffect(() => {
    if (typeFieldName) {
      if (watch) {
        const urlValue = watch(fieldName);
        const hasValue = typeof urlValue === 'string' && urlValue.trim() !== '';

        register(typeFieldName, {
          required: hasValue ? errorMessage : false,
        });
      } else {
        register(typeFieldName, {
          required: required ? errorMessage : false,
        });
      }
    }
  }, [register, required, typeFieldName, errorMessage, watch, fieldName]);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string, name: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
    if (typeFieldName) {
      setValue(typeFieldName, name, { shouldValidate: true });
    }

    if (onChange) {
      onChange(name);
    }
  };

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLinkValue(value);

    setValue(fieldName, value);

    if (typeFieldName && value.trim() !== '' && watch) {
      const typeValue = watch(typeFieldName) || '';

      const typeValueString = typeof typeValue === 'string' ? typeValue : '';

      setValue(typeFieldName, typeValueString, { shouldValidate: true });
    }

    if (onUrlChange) {
      onUrlChange(value);
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const hasTypeError = typeFieldName ? errors[typeFieldName as keyof typeof errors] : null;

  return (
    <SocialLinkContainer ref={selectRef}>
      <div>
        <SocialLinkButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
          $isPlaceholder={!selectedOption}
          $isOpen={isOpen}
          $hasError={!!hasTypeError}
        >
          {selectedOption || placeholder}
          <Arrow />
        </SocialLinkButton>

        {hasTypeError && <ErrorMessage message={hasTypeError.message as string} />}
      </div>

      <DropdownMenu $isOpen={isOpen}>
        {options.map((option) => {
          const isDisabled = disabledOptions?.includes(option.name);
          return (
            <SocialLinkOption
              key={option.name}
              disabled={isDisabled}
              onClick={(e) => {
                e.preventDefault();
                if (!isDisabled) {
                  handleOptionClick(option.title, option.name);
                }
              }}
            >
              {option.title}
            </SocialLinkOption>
          );
        })}
      </DropdownMenu>

      <FormInput<FormTypes>
        name={fieldName}
        register={register}
        errors={errors}
        placeholder="Ссылка"
        maxLength={maxLength}
        validationRules={validationLinkRules}
        value={linkValue}
        onChange={handleLinkChange}
        type={'url'}
      />
    </SocialLinkContainer>
  );
};

export default SocialLinkOptions;
