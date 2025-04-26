import { useQuery } from '@tanstack/react-query';
import { apiUserAgreements } from '@/shared/api/hooks/userAgreements/queries/apiUserAgreements.ts';

export const usePrivacyPolicyQuery = () => {
  return useQuery({
    queryKey: ['privacyPolicy'],
    queryFn: () => apiUserAgreements.getPrivacyPolicyData(),
  });
};

export const useGratuitousServicesAgreementQuery = () => {
  return useQuery({
    queryKey: ['gratuitousServicesAgreement'],
    queryFn: () => apiUserAgreements.getGratuitousServicesAgreementData(),
  });
};
