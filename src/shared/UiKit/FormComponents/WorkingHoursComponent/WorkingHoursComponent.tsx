import React, { useState, useRef, useEffect } from 'react';
import {
  JoinDirectoryButton,
  JoinDirectoryDropdownMenu,
  JoinDirectoryDropdownWrap,
  JoinDirectoryDropdownWrapper,
  JoinDirectoryWrapper,
} from '@/features/joinDirectoryForm/ui/joinDirectoryForm.styled.ts';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput.tsx';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import {
  getWorkingHoursValidationRules,
  getRequiredWorkingHoursRules,
  getStoryValidationRules,
} from '@/shared/constants/validationRules/validationText.ts';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldError,
} from 'react-hook-form';
import Arrow from '@/assets/icons/Arrow.svg';
import { generateTimeOptions } from '@/features/joinDirectoryForm/ui/joinDirectoryForm.const.ts';

interface WorkingHoursComponentProps {
  register: UseFormRegister<FormTypes>;
  setValue: UseFormSetValue<FormTypes>;
  errors: FieldErrors<FormTypes>;
  watch: UseFormWatch<FormTypes>;
  maxLength: number;
  isSuccess?: boolean;
  clearErrors?: (name?: string) => void;
  trigger?: (name?: string) => Promise<boolean>;
}

interface NestedFieldErrors {
  locationInfo?: {
    start_time?: FieldError;
    end_time?: FieldError;
    comment_for_working_hours?: FieldError;
  };
}

const WorkingHoursComponent: React.FC<WorkingHoursComponentProps> = ({
  register,
  setValue,
  errors,
  watch,
  maxLength,
  isSuccess,
  clearErrors,
  trigger,
}) => {
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endTimeOpen, setEndTimeOpen] = useState(false);
  const [hasTimeValidation, setHasTimeValidation] = useState(false);

  const startTimeRef = useRef<HTMLDivElement>(null);
  const endTimeRef = useRef<HTMLDivElement>(null);

  const startTime = watch(`locationInfo.start_time`) || '';
  const endTime = watch(`locationInfo.end_time`) || '';
  const commentForWorkingHours = watch(`locationInfo.comment_for_working_hours`) || '';

  const nestedErrors = errors as NestedFieldErrors;
  const startTimeError = nestedErrors?.locationInfo?.start_time;
  const endTimeError = nestedErrors?.locationInfo?.end_time;

  const timeOptions = generateTimeOptions();

  useEffect(() => {
    if (isSuccess) {
      setValue(`locationInfo.start_time`, '');
      setValue(`locationInfo.end_time`, '');
      setValue(`locationInfo.comment_for_working_hours`, '');
      setHasTimeValidation(false);
    }
  }, [isSuccess, setValue]);

  const handleStartTimeSelect = (time: string) => {
    setValue(`locationInfo.start_time`, time);
    setStartTimeOpen(false);
    setHasTimeValidation(false);

    if (clearErrors) {
      clearErrors(`locationInfo.start_time`);
    }

    if (trigger) {
      setTimeout(() => {
        trigger(`locationInfo.start_time`);
      }, 0);
    }
  };

  const handleEndTimeSelect = (time: string) => {
    setValue(`locationInfo.end_time`, time);
    setEndTimeOpen(false);
    setHasTimeValidation(false);

    if (clearErrors) {
      clearErrors(`locationInfo.end_time`);
    }

    if (trigger) {
      setTimeout(() => {
        trigger(`locationInfo.end_time`);
      }, 0);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        startTimeRef.current &&
        !startTimeRef.current.contains(event.target as Node) &&
        startTimeOpen
      ) {
        setStartTimeOpen(false);
      }

      if (endTimeRef.current && !endTimeRef.current.contains(event.target as Node) && endTimeOpen) {
        setEndTimeOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [startTimeOpen, endTimeOpen]);

  const isStartTimeError = !!startTimeError && !startTimeOpen && !hasTimeValidation;
  const isEndTimeError = !!endTimeError && !endTimeOpen && !hasTimeValidation;

  return (
    <JoinDirectoryWrapper>
      <JoinDirectoryDropdownWrap>
        <JoinDirectoryDropdownWrapper ref={startTimeRef}>
          <JoinDirectoryButton
            type="button"
            $isOpen={startTimeOpen}
            $isPlaceholder={!startTime}
            $hasError={isStartTimeError}
            onClick={(e) => {
              e.preventDefault();
              setStartTimeOpen(!startTimeOpen);
              if (endTimeOpen) setEndTimeOpen(false);
            }}
          >
            {startTime ? `с ${startTime}` : 'с 00:00'} <Arrow />
          </JoinDirectoryButton>
          {startTimeOpen && (
            <JoinDirectoryDropdownMenu $isOpen={startTimeOpen}>
              {timeOptions.map((time) => (
                <div
                  key={`start-${time}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleStartTimeSelect(time);
                  }}
                >
                  {time}
                </div>
              ))}
            </JoinDirectoryDropdownMenu>
          )}
        </JoinDirectoryDropdownWrapper>

        <JoinDirectoryDropdownWrapper ref={endTimeRef}>
          <JoinDirectoryButton
            type="button"
            $isOpen={endTimeOpen}
            $isPlaceholder={!endTime}
            $hasError={isEndTimeError}
            onClick={(e) => {
              e.preventDefault();
              setEndTimeOpen(!endTimeOpen);
              if (startTimeOpen) setStartTimeOpen(false);
            }}
          >
            {endTime ? `до ${endTime}` : 'до 00:00'} <Arrow />
          </JoinDirectoryButton>
          {endTimeOpen && (
            <JoinDirectoryDropdownMenu $isOpen={endTimeOpen}>
              {timeOptions.map((time) => (
                <div
                  key={`end-${time}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleEndTimeSelect(time);
                  }}
                >
                  {time}
                </div>
              ))}
            </JoinDirectoryDropdownMenu>
          )}
        </JoinDirectoryDropdownWrapper>
      </JoinDirectoryDropdownWrap>

      <FormInput<FormTypes>
        name={`locationInfo.comment_for_working_hours`}
        register={register}
        errors={errors}
        placeholder="Текст комментария"
        maxLength={maxLength}
        value={commentForWorkingHours}
        validationRules={getStoryValidationRules(1, maxLength, false)}
      />

      <input
        type="hidden"
        {...register(`locationInfo.start_time`, {
          ...getRequiredWorkingHoursRules(),
          ...getWorkingHoursValidationRules(),
        })}
      />
      <input
        type="hidden"
        {...register(`locationInfo.end_time`, {
          ...getRequiredWorkingHoursRules(),
          ...getWorkingHoursValidationRules(),
        })}
      />
    </JoinDirectoryWrapper>
  );
};

export default WorkingHoursComponent;
