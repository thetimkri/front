import React, { useCallback, useState, useEffect, useRef } from 'react';
import {
  FormInputContainer,
  FormInputTitle,
} from '@/shared/UiKit/FormComponents/FormStyles/FormStyles.styled.ts';
import { AddButton } from '@/shared/UiKit/Buttons/AddButton/AddButton.tsx';
import SocialLinkOptions from '@/shared/UiKit/FormComponents/SocialLinkOptions/SocialLinkOptions.tsx';
import { FormTypes, SocialLink } from '@/shared/UiKit/FormComponents/FormTypes.ts';
import {
  UseFormRegister,
  UseFormSetValue,
  FieldErrors,
  UseFormWatch,
  UseFormTrigger,
} from 'react-hook-form';
import { getValidationTextRules } from '@/shared/constants/validationRules/validationText.ts';
import { AddButtonWrap } from '@/shared/UiKit/FormComponents/SocialLinkOptions/SocialLinkOptions.styled.ts';

interface SocialLinksComponentProps {
  register: UseFormRegister<FormTypes>;
  setValue: UseFormSetValue<FormTypes>;
  errors: FieldErrors<FormTypes>;
  watch: UseFormWatch<FormTypes>;
  maxLength: number;
  isSuccess?: boolean;
  requireFirstLink?: boolean;
  trigger?: UseFormTrigger<FormTypes>;
}

