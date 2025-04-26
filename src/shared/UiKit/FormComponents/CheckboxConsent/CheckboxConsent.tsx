import React, { useId } from 'react';
import { FieldErrors, UseFormRegister, Path } from 'react-hook-form';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import {
  ConsentCheckbox,
  ConsentContainer,
  ConsentLabel,
  ConsentText,
  CustomCheckbox,
  LinkPolitics,
} from './CheckboxConsent.styled.ts';
import { usePrivacyPolicyQuery } from '@/entities/userAgreements/queries.ts';
import { handleFileDownload } from '@/shared/utils/handlAgreementDownload.ts';

interface FormWithConsent {
  consent: boolean;
}

interface CheckboxConsentProps<T extends FormWithConsent> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  instanceId?: string;
}

const CheckboxConsent = <T extends FormWithConsent>({
  register,
  errors,
  instanceId,
}: CheckboxConsentProps<T>): React.ReactElement => {
  const uniqueId = useId();
  const checkboxId = instanceId || `consent-checkbox-${uniqueId}`;

  const { data } = usePrivacyPolicyQuery();

  const handlePrivacyPolicyDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fileName = data?.url?.split('/').pop() || 'privacy-policy.pdf';
    handleFileDownload(data?.url || '', fileName, e);
  };

  return (
    <ConsentContainer>
      <ConsentLabel htmlFor={checkboxId}>
        <ConsentCheckbox
          id={checkboxId}
          {...register('consent' as Path<T>, {
            required: 'Вы должны согласиться с пользовательским соглашением',
          })}
        />
        <CustomCheckbox />
        <ConsentText>
          Нажимая кнопку &laquo;Отправить&raquo;, вы&nbsp;даёте согласие на{' '}
          <LinkPolitics
            href={data?.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Политика конфиденциальности"
            onClick={handlePrivacyPolicyDownload}
          >
            обработку персональных данных
          </LinkPolitics>
        </ConsentText>
      </ConsentLabel>
      {errors.consent && (
        <ErrorMessage
          message={typeof errors.consent?.message === 'string' ? errors.consent.message : undefined}
        />
      )}
    </ConsentContainer>
  );
};

export default CheckboxConsent;
