import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormInput } from '@/shared/UiKit/FormComponents/FormInput/FormInput';
import FormTextArea from '@/shared/UiKit/FormComponents/FormTextArea/FormTextArea';
import CheckboxConsent from '@/shared/UiKit/FormComponents/CheckboxConsent/CheckboxConsent';
import { PrimaryButton } from '@/shared/UiKit/Buttons';
import { FormTypes } from '@/shared/UiKit/FormComponents/FormTypes';
import { usePostFeedbackFormMutation } from '@/entities/feedbackForm/queries';
import { FeedbackFormReqDto } from '@/shared/api/hooks/feedback/types';
import ErrorMessage from '@/shared/UiKit/FormComponents/ErrorMessage/ErrorMessage';
import SuccessMessage from '@/shared/UiKit/FormComponents/SuccessMessage/SuccessMessage';
import { getValidationTitleRules } from '@/shared/constants/validationRules/validationText';
import ReCaptchaComponent from '@/shared/UiKit/ReCaptchaComponent/ReCaptchaComponent';

import {
  FeedbackContainer,
  Form,
  FormTitle,
  HighlightedText,
} from '@/features/feedbackForm/ui/feedBackForm.styled.ts';
import { useLocation } from 'react-router-dom';
import {
  CAPTCHA_THRESHOLD,
  MAX_NAME_LENGTH,
  MAX_MESSAGE_LENGTH,
  SUCCESS_MESSAGE_TIMEOUT,
} from '@/features/feedbackForm/ui/feedBackForm.const.ts';

interface FeedBackFormProps {
  isFooter?: boolean;
}
export const FeedBackForm = ({ isFooter }: FeedBackFormProps) => {
  const {
    mutate,
    isError,
    error,
    isSuccess,
    isPending,
    reset: resetMutation,
  } = usePostFeedbackFormMutation();

  const location = useLocation();
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [resetCaptcha, setResetCaptcha] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    control,
    reset: resetForm,
  } = useForm<FormTypes>({
    defaultValues: { name: '', message: '', consent: false },
    mode: 'onChange',
  });

  const name = watch('name', '');
  const message = watch('message', '');

  const handleCaptchaChange = useCallback((verified: boolean) => {
    setIsCaptchaVerified(verified);
  }, []);

  useEffect(() => {
    if (buttonClickCount >= CAPTCHA_THRESHOLD) {
      setShowCaptcha(true);
    }
  }, [buttonClickCount]);

  useEffect(() => {
    resetForm();
  }, [location.pathname, resetForm]);

  const onSubmit = (data: FormTypes) => {
    if (showCaptcha && !isCaptchaVerified) {
      return;
    }

    const feedbackData: FeedbackFormReqDto = {
      name: data.name,
      review_text: data.message,
    };

    mutate(feedbackData, {
      onSuccess: () => {
        resetForm();
        setIsCaptchaVerified(false);
        setShowCaptcha(false);
        setButtonClickCount(0);
      },
    });
  };

  const handleButtonClick = useCallback(() => {
    setButtonClickCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(() => resetMutation(), SUCCESS_MESSAGE_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess, resetMutation]);

  useEffect(() => {
    if (resetCaptcha) {
      setResetCaptcha(false);
    }
  }, [resetCaptcha]);

  return (
    <FeedbackContainer>
      <FormTitle>
        Мы были бы рады <HighlightedText>услышать ваше мнение</HighlightedText>
      </FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="name"
          register={register}
          errors={errors}
          placeholder="Ваше имя"
          maxLength={MAX_NAME_LENGTH}
          value={name}
          validationRules={getValidationTitleRules(MAX_NAME_LENGTH, 0, true)}
        />
        <FormTextArea
          name="message"
          register={register}
          placeholder="Ваше сообщение"
          errors={errors}
          control={control}
          defaultValue={message}
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <CheckboxConsent register={register} errors={errors} instanceId="footer-consent" />

        {isError && <ErrorMessage message={`Произошла ошибка при отправке: ${error?.message}`} />}

        {showCaptcha && (
          <ReCaptchaComponent onVerify={handleCaptchaChange} resetCaptcha={resetCaptcha} />
        )}

        <PrimaryButton
          type="submit"
          label={isPending ? 'Отправка...' : 'Отправить'}
          $btnType="colored"
          aria-label="Отправить форму"
          onClick={handleButtonClick}
          $isFooter={isFooter}
          disabled={isSubmitting}
        />

        {isSuccess && <SuccessMessage message="Отзыв успешно отправлен!" />}
      </Form>
    </FeedbackContainer>
  );
};
