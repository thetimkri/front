export const fetchWithErrorHandling = async <T>(url: string, options?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        ...(options?.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        `Не удалось выполнить запрос. Статус: ${response.status}${
          errorData ? `. Детали: ${JSON.stringify(errorData)}` : ''
        }`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
