import { FieldValues } from 'react-hook-form';

interface AddressField {
  start_time: string;
  end_time: string;
  comment_for_working_hours?: string;
  address?: string;
  location?: number;
}

interface FormWithAddresses extends FieldValues {
  name?: string;
  addresses?: AddressField[];
}

export interface ValidationRules {
  maxLength: {
    value: number;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  required?: string;
}

export const getWorkingHoursValidationRules = () => ({
  validate: {
    maxWorkingHours: (value: string, formValues: FormWithAddresses) => {
      const fieldNameParts = formValues.name?.split('.') || [];
      const addressIndex = fieldNameParts.length > 1 ? parseInt(fieldNameParts[1], 10) : 0;

      const startTime = formValues.addresses?.[addressIndex]?.start_time || '';
      const endTime = formValues.addresses?.[addressIndex]?.end_time || '';

      if (!startTime || !endTime) return true;

      return true;
    },
  },
});

export const getRequiredWorkingHoursRules = () => ({
  required: 'Пожалуйста, выберите время работы',
});

export const getValidationTextRules = (
  maxLength: number,
  type?: 'email' | 'url' | 'text',
  isRequired: boolean = true
): ValidationRules => {
  let pattern, message;

  if (type === 'email') {
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message = 'Введите корректный email';
  } else if (type === 'url') {
    pattern =
      /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()–-]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
    message = 'Введите корректную ссылку, начиная с http:// или https://';
  } else if (type === 'text') {
    pattern = /^[а-яА-ЯёЁa-zA-Z0-9\s\-.,!?:;«»"'()—-]*$/u;
    message = 'Разрешены русские и латинские буквы, цифры, дефисы и знаки препинания';
  } else {
    pattern =
      /^[а-яА-ЯёЁa-zA-Z0-9\s\-.,!?:;«»\p{Pi}\p{Pf}"'()–-\u2014\u2026@#$%^&*+=_/\\|<>[\]{}]+$/u;
    message = 'Разрешены русские и латинские буквы, цифры, дефисы и знаки препинания';
  }

  const rules: ValidationRules = {
    maxLength: {
      value: maxLength,
      message: `Превышено допустимое количество символов`,
    },
    pattern: {
      value: pattern,
      message,
    },
  };

  if (isRequired) {
    return {
      ...rules,
      required: 'Поле ввода не может быть пустым',
    };
  }

  return rules;
};

export const getStoryValidationRules = (
  minLength: number,
  maxLength: number,
  isRequired: boolean = true
) => {
  const baseRules = {
    minLength: {
      value: minLength,
      message: `Текст должен содержать минимум ${minLength} символов`,
    },
    maxLength: {
      value: maxLength,
      message: `Текст не должен превышать ${maxLength} символов`,
    },
    pattern: {
      value:
        /^[а-яА-ЯёЁa-zA-Z0-9\s\-.,!?:;«»\p{Pi}\p{Pf}"'()–-\u2014\u2026@#$%^&*+=_/\\|<>[\]{}]+$/u,
      message: 'Разрешены только русские буквы, дефисы и знаки препинания',
    },
  };

  if (isRequired) {
    return {
      ...baseRules,
      required: 'Поле ввода не может быть пустым',
    };
  }

  return baseRules;
};

export const getValidationTitleRules = (
  maxLength: number,
  minLength?: number,
  isRequired: boolean = true
): ValidationRules => {
  const baseRules: ValidationRules = {
    maxLength: {
      value: maxLength,
      message: `Превышено допустимое количество символов`,
    },
    pattern: {
      value: /^[а-яА-ЯёЁ][а-яА-ЯёЁ\s()—-]*$/u,
      message:
        'Разрешены только русские буквы, пробелы, скобки, дефис и длинное тире. Строка должна начинаться с буквы',
    },
  };

  if (minLength !== undefined) {
    baseRules.minLength = {
      value: minLength,
      message: `Текст должен содержать минимум ${minLength} символа`,
    };
  }

  if (isRequired) {
    return {
      ...baseRules,
      required: 'Поле ввода не может быть пустым',
    };
  }

  return baseRules;
};

export const getValidationAddressRules = (maxLength: number, isRequired: boolean = true) => {
  const baseRules = {
    maxLength: {
      value: maxLength,
      message: `Превышено допустимое количество символов`,
    },
    pattern: {
      value: /^$|^[а-яА-ЯёЁ][а-яА-ЯёЁ0-9\s()–,./:;'"#&+=-_!?№@$^~\\|`<>{}[\]]*/u,
      message:
        'Разрешены только русские буквы, цифры, пробелы, скобки, точки, запятые, дефис и тире. Строка должна начинаться с буквы',
    },
  };

  if (isRequired) {
    return {
      ...baseRules,
      required: 'Поле ввода не может быть пустым',
    };
  }

  return baseRules;
};

export const getValidationPatronymicRules = (maxLength: number, minLength: number) => ({
  required: false,
  minLength: {
    value: minLength,
    message: `Текст должен содержать минимум ${minLength} символов`,
  },
  maxLength: {
    value: maxLength,
    message: `Превышено допустимое количество символов`,
  },
  pattern: {
    value: /^[а-яА-ЯёЁ\s\-.,!?:;«»\p{Pi}\p{Pf}"'()–-\u2014\u2026]+$/u,
    message: 'Разрешены только русские буквы, дефисы и знаки препинания',
  },
});

export const getOptionalAddressRules = (maxLength: number) => ({
  required: false,
  maxLength: {
    value: maxLength,
    message: `Превышено допустимое количество символов`,
  },
  pattern: {
    value: /^$|^[а-яА-ЯёЁ][а-яА-ЯёЁ0-9\s()–,./:;'"#&+=-_!?№@$^~\\|`<>{}[\]]*/u,
    message:
      'Разрешены только русские буквы, цифры, пробелы, скобки, точки, запятые, дефис и тире. Строка должна начинаться с буквы',
  },
});

export const getOptionalLocationRules = (maxLength: number) => ({
  required: false,
  maxLength: {
    value: maxLength,
    message: `Превышено допустимое количество символов`,
  },
  pattern: {
    value: /^$|^[а-яА-ЯёЁ][а-яА-ЯёЁ\s–-]*$/u,
    message:
      'Разрешены только русские буквы, пробелы, скобки и дефис. Строка должна начинаться с буквы',
  },
});
