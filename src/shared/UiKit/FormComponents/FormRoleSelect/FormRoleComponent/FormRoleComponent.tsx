import React from 'react';
import { useEffect } from 'react';
import { Control, Controller, FieldErrors, Path, useWatch } from 'react-hook-form';
import FormRoleSelect, {
  SelectItem,
} from '@/shared/UiKit/FormComponents/FormRoleSelect/FormRoleSelect.tsx';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import { FormFieldValue } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import { FormRoleContainer } from '@/shared/UiKit/FormComponents/FormRoleSelect/FormRoleComponent/FormRoleComponent.styled.ts';

interface BaseFormFields {
  [key: string]: FormFieldValue;
}

interface FormRoleComponentProps<T extends BaseFormFields> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  placeholder: string;
  maxHeight: string;
  options: SelectItem[];
}

export const FormRoleComponent = <T extends BaseFormFields>({
  name,
  control,
  errors,
  placeholder,
  maxHeight,
  options,
}: FormRoleComponentProps<T>): React.ReactElement => {
  const selectedValue = useWatch({ control, name });
  useEffect(() => {
    console.log('Selected role changed:', selectedValue); // Отслеживание изменений
  }, [selectedValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Выберите значение из списка',
      }}
      render={({ field: { value, onChange } }) => (
        <FormRoleContainer>
          <FormRoleSelect
            options={options}
            value={options.find((option) => option.value === value) || undefined}
            onSelect={(selectedItem) => onChange(selectedItem.value)}
            placeholder={placeholder}
            maxHeight={maxHeight}
          />
          {errors[name] && (
            <ErrorMessage
              message={errors[name]?.message ? String(errors[name]?.message) : undefined}
            />
          )}
        </FormRoleContainer>
      )}
    />
  );
};

export default FormRoleComponent;
