import FormContainer from '@/widgets/Form/FormContainer.tsx';
import {
  KindDirectoryFormSubmitContainer,
  KindDirectoryFormWrap,
  KindDirectoryFormWrapper,
  ToggleCircle,
  ToggleContainer,
  ToggleWrapper,
} from '@/features/joinDirectoryForm/ui/joinDirectoryForm.styled.ts';
import {
  FormInputContainer,
  FormInputTitle,
  FormInputWrapper,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled.ts';
import React, { useCallback, useEffect, useState } from 'react';
import {
  getOptionalAddressRules,
  getOptionalLocationRules,
  getStoryValidationRules,
  getValidationAddressRules,
  getValidationTitleRules,
} from '@/shared/constants/validationRules/validationText.ts';
import { useForm } from 'react-hook-form';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { SubmitModal } from '@/shared/UiKit/Modals/SubmitModal/SubmitModal.tsx';
import CheckboxConsent from '@/shared/UiKit/FormComponents/CheckboxConsent/CheckboxConsent.tsx';
import ReCaptchaComponent from '@/shared/UiKit/ReCaptchaComponent/ReCaptchaComponent.tsx';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput.tsx';
import LocationSearchComponent from '@/shared/UiKit/FormComponents/LocationSearchComponent/LocationSearchComponent.tsx';
import { CreateCityDto } from '@/shared/api/hooks/locations/types.ts';
import { UseJoinDirectoryForm } from '@/features/joinDirectoryForm/model/useJoinDirectoryForm.ts';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage.tsx';
import {
  CAPTCHA_THRESHOLD,
  MAX_ADDRESS_LENGTH,
  MAX_ACTIVITY_LENGTH,
  MAX_LOCATION_LENGTH,
  MAX_NAME_LENGTH,
  MAX_SERVICES_LENGTH,
  MAX_COMPANY_TITLE_LENGTH,
} from '@/features/joinDirectoryForm/ui/joinDirectoryForm.const.ts';
import SocialLinksComponent from '@/shared/UiKit/FormComponents/SocialLinksComponent/SocialLinksComponent.tsx';
import WorkingHoursComponent from '@/shared/UiKit/FormComponents/WorkingHoursComponent/WorkingHoursComponent.tsx';
import { KindDirectoryFormReqDto } from '@/shared/api/hooks/joinDirectoryForm/types.ts';

export const JoinDirectoryForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [resetCaptcha, setResetCaptcha] = useState<boolean>(false);
  const [buttonClickCount, setButtonClickCount] = useState<number>(0);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [selectedCityId, setSelectedCityId] = useState<CreateCityDto['pk'] | undefined>(undefined);
  const [isOn, setIsOn] = useState<boolean>(false);

  const { isPending, isSuccess, isError, error, joinDirectoryData } = UseJoinDirectoryForm();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    defaultValues: {
      last_name: '',
      first_name: '',
      patronymic_name: '',
      title: '',
      services_description: '',
      description: '',
      online: false,
      links: [],
      locationInfo: {
        location: 0,
        address: '',
        start_time: '',
        end_time: '',
        comment_for_working_hours: '',
      },
      region: '',
      city: '',
      consent: false,
      country: 'Россия',
    },
    mode: 'onTouched',
  });

  const name = watch('first_name', '');
  const surname = watch('last_name', '');
  const patronymic = watch('patronymic_name', '');
  const title = watch('title', '');
  const servicesDescription = watch('services_description', '');
  const description = watch('description', '');
  const address = watch('address', '');
  const online = watch('online', false);

  const handleCaptchaChange = useCallback((verified: boolean) => {
    setIsCaptchaVerified(verified);
  }, []);

  useEffect(() => {
    if (online) {
      clearErrors(['address', 'locationInfo.location', 'region', 'city', 'locationInfo.address']);
    }
  }, [online, clearErrors]);

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedCityId) {
      setValue('locationInfo.location', selectedCityId);
    }
  }, [selectedCityId, setValue]);

  useEffect(() => {
    if (address && typeof address === 'string') {
      setValue('locationInfo.address', address);
    }
  }, [address, setValue]);

  const handleAddressFieldChange = (fieldName: string) => {
    return () => {
      if (online) {
        clearErrors(fieldName);
      }
    };
  };
  useEffect(() => {
    if (online) {
      setValue('locationInfo.location', null);
    } else if (selectedCityId) {
      setValue('locationInfo.location', selectedCityId);
    }
  }, [selectedCityId, setValue, online]);

  const onSubmit = async (data: FormTypes) => {
    if (showCaptcha && !isCaptchaVerified) {
      return;
    }

    if (!data.online && !selectedCityId) {
      console.error('Город не выбран');
      return;
    }

    const links = data.links.filter((link) => link && link.type && link.url);

    const locationInfoData = {
      ...data.locationInfo,
      location: data.online ? null : data.locationInfo.location,
      start_time: data.locationInfo.start_time.replace(/^с\s+/, ''),
      end_time: data.locationInfo.end_time.replace(/^до\s+/, ''),
    };

    const requestData: KindDirectoryFormReqDto = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      patronymic_name: data.patronymic_name ? data.patronymic_name.trim() : undefined,
      title: data.title.trim(),
      description: data.description.trim(),
      services_description: data.services_description.trim(),
      online: data.online,
      links: links,
      locationInfo: locationInfoData,
    };

    try {
      const response = await joinDirectoryData(requestData);
      if (!response) {
        console.log('Ошибка:', error);
        return;
      }

      reset();

      clearErrors();
      setValue('region', '');
      setValue('city', '');
      setValue('locationInfo.location', 0);
      setValue('address', '');

      setIsOn(false);
      setSelectedCityId(undefined);
      setIsModalOpen(true);
      setIsCaptchaVerified(false);
      setShowCaptcha(false);
      setButtonClickCount(0);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  useEffect(() => {
    if (online) {
      setValue('locationInfo.location', null);
      clearErrors(['address', 'locationInfo.location', 'region', 'city', 'locationInfo.address']);
    } else if (selectedCityId) {
      setValue('locationInfo.location', selectedCityId);
    } else {
      setValue('locationInfo.location', 0);
    }
  }, [online, clearErrors, setValue, selectedCityId]);

  return (
    <>
      <FormContainer title="Добавиться в справочник">
        <KindDirectoryFormWrap onSubmit={handleSubmit(onSubmit)}>
          <FormInputContainer>
            <FormInputTitle>Ваше ФИО</FormInputTitle>
            <FormInputWrapper>
              <FormInput<FormTypes>
                name="last_name"
                register={register}
                errors={errors}
                placeholder="Фамилия"
                maxLength={MAX_NAME_LENGTH}
                value={surname}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 0, true)}
              />
              <FormInput<FormTypes>
                name="first_name"
                register={register}
                errors={errors}
                placeholder="Имя"
                maxLength={MAX_NAME_LENGTH}
                value={name}
                validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 0, true)}
              />
              <FormInput<FormTypes>
                name="patronymic_name"
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
            <FormInputTitle>Название Вашей организации</FormInputTitle>
            <FormInput<FormTypes>
              name={'title'}
              register={register}
              errors={errors}
              placeholder="Название организации"
              maxLength={MAX_COMPANY_TITLE_LENGTH}
              value={title}
              validationRules={getStoryValidationRules(1, MAX_COMPANY_TITLE_LENGTH)}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Какие Вы услуги предоставляете?</FormInputTitle>
            <FormInput<FormTypes>
              name={'services_description'}
              register={register}
              errors={errors}
              placeholder="Название услуг"
              maxLength={MAX_SERVICES_LENGTH}
              value={servicesDescription}
              validationRules={getStoryValidationRules(1, MAX_SERVICES_LENGTH, true)}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Деятельность Вашей компании</FormInputTitle>
            <FormInput<FormTypes>
              name={'description'}
              register={register}
              errors={errors}
              placeholder="Деятельность компании"
              maxLength={MAX_ACTIVITY_LENGTH}
              value={description}
              validationRules={getStoryValidationRules(1, MAX_ACTIVITY_LENGTH, true)}
            />
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Адрес организации</FormInputTitle>
            <FormInputWrapper>
              <LocationSearchComponent
                register={register}
                errors={errors}
                maxLocationLength={MAX_LOCATION_LENGTH}
                setValue={setValue}
                prefix={''}
                type={'company'}
                watch={watch}
                setSelectedCityId={setSelectedCityId}
                instanceId={'company'}
                validationRules={
                  online
                    ? getOptionalLocationRules(MAX_LOCATION_LENGTH)
                    : getValidationTitleRules(MAX_LOCATION_LENGTH)
                }
              />
            </FormInputWrapper>
            <KindDirectoryFormWrapper>
              <FormInput<FormTypes>
                name={'address'}
                register={register}
                errors={errors}
                placeholder="Улица, дом, помещение"
                maxLength={MAX_ADDRESS_LENGTH}
                value={address}
                validationRules={
                  online
                    ? getOptionalAddressRules(MAX_ADDRESS_LENGTH)
                    : getValidationAddressRules(MAX_ADDRESS_LENGTH)
                }
                onChange={handleAddressFieldChange('address')}
                customRegisterOptions={{
                  onChange: () => {
                    if (online) {
                      clearErrors('address');
                    }
                  },
                }}
              />
            </KindDirectoryFormWrapper>
          </FormInputContainer>

          <FormInputContainer>
            <FormInputTitle>Время работы</FormInputTitle>
            <WorkingHoursComponent
              register={register}
              setValue={setValue}
              errors={errors}
              watch={watch}
              maxLength={MAX_COMPANY_TITLE_LENGTH}
              isSuccess={isSuccess}
              clearErrors={clearErrors}
              trigger={trigger}
            />
          </FormInputContainer>

          <FormInputContainer>
            <ToggleContainer>
              <ToggleWrapper
                $isOn={isOn}
                onClick={() => {
                  const newValue = !isOn;
                  setIsOn(newValue);
                  setValue('online', newValue);
                }}
              >
                <ToggleCircle $isOn={isOn} />
              </ToggleWrapper>
              <FormInputTitle>Услуга онлайн</FormInputTitle>
            </ToggleContainer>
            <input type="hidden" {...register('online')} value={isOn ? 'true' : 'false'} />
          </FormInputContainer>

          <SocialLinksComponent
            register={register}
            setValue={setValue}
            errors={errors}
            watch={watch}
            maxLength={MAX_COMPANY_TITLE_LENGTH}
            isSuccess={isSuccess}
            requireFirstLink={true}
            trigger={trigger}
          />

          <div>
            <CheckboxConsent
              register={register}
              errors={errors}
              instanceId="kindDirectoryForm-consent"
            />
          </div>

          {showCaptcha && (
            <ReCaptchaComponent onVerify={handleCaptchaChange} resetCaptcha={resetCaptcha} />
          )}
          <KindDirectoryFormSubmitContainer>
            <PrimaryButton
              type="submit"
              $btnType="colored"
              label={isPending ? 'Отправка...' : 'Отправить'}
              size="50%"
              aria-label="Отправить форму"
              onClick={handleButtonClick}
              disabled={isSubmitting}
            />
          </KindDirectoryFormSubmitContainer>
        </KindDirectoryFormWrap>
        {isError && <ErrorMessage message={`Произошла ошибка при отправке: ${error?.message}`} />}
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
