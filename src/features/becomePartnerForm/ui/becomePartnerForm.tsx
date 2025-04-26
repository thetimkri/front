import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import { useBecomePartnerForm } from '@/features/becomePartnerForm/model/useBecomePartnerForm.ts';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput';

import { truncateFileName } from '@/shared/utils/truncateFileName';
import FormContainer from '@/widgets/Form/FormContainer';
import {
  getValidationTitleRules,
  getValidationTextRules,
} from '@/shared/constants/validationRules/validationText';
import {
  FormInputContainer,
  FormInputTitle,
  FormInputWrapper,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled';
import CheckboxConsent from '@/shared/UiKit/FormComponents/CheckboxConsent/CheckboxConsent';
import FormUploadImageComponent from '@/shared/UiKit/FormComponents/FormImageUpload/FormImageUploadComponents/FormUploadImageComponent';
import FormPhoneInput from '@/shared/UiKit/FormComponents/FormPhoneInput/FormPhoneInput';
import FormTextArea from '@/shared/UiKit/FormComponents/FormTextArea/FormTextArea';
import ReCaptchaComponent from '@/shared/UiKit/ReCaptchaComponent/ReCaptchaComponent';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { SubmitModal } from '@/shared/UiKit/Modals/SubmitModal/SubmitModal';
import {
  CAPTCHA_THRESHOLD,
  MAX_NAME_LENGTH,
  MAX_COMPANY_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_TEXTAREA_LENGTH,
  MAX_URL_LENGTH,
} from './becomPartnerForm.const';
import {
  FormSubmitContainer,
  FormTelephoneContainer,
  FormTelephoneRegion,
  FormWrap,
} from './becomePartnerForm.styled';

export const BecomePartnerForm = () => {
  const { becomePartnerData, isError, error, isSuccess, isPending } = useBecomePartnerForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [resetCaptcha, setResetCaptcha] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [buttonClickCount, setButtonClickCount] = useState<number>(0);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormTypes>({
    defaultValues: {
      surname: '',
      name: '',
      patronymic: '',
      companyName: '',
      companyEmail: '',
      companyPhone: '',
      companyAbout: '',
      companyLinkURL: '',
      image: null,
      consent: false,
    },
    mode: 'onChange',
  });

  const name = watch('name', '');
  const surname = watch('surname', '');
  const patronymic = watch('patronymic', '');
  const companyName = watch('companyName', '');
  const companyEmail = watch('companyEmail', '');
  const companyAbout = watch('companyAbout', '');
  const companyLinkURL = watch('companyLinkURL', '');

  const handleCaptchaChange = useCallback((verified: boolean) => {
    setIsCaptchaVerified(verified);
  }, []);

  useEffect(() => {
    if (buttonClickCount >= CAPTCHA_THRESHOLD) {
      setShowCaptcha(true);
    }
  }, [buttonClickCount]);

  const handleButtonClick = useCallback(() => {
    setButtonClickCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (resetCaptcha) {
      setResetCaptcha(false);
    }
  }, [resetCaptcha]);

  const onSubmit = async (data: FormTypes) => {
    if (showCaptcha && !isCaptchaVerified) {
      return;
    }

    try {
      const formData = new FormData();

      formData.append('first_name', data.name.trim());
      formData.append('last_name', data.surname.trim());
      if (data.patronymic) formData.append('middle_name', data.patronymic.trim());
      formData.append('company_name', data.companyName.trim());
      formData.append('email', data.companyEmail.trim());
      formData.append('phone', data.companyPhone.trim());
      formData.append('about', data.companyAbout.trim());
      formData.append('link_url', data.companyLinkURL.trim());

      if (data.image instanceof File) {
        const truncatedFile = truncateFileName(data.image);
        formData.append('image', truncatedFile);
      }

      const res = await becomePartnerData(formData);
      if (!res) {
        console.log('Ошибка:', res);
      }
      reset();
      setIsModalOpen(true);
      setIsCaptchaVerified(false);
      setShowCaptcha(false);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormContainer title="Стать партнером">
        <FormWrap onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <FormInputTitle>Ваше ФИО</FormInputTitle>
            <FormInputWrapper>
              <FormInput<FormTypes>
                name="surname"
                register={register}
                errors={errors}
                placeholder="Фамилия"
                maxLength={MAX_NAME_LENGTH}
                value={surname}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH)}
              />
              <FormInput<FormTypes>
                name="name"
                register={register}
                errors={errors}
                placeholder="Имя"
                maxLength={MAX_NAME_LENGTH}
                value={name}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH)}
              />
              <FormInput<FormTypes>
                name="patronymic"
                register={register}
                errors={errors}
                placeholder="Отчество"
                maxLength={MAX_NAME_LENGTH}
                value={patronymic}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 4, true)}
              />
            </FormInputWrapper>
          </FormInputContainer>
          <FormInputContainer>
            <FormInputTitle>Название Вашей компании</FormInputTitle>
            <FormInput<FormTypes>
              name="companyName"
              register={register}
              errors={errors}
              placeholder="Название компании"
              maxLength={MAX_COMPANY_LENGTH}
              value={companyName}
              validationRules={getValidationTextRules(MAX_COMPANY_LENGTH)}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ваш Email</FormInputTitle>
            <FormInput<FormTypes>
              name="companyEmail"
              register={register}
              errors={errors}
              placeholder="Email"
              maxLength={MAX_EMAIL_LENGTH}
              value={companyEmail}
              validationRules={getValidationTextRules(MAX_EMAIL_LENGTH, 'email')}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ваш номер телефона</FormInputTitle>
            <FormTelephoneContainer>
              <FormTelephoneRegion>+{'7'}</FormTelephoneRegion>
              <FormPhoneInput<FormTypes> name="companyPhone" control={control} errors={errors} />
            </FormTelephoneContainer>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>О компании</FormInputTitle>
            <FormTelephoneContainer>
              <FormTextArea
                name={'companyAbout'}
                register={register}
                placeholder={'Напишите о Вашей компании'}
                control={control}
                errors={errors}
                defaultValue={companyAbout}
                maxLength={MAX_TEXTAREA_LENGTH}
              />
            </FormTelephoneContainer>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ссылка на ваш сайт или соц.сеть</FormInputTitle>
            <FormInput<FormTypes>
              name="companyLinkURL"
              register={register}
              errors={errors}
              placeholder="Ссылка"
              maxLength={MAX_URL_LENGTH}
              value={companyLinkURL}
              validationRules={getValidationTextRules(MAX_URL_LENGTH, 'url')}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Добавить логотип Вашей компании</FormInputTitle>
            <FormUploadImageComponent
              name={'image'}
              control={control}
              errors={errors}
              isSubmitting={isSubmitting}
              required={true}
            />
          </FormInputContainer>

          <div>
            <CheckboxConsent
              register={register}
              errors={errors}
              instanceId="BecomePartner-consent"
            />
          </div>
          {showCaptcha && (
            <ReCaptchaComponent onVerify={handleCaptchaChange} resetCaptcha={resetCaptcha} />
          )}

          {isError && <ErrorMessage message={`Произошла ошибка при отправке: ${error?.message}`} />}

          <FormSubmitContainer>
            <PrimaryButton
              type="submit"
              $btnType="colored"
              label={isPending ? 'Отправка...' : 'Отправить'}
              size="50%"
              aria-label="Отправить форму"
              onClick={handleButtonClick}
              disabled={isSubmitting}
            />
          </FormSubmitContainer>
        </FormWrap>
      </FormContainer>

      {isSuccess && (
        <SubmitModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          message={'Ваша форма успешно отправлена!'}
        />
      )}
    </>
  );
};
