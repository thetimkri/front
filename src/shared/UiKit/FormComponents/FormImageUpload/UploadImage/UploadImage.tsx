import React, { useEffect, useState } from 'react';
import { FieldError } from 'react-hook-form';

import SuccessMessage from '@/shared/UiKit/FormComponents/SuccessMessage/SuccessMessage.tsx';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import { truncateText } from '@/shared/utils/truncate.ts';

import {
  Delete,
  Paperclip,
  UploadFile,
  UploadFileTitle,
  UploadIcon,
  UploadImageContainer,
  UploadInput,
  UploadLabel,
  UploadLabelContainer,
  UploadText,
  UploadTitle,
} from '../FormImageUpload.styled.ts';

interface UploadImageProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
  errors?: FieldError;
  isSubmitting?: boolean;
}

const UploadImage: React.FC<UploadImageProps> = ({ value, onChange, errors, isSubmitting }) => {
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setIsFileUploaded(false);
    } else {
      setIsFileUploaded(true);
      setUploadError(null);
    }
  }, [value]);

  useEffect(() => {
    if (isSubmitting && !isFileUploaded) {
      setUploadError('Загрузка файла обязательна.');
    }
    if (!isSubmitting) {
      setUploadError(null);
    }
  }, [isSubmitting, isFileUploaded]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange?.(file);
  };

  const handleFileDelete = () => {
    onChange?.(null);
    setIsFileUploaded(false);
  };

  return (
    <>
      <UploadImageContainer>
        <UploadInput
          type="file"
          name="file-input"
          id="file-input"
          onChange={handleFileChange}
          accept="image/*"
        />
        <UploadLabelContainer>
          <UploadLabel $isUploaded={isFileUploaded} htmlFor="file-input">
            <UploadTitle>Загрузить</UploadTitle>
            <UploadIcon $isUploaded={isFileUploaded} />
          </UploadLabel>
          <UploadText $isUploaded={isFileUploaded}>1 файл до 900КБ</UploadText>
        </UploadLabelContainer>
      </UploadImageContainer>

      {isFileUploaded && value && (
        <>
          <UploadFile $hasError={Boolean(errors?.message)}>
            <Paperclip />
            <UploadFileTitle>{truncateText(value.name, 10)}</UploadFileTitle>
            <button type="button" onClick={handleFileDelete}>
              <Delete />
            </button>
          </UploadFile>
          {errors?.message ? (
            <ErrorMessage message={errors.message} />
          ) : (
            <SuccessMessage message="Файл успешно загружен" />
          )}
        </>
      )}

      {uploadError && <ErrorMessage message={uploadError} />}
      {errors?.type === 'required' && <ErrorMessage message={errors.message} />}
    </>
  );
};

export default UploadImage;
