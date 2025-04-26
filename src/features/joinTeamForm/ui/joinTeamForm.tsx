import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  JoinTeamFormWrap,
  JoinTeamFormTelephoneContainer,
  JoinTeamFormTelephoneRegion,
  JoinTeamFormSubmitContainer,
} from '@/features/joinTeamForm/ui/joinTeamForm.styled';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import {
  FormInputContainer,
  FormInputTitle,
  FormInputWrapper,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled';
import FormContainer from '@/widgets/Form/FormContainer';
import FormPhoneInput from '@/shared/UiKit/FormComponents/FormPhoneInput/FormPhoneInput';
import FormRoleComponent from '@/shared/UiKit/FormComponents/FormRoleSelect/FormRoleComponent/FormRoleComponent';
import FormTextArea from '@/shared/UiKit/FormComponents/FormTextArea/FormTextArea';
import { options } from '@/pages/joinTeamPage/mock/options';
import FormUploadImageComponent from '@/shared/UiKit/FormComponents/FormImageUpload/FormImageUploadComponents/FormUploadImageComponent';
import CheckboxConsent from '@/shared/UiKit/FormComponents/CheckboxConsent/CheckboxConsent';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { SubmitModal } from '@/shared/UiKit/Modals/SubmitModal/SubmitModal';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage';
import LocationSearchComponent from '@/shared/UiKit/FormComponents/LocationSearchComponent/LocationSearchComponent';
import { getValidationTitleRules } from '@/shared/constants/validationRules/validationText';
import ReCaptchaComponent from '@/shared/UiKit/ReCaptchaComponent/ReCaptchaComponent';
import { AuthorFields } from '@/shared/UiKit/FormComponents/AuthorsField/AuthorFields.tsx';
import { CreateCityDto } from '@/shared/api/hooks/locations/types.ts';
import { useJoinTeamForm } from '@/features/joinTeamForm/model/useJoinTeamForm.ts';
import { truncateFileName } from '@/shared/utils/truncateFileName';
import {
  CAPTCHA_THRESHOLD,
  MAX_LOCATION_LENGTH,
  MAX_NAME_LENGTH,
  MAX_TEXTAREA_LENGTH,
} from './joinTeamForm.const';

export const JoinTeamForm = () => {
  const { joinTeamData, isError, error, isSuccess, isPending } = useJoinTeamForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [resetCaptcha, setResetCaptcha] = useState<boolean>(false);
  const [buttonClickCount, setButtonClickCount] = useState<number>(0);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [selectedCityId, setSelectedCityId] = useState<CreateCityDto['pk'] | undefined>(undefined);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormTypes>({
    defaultValues: {
      surname: '',
      name: '',
      patronymic: '',
      phone: '',
      description: '',
      consent: false,
      image: null,
      role: '',
      country: 'Россия',
      region: '',
      city: '',
      location: undefined,
    },
    mode: 'onChange',
  });

  const name = watch('name', '');
  const surname = watch('surname', '');
  const patronymic = watch('patronymic', '');
  const description = watch('description', '');

  const handleCaptchaChange = useCallback((verified: boolean) => {
    setIsCaptchaVerified(verified);
  }, []);

  useEffect(() => {
    if (buttonClickCount >= CAPTCHA_THRESHOLD) {
      setShowCaptcha(true);
    }
  }, [buttonClickCount]);

  const onSubmit = async (data: FormTypes) => {
    if (showCaptcha && !isCaptchaVerified) {
      return;
    }

    if (!selectedCityId) {
      console.error('Город не выбран');
      return;
    }

    try {
      const formData = new FormData();

      formData.append('first_name', data.name.trim());
      formData.append('last_name', data.surname.trim());
      formData.append('patronymic_name', data.patronymic?.trim() || '');
      formData.append('location', selectedCityId.toString());
      formData.append('role', data.role);
      formData.append('phone', data.phone);
      formData.append('about', data.description);

      if (data.image instanceof File) {
        const truncatedFile = truncateFileName(data.image);
        formData.append('image', truncatedFile);
      }
      const response = await joinTeamData(formData);
      if (!response) {
        console.log('Ошибка:', response);
      }

      reset();
      setIsModalOpen(true);
      setIsCaptchaVerified(false);
      setShowCaptcha(false);
      setButtonClickCount(0);
      setSelectedCityId(undefined);
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
    }
  };

  const handleButtonClick = useCallback(() => {
    setButtonClickCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (resetCaptcha) {
      setResetCaptcha(false);
    }
  }, [resetCaptcha]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormContainer title="Хочу в команду">
        <JoinTeamFormWrap onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <FormInputTitle>Ваше ФИО</FormInputTitle>
            <FormInputWrapper>
              <AuthorFields
                register={register}
                errors={errors}
                maxLength={MAX_NAME_LENGTH}
                values={{
                  surname,
                  name,
                  patronymic,
                }}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 0, true)}
              />
            </FormInputWrapper>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ваше место проживания</FormInputTitle>
            <FormInputWrapper>
              <LocationSearchComponent
                register={register}
                errors={errors}
                maxLocationLength={MAX_LOCATION_LENGTH}
                setValue={setValue}
                type={'residence'}
                watch={watch}
                setSelectedCityId={setSelectedCityId}
                instanceId={'residence'}
                validationRules={getValidationTitleRules(MAX_LOCATION_LENGTH, 0, true)}
              />
            </FormInputWrapper>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ваш номер телефона</FormInputTitle>
            <JoinTeamFormTelephoneContainer>
              <JoinTeamFormTelephoneRegion>+{'7'}</JoinTeamFormTelephoneRegion>
              <FormPhoneInput<FormTypes> name="phone" control={control} errors={errors} />
            </JoinTeamFormTelephoneContainer>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Роль в команде</FormInputTitle>
            <FormRoleComponent<FormTypes>
              name="role"
              control={control}
              errors={errors}
              options={options}
              placeholder={'Выбрать'}
              maxHeight={'300px'}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>О себе</FormInputTitle>
            <JoinTeamFormTelephoneContainer>
              <FormTextArea
                name={'description'}
                register={register}
                placeholder={'Напишите о себе'}
                control={control}
                errors={errors}
                defaultValue={description}
                maxLength={MAX_TEXTAREA_LENGTH}
              />
            </JoinTeamFormTelephoneContainer>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Ваше фото</FormInputTitle>
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
              instanceId="JoinTeamForm-consent"
            />
          </div>

          {showCaptcha && (
            <ReCaptchaComponent onVerify={handleCaptchaChange} resetCaptcha={resetCaptcha} />
          )}

          {isError && <ErrorMessage message={`Произошла ошибка при отправке: ${error?.message}`} />}

          <JoinTeamFormSubmitContainer>
            <PrimaryButton
              type="submit"
              $btnType="colored"
              label={isPending ? 'Отправка...' : 'Отправить'}
              size="50%"
              aria-label="Отправить форму"
              onClick={handleButtonClick}
              disabled={isSubmitting}
            />
          </JoinTeamFormSubmitContainer>
        </JoinTeamFormWrap>
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
