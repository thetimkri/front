export const handleFileDownload = async (
  url: string,
  customFileName?: string,
  event?: React.MouseEvent<HTMLElement>
): Promise<void> => {
  if (event) {
    event.preventDefault();
  }

  if (!url) {
    console.error('URL не указан');
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ошибка! Статус: ${response.status}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);

    const fileName = customFileName || url.split('/').pop() || 'download-file';

    const tempLink = document.createElement('a');
    tempLink.href = downloadUrl;
    tempLink.download = fileName;
    document.body.appendChild(tempLink);

    tempLink.click();

    setTimeout(() => {
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(tempLink);
    }, 100);
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error);

    window.open(url, '_blank');
  }
};
