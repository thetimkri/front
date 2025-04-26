import { API_BASE_URL } from '@/shared/api/baseUrl.ts';
import { fetchWithErrorHandling } from '@/shared/utils/fetchWithErrorHandling.ts';
import {
  GratuitousServicesAgreementDto,
  PrivacyPolicyDto,
} from '@/shared/api/hooks/userAgreements/types.ts';

export const apiUserAgreements = {
  getGratuitousServicesAgreementData: async (): Promise<GratuitousServicesAgreementDto> => {
    const url = `${API_BASE_URL}gratuitous-services-agreement/`;
    return fetchWithErrorHandling<GratuitousServicesAgreementDto>(url);
  },

  getPrivacyPolicyData: async (): Promise<PrivacyPolicyDto> => {
    const url = `${API_BASE_URL}privacy-policy/`;
    return fetchWithErrorHandling<PrivacyPolicyDto>(url);
  },
};
