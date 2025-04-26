import { HelpProjectCard } from '@/shared/api/hooks/helpProject/types.ts';
import { API_BASE_URL } from '@/shared/api/baseUrl.ts';

export const howToHelpCardsApi = {
  getCardsData: async ({ signal }: { signal: AbortSignal }) => {
    const res = await fetch(`${API_BASE_URL}pages/main-page/`, { signal });
    return await (res.json() as Promise<HelpProjectCard[]>);
  },
};
