export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/[^\d+]/g, '');

  const hasPlus = cleaned.startsWith('+');
  const digits = hasPlus ? cleaned.slice(1) : cleaned;

  if ((hasPlus && cleaned.startsWith('+7')) || (!hasPlus && digits.startsWith('7'))) {
    if (digits.length !== 11) return phone;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  }

  if ((hasPlus && cleaned.startsWith('+380')) || (!hasPlus && digits.startsWith('380'))) {
    if (digits.length !== 12) return phone;
    return `+380 (${digits.slice(3, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`;
  }

  if ((hasPlus && cleaned.startsWith('+7')) || (!hasPlus && digits.startsWith('7'))) {
    if (digits.length !== 11) return phone;
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  }

  if ((hasPlus && cleaned.startsWith('+375')) || (!hasPlus && digits.startsWith('375'))) {
    if (digits.length !== 12) return phone;
    return `+375 (${digits.slice(3, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`;
  }

  if (hasPlus) {
    const countryCode = digits.slice(0, 1);
    const restDigits = digits.slice(1);
    const groups = restDigits.match(/.{1,3}/g) || [];
    return `+${countryCode} ${groups.join('-')}`;
  }

  const groups = digits.match(/.{1,3}/g) || [];
  return hasPlus ? `+${groups.join('-')}` : groups.join('-');
};
