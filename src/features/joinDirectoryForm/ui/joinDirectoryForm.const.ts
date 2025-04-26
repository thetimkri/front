export const MAX_NAME_LENGTH = 64;
export const MAX_LOCATION_LENGTH = 50;
export const MAX_COMPANY_TITLE_LENGTH = 100;
export const MAX_SERVICES_LENGTH = 300;
export const MAX_ACTIVITY_LENGTH = 500;
export const MAX_ADDRESS_LENGTH = 250;
export const CAPTCHA_THRESHOLD = 5;

export const generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      options.push(`${formattedHour}:${formattedMinute}`);
    }
  }
  return options;
};
