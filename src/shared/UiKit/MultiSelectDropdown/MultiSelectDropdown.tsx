import { useEffect, useRef, useState } from 'react';

import {
  ButtonsRow,
  CustomCheckbox,
  DropdownButton,
  DropdownMenu,
  DropdownMenuContainer,
  DropdownMenuOptionsContainer,
  DropdownSearchInput,
  DropdownWrapper,
  OptionItem,
} from './MultiSelectDropdown.styled';
import { PrimaryButton } from '@/shared/UiKit/Buttons';

import ChevronUp from '@/assets/icons/ChevronUp.svg';
import ChevronDown from '@/assets/icons/ChevronDown.svg';

export type Option = {
  value: string;
  label: string;
};

interface MultiSelectDropdownProps {
  options: Option[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  placeholder: string;
  withSearch?: boolean;
  disabled?: boolean;
  withoutArrow?: boolean;
}

export const MultiSelectDropdown = ({
  options,
  selectedValues,
  onChange,
  placeholder,
  withSearch = false,
  disabled = false,
  withoutArrow = false,
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selectedValues);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOption = (value: string) => {
    setTempSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    onChange(tempSelected);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTempSelected([]);
    setSearchTerm('');
    onChange([]);
    setIsOpen(false);
  };

  const selectedLabels = options
    .filter((opt) => selectedValues.includes(opt.value))
    .map((opt) => opt.label);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  useEffect(() => {
    setTempSelected(selectedValues);
  }, [selectedValues]);

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton
        onClick={() => setIsOpen((prev) => !prev)}
        $active={selectedLabels.length > 0}
        disabled={disabled}
      >
        {selectedLabels.length > 0 ? truncateText(selectedLabels.join(', '), 15) : placeholder}
        {!withoutArrow && <span className="icon">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>}
      </DropdownButton>
      {isOpen && !disabled && (
        <DropdownMenuContainer>
          {withSearch && (
            <DropdownSearchInput
              type="text"
              placeholder="Поиск"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <DropdownMenu>
            <DropdownMenuOptionsContainer>
              {filteredOptions.map((opt) => (
                <OptionItem key={opt.value}>
                  <CustomCheckbox
                    type="checkbox"
                    checked={tempSelected.includes(opt.value)}
                    onChange={() => toggleOption(opt.value)}
                  />
                  <span></span> {opt.label}
                </OptionItem>
              ))}
            </DropdownMenuOptionsContainer>

            <ButtonsRow>
              <PrimaryButton label={'Выбрать'} onClick={handleApply} $btnType="colored" />
              <PrimaryButton label={'Сбросить'} onClick={handleReset} $btnType="transparent" />
            </ButtonsRow>
          </DropdownMenu>
        </DropdownMenuContainer>
      )}
    </DropdownWrapper>
  );
};
