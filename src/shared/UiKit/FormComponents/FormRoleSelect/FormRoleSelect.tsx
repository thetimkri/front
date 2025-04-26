import React, { useState, useRef, useEffect } from 'react';
import {
  SelectContainer,
  SelectInput,
  SelectItemStyled,
  SelectOptions,
  SelectPlaceholder,
  StyledArrow,
} from './FormRoleSelect.styled.ts';

import { ReactNode } from 'react';

export interface SelectItem {
  value: string;
  label: ReactNode;
}

interface SelectProps {
  options: SelectItem[];
  onSelect: (selectedItem: SelectItem) => void;
  placeholder: string;
  value?: SelectItem;
  maxHeight: string;
}

const FormRoleSelect: React.FC<SelectProps> = ({
  options,
  onSelect,
  placeholder,
  value,
  maxHeight,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectItem | null>(value || null);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedOption(value || null);
  }, [value]);

  const handleOptionClick = (selectedItem: SelectItem) => {
    setSelectedOption(selectedItem);
    onSelect(selectedItem);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
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

  const displayedPlaceholder = selectedOption ? selectedOption.label : placeholder;

  return (
    <SelectContainer ref={selectRef} tabIndex={0}>
      <SelectInput onClick={toggleOpen}>
        <SelectPlaceholder>{displayedPlaceholder}</SelectPlaceholder>
        <StyledArrow $isOpen={isOpen} />
      </SelectInput>
      <SelectOptions $isOpen={isOpen} $maxHeight={maxHeight}>
        {options
          .filter((option) => option.value !== selectedOption?.value)
          .map((option) => (
            <SelectItemStyled
              tabIndex={0}
              key={option.value}
              onClick={() => handleOptionClick(option)}
              $isSelected={selectedOption?.value === option.value}
            >
              {option.label}
            </SelectItemStyled>
          ))}
      </SelectOptions>
    </SelectContainer>
  );
};

export default FormRoleSelect;
