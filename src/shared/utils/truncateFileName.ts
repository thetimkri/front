export const truncateFileName = (file: File, maxLength: number = 90): File => {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf('.'));

  const baseName = fileName.slice(0, fileName.lastIndexOf('.'));
  const truncatedBaseName = baseName.length > maxLength ? baseName.slice(0, maxLength) : baseName;

  return new File([file], truncatedBaseName + fileExtension, { type: file.type });
};
