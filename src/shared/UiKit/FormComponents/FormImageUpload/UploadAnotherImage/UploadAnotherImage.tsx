import React, { useState } from 'react';
import { FieldError } from 'react-hook-form';
import {
  Delete,
  Paperclip,
  UploadAnotherLabel,
  UploadFile,
  UploadFilesList,
  UploadFileTitle,
  UploadIcon,
  UploadImageContainer,
  UploadInput,
  UploadLabelContainer,
  UploadText,
  UploadTitle,
} from '../FormImageUpload.styled';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import { truncateText } from '@/shared/utils/truncate.ts';

interface UploadAnotherImageProps {
  value?: File[] | null;
  onChange?: (files: File[] | null) => void;
  errors?: FieldError;
}

const MAX_FILES = 5;
const MAX_FILE_SIZE = 100;

const UploadAnotherImage: React.FC<UploadAnotherImageProps> = ({
  value = [],
  onChange,
  errors,
}) => {
  const [validationErrors, setValidationErrors] = useState<{ file: File; message: string }[]>([]);
  const filesCount = value?.length || 0;
  const isLimitReached = filesCount >= MAX_FILES;

  const validateFile = (file: File): string | null => {
    const maxSize = MAX_FILE_SIZE * 1024;
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const fileName = file.name.toLowerCase();

    const hasValidExtension = allowedExtensions.some((ext) => fileName.endsWith(ext));
    if (!hasValidExtension) {
      return `Файл ${file.name}: допустимый формат файла: .jpg, .png`;
    }

    if (file.size > maxSize) {
      return `Файл ${file.name} превышает ${MAX_FILE_SIZE}КБ`;
    }

    return null;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    const currentFiles = value || [];

    if (currentFiles.length + newFiles.length > MAX_FILES) {
      setValidationErrors([
        ...validationErrors,
        ...newFiles.map((file) => ({
          file,
          message: `Максимальное количество файлов: ${MAX_FILES}`,
        })),
      ]);
      return;
    }

    const newErrors: { file: File; message: string }[] = [];
    const validFiles: File[] = [];

    newFiles.forEach((file) => {
      const error = validateFile(file);
      if (error) {
        newErrors.push({ file, message: error });
      } else {
        validFiles.push(file);
      }
    });

    setValidationErrors([...validationErrors, ...newErrors]);
    if (validFiles.length > 0) {
      onChange?.([...currentFiles, ...validFiles]);
    }
  };

  const handleFileDelete = (fileToDelete: File) => {
    const updatedFiles = value?.filter((file) => file !== fileToDelete) || [];
    const updatedErrors = validationErrors.filter((error) => error.file !== fileToDelete);
    onChange?.(updatedFiles.length ? updatedFiles : null);
    setValidationErrors(updatedErrors);
  };

  return (
    <>
      <UploadImageContainer>
        <UploadInput
          type="file"
          name="additional-images"
          id="additional-images"
          multiple
          onChange={handleFileChange}
          accept="image/*"
          disabled={isLimitReached}
        />
        <UploadLabelContainer>
          <UploadAnotherLabel $isDisabled={isLimitReached} htmlFor="additional-images">
            <UploadTitle>Загрузить</UploadTitle>
            <UploadIcon $isUploaded={isLimitReached} />
          </UploadAnotherLabel>
          <UploadText $isUploaded={isLimitReached}>
            До {MAX_FILES} файлов,
            <br />
            допустимый размер одного файла — {MAX_FILE_SIZE}КБ
          </UploadText>
        </UploadLabelContainer>
      </UploadImageContainer>

      {validationErrors.length > 0 && (
        <UploadFilesList>
          {validationErrors.map((error, index) => (
            <li key={index}>
              <UploadFile $hasError={true}>
                <Paperclip />
                <UploadFileTitle>{truncateText(error.file.name, 10)}</UploadFileTitle>
                <button onClick={() => handleFileDelete(error.file)}>
                  <Delete />
                </button>
              </UploadFile>
              <ErrorMessage message={error.message} />
            </li>
          ))}
        </UploadFilesList>
      )}

      {Array.isArray(value) && value.length > 0 && (
        <UploadFilesList>
          {value.map((file, index) => (
            <li key={`${file.name}-${index}`}>
              <UploadFile $hasError={false}>
                <Paperclip />
                <UploadFileTitle>{truncateText(file.name, 10)}</UploadFileTitle>
                <button onClick={() => handleFileDelete(file)}>
                  <Delete />
                </button>
              </UploadFile>
              <SuccessMessage message="Файл успешно загружен" />
            </li>
          ))}
        </UploadFilesList>
      )}

      {errors?.type && <ErrorMessage message={errors.message} />}
    </>
  );
};

export default UploadAnotherImage;
