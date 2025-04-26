import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import 'ckeditor5/ckeditor5.css';
import FormContainer from '@/widgets/Form/FormContainer';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import {
  FormInputTitle,
  FormInputWrapper,
  TellStoryImageContainer,
  TellStoryInputContainer,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled';
import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput';
import CheckboxConsent from '@/shared/UiKit/FormComponents/CheckboxConsent/CheckboxConsent';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import FormUploadImageComponent from '@/shared/UiKit/FormComponents/FormImageUpload/FormImageUploadComponents/FormUploadImageComponent.tsx';
import FormUploadAnotherImageComponent from '@/shared/UiKit/FormComponents/FormImageUpload/FormImageUploadComponents/FormUploadAnotherImageComponent.tsx';
import StoryEditor, {
  StoryEditorRef,
} from '@/shared/UiKit/FormComponents/StoryEditor/StoryEditor.tsx';
import {
  getValidationTextRules,
  getValidationTitleRules,
} from '@/shared/constants/validationRules/validationText.ts';
import { SubmitModal } from '@/shared/UiKit/Modals/SubmitModal/SubmitModal';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage';
import { AuthorFields } from '@/shared/UiKit/FormComponents/AuthorsField/AuthorFields.tsx';
import LocationSearchComponent from '@/shared/UiKit/FormComponents/LocationSearchComponent/LocationSearchComponent.tsx';
import { CreateStoryWithAuthorRequest } from '@/shared/api/hooks/stories/types.ts';
import ReCaptchaComponent from '@/shared/UiKit/ReCaptchaComponent/ReCaptchaComponent.tsx';
import { CreateCityDto } from '@/shared/api/hooks/locations/types.ts';
import { truncateFileName } from '@/shared/utils/truncateFileName';

import {
  useCreateStory,
  useCreateStoryAddAuthors,
  useCreateStoryAddImages,
} from '@/features/tellStoryForm/model/useCreateStory.ts';
import {
  CAPTCHA_THRESHOLD,
  MAX_LOCATION_LENGTH,
  MAX_NAME_LENGTH,
  MAX_TITLE_LENGTH,
} from './tellStoryForm.const';
import {
  TellStoryContainer,
  TellStoryFormStyle,
  TellStoryFormSubmitContainer,
} from './tellStoryForm.styled';
import { AddButton } from '@/shared/UiKit/Buttons/AddButton/AddButton.tsx';

const TellStoryForm = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Добавить автора');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const editorRef = useRef<StoryEditorRef>(null);
  const [storyCityId, setStoryCityId] = useState<CreateCityDto['pk'] | undefined>(undefined);
  const [authorCityId, setAuthorCityId] = useState<CreateCityDto['pk'] | undefined>(undefined);
  const [additionalCityIds, setAdditionalCityIds] = useState<(CreateCityDto['pk'] | undefined)[]>(
    []
  );
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [resetCaptcha, setResetCaptcha] = useState<boolean>(false);
  const [buttonClickCount, setButtonClickCount] = useState<number>(0);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);

  const handleCaptchaChange = useCallback((verified: boolean) => {
    setIsCaptchaVerified(verified);
  }, []);

  const { createStory, isSuccess, isError, error, isPending } = useCreateStory();
  const {
    createStoryAddImages,
    isError: isImagesError,
    error: imagesError,
  } = useCreateStoryAddImages();

  const {
    // isLoading: isAuthorsLoading,
    createStoryAddAuthors,
    // isSuccess: sAuthorsSuccess,
    isError: isAuthorsError,
  } = useCreateStoryAddAuthors();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormTypes>({
    defaultValues: {
      title: '',
      authorCountry: 'Россия',
      authorRegion: '',
      authorCity: '',
      additionalAuthors: [],
      additionalLocations: [],
      surname: '',
      name: '',
      patronymic: '',
      main_image: null,
      additionalPhotos: null,
      consent: false,
      description: '',
    },
    mode: 'onChange',
  });

  const title = watch('title', '');
  const surname = watch('surname', '');
  const name = watch('name', '');
  const patronymic = watch('patronymic', '');

  const {
    fields: authorFields,
    append: appendAuthor,
    remove: removeAuthor,
  } = useFieldArray({
    control,
    name: 'additionalAuthors',
  });

  const {
    fields: locationFields,
    append: appendLocation,
    remove: removeLocation,
  } = useFieldArray({
    control,
    name: 'additionalLocations',
  });

  const handleAddAuthorAndLocation = () => {
    appendAuthor({
      surname: '',
      name: '',
      patronymic: '',
      location: undefined,
    });

    appendLocation({
      country: 'Россия',
      region: '',
      city: '',
      location: undefined,
    });

    appendAuthor({
      surname: '',
      name: '',
      patronymic: '',
      location: undefined,
    });

    appendLocation({
      country: 'Россия',
      region: '',
      city: '',
      location: undefined,
    });
  };

  const handleRemoveAuthorAndLocation = () => {
    removeAuthor();
    removeLocation();
  };

  const handleAddOrRemoveFields = () => {
    if (authorFields.length > 0 && locationFields.length > 0) {
      handleRemoveAuthorAndLocation();
    } else {
      handleAddAuthorAndLocation();
    }
  };

  useEffect(() => {
    setIsActive(authorFields.length > 0 && locationFields.length > 0);
    if (authorFields.length > 0 && locationFields.length > 0) {
      setButtonText('Удалить автора');
    } else {
      setButtonText('Добавить автора');
    }
  }, [authorFields.length, locationFields.length]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (dataForm: FormTypes) => {
    if (!isCaptchaVerified && showCaptcha) {
      return;
    }

    if (!storyCityId) {
      console.error('Город истории не выбран');
      return;
    }

    if (!authorCityId) {
      console.error('Город автора не выбран');
      return;
    }

    try {
      const storyFormData = new FormData();
      storyFormData.append('title', dataForm.title);
      storyFormData.append('description', dataForm.description);
      storyFormData.append('theme', '1');
      storyFormData.append('location', storyCityId.toString());

      if (dataForm.main_image instanceof File) {
        const newFile = truncateFileName(dataForm.main_image);
        storyFormData.append('main_image', newFile);
      }

      const response = await createStory(storyFormData);

      if (response?.id) {
        const authors = [
          {
            first_name: dataForm.name?.trim() || '',
            last_name: dataForm.surname?.trim() || '',
            patronymic: dataForm.patronymic?.trim() || '',
            location: authorCityId,
          },
          ...dataForm.additionalAuthors
            .map((author, index) => ({
              first_name: author.name?.trim() || '',
              last_name: author.surname?.trim() || '',
              patronymic: author.patronymic?.trim() || '',
              location: additionalCityIds[index]!,
            }))
            .filter((author) => author.first_name || author.last_name),
        ];

        const request: CreateStoryWithAuthorRequest = {
          authors: authors,
          story_id: response.id,
        };

        const authorsResponce = await createStoryAddAuthors(request);
        if (authorsResponce.authors) {
          console.log('Добавление авторов:', authorsResponce.authors);
        }
      }

      if (
        response?.id &&
        Array.isArray(dataForm.additionalPhotos) &&
        dataForm.additionalPhotos.length > 0
      ) {
        const imagesFormData = new FormData();
        imagesFormData.append('story_id', response.id.toString());

        dataForm.additionalPhotos.forEach((file) => {
          if (file instanceof File) {
            const truncatedFile = truncateFileName(file);
            imagesFormData.append('image', truncatedFile);
          }
        });

        try {
          const imagesResponse = await createStoryAddImages(imagesFormData);
          console.log('Полный ответ по изображениям:', imagesResponse);

          if (imagesResponse.images) {
            console.log('Загруженные изображения:', imagesResponse.images);
          } else {
            console.log('Изображения загружены, но URL-адреса отсутствуют в ответе');
          }
        } catch (error) {
          console.error('Ошибка при загрузке изображений:', error);
        }
      }

      reset();
      setValue('additionalAuthors', []);
      setValue('additionalLocations', []);
      setIsModalOpen(true);
      setIsCaptchaVerified(false);
      setShowCaptcha(false);
      setButtonClickCount(0);
      setStoryCityId(undefined);
      setAuthorCityId(undefined);
      setAdditionalCityIds([]);
    } catch (error) {
      console.error('Ошибка при отправке истории:', error);
    }
  };

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

  return (
    <>
      <FormContainer title="Рассказать историю">
        <TellStoryFormStyle onSubmit={handleSubmit(onSubmit)} autoComplete={'off'}>
          <TellStoryInputContainer>
            <TellStoryContainer>
              <FormInputTitle>Название Вашей истории</FormInputTitle>
              <FormInput<FormTypes>
                name="title"
                register={register}
                errors={errors}
                placeholder="Название истории"
                maxLength={MAX_TITLE_LENGTH}
                value={title}
                validationRules={getValidationTextRules(MAX_TITLE_LENGTH)}
              />
            </TellStoryContainer>

            <TellStoryContainer>
              <FormInputTitle>Описание Вашей истории</FormInputTitle>
              <StoryEditor control={control} ref={editorRef} />
            </TellStoryContainer>

            <TellStoryContainer>
              <FormInputTitle>В каком городе или стране произошла Ваша история?</FormInputTitle>
              <FormInputWrapper>
                <LocationSearchComponent
                  register={register}
                  errors={errors}
                  maxLocationLength={MAX_LOCATION_LENGTH}
                  setValue={setValue}
                  watch={watch}
                  prefix={''}
                  type={'story'}
                  setSelectedCityId={setStoryCityId}
                  instanceId={'story'}
                  validationRules={getValidationTitleRules(MAX_LOCATION_LENGTH, 0, true)}
                />
              </FormInputWrapper>
            </TellStoryContainer>

            <TellStoryContainer>
              <FormInputTitle>Автор истории</FormInputTitle>
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
            </TellStoryContainer>

            <TellStoryContainer>
              <FormInputTitle>Ваш город?</FormInputTitle>
              <FormInputWrapper>
                <LocationSearchComponent
                  register={register}
                  errors={errors}
                  maxLocationLength={MAX_LOCATION_LENGTH}
                  setValue={setValue}
                  watch={watch}
                  prefix={''}
                  type={'author'}
                  setSelectedCityId={setAuthorCityId}
                  instanceId={'author'}
                  validationRules={getValidationTitleRules(MAX_LOCATION_LENGTH, 0, true)}
                />
              </FormInputWrapper>
            </TellStoryContainer>
            <AddButton
              type="button"
              onClick={handleAddOrRemoveFields}
              isActive={isActive}
              hasError={Boolean(errors?.message)}
            >
              {buttonText}
            </AddButton>

            {authorFields.map((field, index) => (
              <React.Fragment key={`author-location-${index}`}>
                <TellStoryContainer>
                  <FormInputTitle>Автор истории</FormInputTitle>
                  <FormInputWrapper>
                    <AuthorFields
                      key={field.id}
                      register={register}
                      errors={errors}
                      maxLength={MAX_NAME_LENGTH}
                      namePrefix={`additionalAuthors.${index}`}
                      values={{
                        surname: watch(`additionalAuthors.${index}.surname`),
                        name: watch(`additionalAuthors.${index}.name`),
                        patronymic: watch(`additionalAuthors.${index}.patronymic`),
                      }}
                      validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 0, false)}
                    />
                  </FormInputWrapper>
                </TellStoryContainer>

                {locationFields[index] && (
                  <TellStoryContainer>
                    <FormInputTitle>Ваш город?</FormInputTitle>
                    <FormInputWrapper>
                      <LocationSearchComponent
                        register={register}
                        errors={errors}
                        maxLocationLength={MAX_LOCATION_LENGTH}
                        setValue={setValue}
                        watch={watch}
                        prefix={`additionalLocations.${index}`}
                        type={'author'}
                        setSelectedCityId={(cityId: CreateCityDto['pk'] | undefined) => {
                          const newCityIds = [...additionalCityIds];
                          newCityIds[index] = cityId;
                          setAdditionalCityIds(newCityIds);
                        }}
                        instanceId={`additionalLocations.${index}`}
                        validationRules={getValidationTitleRules(MAX_LOCATION_LENGTH, 0, false)}
                      />
                    </FormInputWrapper>
                  </TellStoryContainer>
                )}
              </React.Fragment>
            ))}

            <TellStoryImageContainer>
              <FormInputTitle>Главное изображение</FormInputTitle>
              <FormUploadImageComponent
                name={'main_image'}
                control={control}
                errors={errors}
                isSubmitting={isSubmitting}
              />
            </TellStoryImageContainer>

            <TellStoryImageContainer>
              <FormInputTitle>Добавить еще изображения</FormInputTitle>
              <FormUploadAnotherImageComponent
                name="additionalPhotos"
                control={control}
                errors={errors}
              />
            </TellStoryImageContainer>

            <div>
              <CheckboxConsent
                register={register}
                errors={errors}
                instanceId="TellStoryForm-consent"
              />
            </div>

            {showCaptcha && (
              <ReCaptchaComponent onVerify={handleCaptchaChange} resetCaptcha={resetCaptcha} />
            )}

            <TellStoryFormSubmitContainer>
              <PrimaryButton
                type="submit"
                $btnType="colored"
                label={isPending ? 'Отправка...' : 'Отправить'}
                size="50%"
                aria-label="Отправить форму"
                onClick={handleButtonClick}
                disabled={isSubmitting}
              />
            </TellStoryFormSubmitContainer>
          </TellStoryInputContainer>
        </TellStoryFormStyle>
        {(isError || isImagesError || isAuthorsError) && (
          <ErrorMessage
            message={`Произошла ошибка при отправке: ${error?.message || imagesError?.message}`}
          />
        )}
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

export default TellStoryForm;