const SocialLinksComponent: React.FC<SocialLinksComponentProps> = ({
  register,
  setValue,
  errors,
  watch,
  maxLength,
  isSuccess,
  requireFirstLink = true,
  trigger,
}) => {
  const [selectedSocials, setSelectedSocials] = useState<string[]>([]);
  const [showAdditionalLinks, setShowAdditionalLinks] = useState<boolean>(false);
  const [socialLinks, setSocialLinks] = useState<
    Array<{ id: number; fieldName: string; typeFieldName: string; type: string | null }>
  >([{ id: Date.now(), fieldName: 'social_url_0', typeFieldName: 'social_type_0', type: null }]);

  const previousLinksRef = useRef<SocialLink[] | null>(null);

  const resetComponent = useCallback(() => {
    setSelectedSocials([]);
    setShowAdditionalLinks(false);
    setSocialLinks([
      { id: Date.now(), fieldName: 'social_url_0', typeFieldName: 'social_type_0', type: null },
    ]);

    setValue('links', []);
    setValue('social_url_0', '');
    setValue('social_type_0', '');

    for (let i = 1; i <= 3; i++) {
      setValue(`social_url_${i}`, '');
      setValue(`social_type_${i}`, '');
    }
  }, [setValue]);

  useEffect(() => {
    if (isSuccess) {
      resetComponent();
    }
  }, [isSuccess, resetComponent]);

  const handleSocialTypeChange = useCallback(
    (type: string, fieldName: string, index: number) => {
      setSelectedSocials((prev) => {
        const updatedSocials = [...prev];

        const socialLink = socialLinks.find(
          (link) => link.fieldName === fieldName || link.typeFieldName === `social_type_${index}`
        );

        if (socialLink && socialLink.type) {
          const typeIndex = updatedSocials.indexOf(socialLink.type);
          if (typeIndex !== -1) {
            updatedSocials.splice(typeIndex, 1);
          }
        }

        updatedSocials.push(type);

        return updatedSocials;
      });

      setSocialLinks((prev) =>
        prev.map((link) =>
          link.fieldName === fieldName || link.typeFieldName === `social_type_${index}`
            ? { ...link, type }
            : link
        )
      );

      const urlValue = (watch(`social_url_${index}`) as string) || '';
      updateFormLinks(type, urlValue, index);

      if (trigger) {
        trigger(`social_url_${index}`);
      }
    },
    [socialLinks, watch, trigger]
  );

  const handleSocialUrlChange = useCallback(
    (value: string, type: string | null, index: number) => {
      if (type) {
        updateFormLinks(type, value, index);
      }

      if (trigger) {
        trigger(`social_type_${index}`);
      }
    },
    [trigger]
  );

  const updateFormLinks = useCallback(
    (type: string, url: string, index: number) => {
      const currentLinks = watch('links') || [];
      const newLinks = [...currentLinks];
      newLinks[index] = { type, url };
      setValue('links', newLinks);
    },
    [setValue, watch]
  );

  const handleAddRemoveSocialLinks = useCallback(() => {
    if (showAdditionalLinks) {
      const updatedSocialLinks = socialLinks.slice(0, 1);
      setSocialLinks(updatedSocialLinks);

      const remainingTypes = updatedSocialLinks
        .map((link) => link.type)
        .filter((type): type is string => type !== null);
      setSelectedSocials(remainingTypes);

      for (let i = 1; i <= 3; i++) {
        setValue(`social_url_${i}`, '');
        setValue(`social_type_${i}`, '');
      }

      const currentLinks = watch('links') || [];
      const newLinks = currentLinks.slice(0, 1);
      setValue('links', newLinks);
    } else {
      const newLinks = [
        ...socialLinks,
        {
          id: Date.now() + 1,
          fieldName: 'social_url_1',
          typeFieldName: 'social_type_1',
          type: null,
        },
        {
          id: Date.now() + 2,
          fieldName: 'social_url_2',
          typeFieldName: 'social_type_2',
          type: null,
        },
        {
          id: Date.now() + 3,
          fieldName: 'social_url_3',
          typeFieldName: 'social_type_3',
          type: null,
        },
      ];
      setSocialLinks(newLinks);
    }

    setShowAdditionalLinks(!showAdditionalLinks);
  }, [showAdditionalLinks, socialLinks, setValue, watch]);

  useEffect(() => {
    const currentLinks = watch('links');

    if (!currentLinks && previousLinksRef.current === null) {
      setValue('links', []);
      previousLinksRef.current = [];
    } else if (JSON.stringify(currentLinks) !== JSON.stringify(previousLinksRef.current)) {
      previousLinksRef.current = currentLinks || [];
    }
  }, [setValue, watch]);

  return (
    <>
      <FormInputContainer>
        <FormInputTitle>Ссылка на ваш сайт или соц.сеть</FormInputTitle>
        {/* Первое поле для социальной ссылки (всегда видимо) */}
        <SocialLinkOptions
          key={socialLinks[0].id}
          register={register}
          setValue={setValue}
          errors={errors}
          maxLength={maxLength}
          placeholder={'Выбрать'}
          onChange={(option) => {
            handleSocialTypeChange(option, socialLinks[0].fieldName, 0);
            setValue(`social_type_0`, option);
          }}
          fieldName={`social_url_0`}
          typeFieldName={`social_type_0`}
          required={requireFirstLink}
          disabledOptions={selectedSocials.filter((s) => s !== socialLinks[0].type)}
          onUrlChange={(value) => handleSocialUrlChange(value, socialLinks[0].type, 0)}
          resetKey={isSuccess ? 'reset' : undefined}
          validationLinkRules={getValidationTextRules(maxLength, 'url', true)}
          errorMessage="Выберите значение из списка"
          watch={watch}
        />

        {/* Кнопка для добавления/удаления ссылок */}
        <AddButtonWrap style={{ marginBottom: '15px' }}>
          <AddButton
            type="button"
            onClick={handleAddRemoveSocialLinks}
            isActive={showAdditionalLinks}
            hasError={Boolean(errors?.links)}
          >
            {showAdditionalLinks ? 'Убрать ссылки' : 'Добавить ещё ссылки'}
          </AddButton>
        </AddButtonWrap>

        {/* Дополнительные поля для социальных ссылок (показываются при нажатии на кнопку) */}
        {showAdditionalLinks &&
          socialLinks.slice(1).map((link, idx) => {
            const index = idx + 1;
            return (
              <SocialLinkOptions
                key={link.id}
                register={register}
                setValue={setValue}
                errors={errors}
                maxLength={maxLength}
                placeholder={'Выбрать'}
                onChange={(option) => {
                  handleSocialTypeChange(option, link.fieldName, index);
                  setValue(`social_type_${index}`, option);
                }}
                fieldName={`social_url_${index}`}
                typeFieldName={`social_type_${index}`}
                required={false}
                disabledOptions={selectedSocials.filter((s) => s !== link.type)}
                onUrlChange={(value) =>
                  handleSocialUrlChange(value, socialLinks[index].type, index)
                }
                resetKey={isSuccess ? 'reset' : undefined}
                validationLinkRules={getValidationTextRules(maxLength, 'url', false)}
                errorMessage="Выберите значение из списка"
                watch={watch}
              />
            );
          })}
      </FormInputContainer>
    </>
  );
};

export default SocialLinksComponent;
