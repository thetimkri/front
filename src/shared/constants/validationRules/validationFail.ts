export const getValidationFailRulesBase = (value: File | null): string | true => {
  if (!value) {
    return 'Выберите файл для загрузки';
  }

  const maxSize = 900 * 1024; // 900 KB в байтах
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];

  const fileName = value.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some((ext) => fileName.endsWith(ext));

  if (!hasValidExtension) {
    return 'Допустимый формат файла: .jpg, .png';
  }

  if (value.size > maxSize) {
    const sizeMB = (maxSize / 1024).toFixed(0);
    return `Размер файла не должен превышать ${sizeMB} КБ`;
  }

  return true;
};

export const getValidationFailRulesAnother = (value: File[] | null): string | true => {
  const maxFiles = 5;
  const maxSize = 100 * 1024;
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];

  if (value && value.length > maxFiles) {
    return `Максимальное количество файлов: ${maxFiles}`;
  }

  if (value) {
    for (const file of value) {
      const fileName = file.name.toLowerCase();
      const hasValidExtension = allowedExtensions.some((ext) => fileName.endsWith(ext));

      if (!hasValidExtension) {
        return `Файл ${file.name}: допустимый формат файла: .jpg, .png`;
      }

      if (file.size > maxSize) {
        const sizeKB = (maxSize / 1024).toFixed(0);
        return `Файл ${file.name} не должен превышать ${sizeKB} КБ`;
      }
    }
  }

  return true;
};
