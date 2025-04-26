import { memo, useCallback, useEffect, useState } from 'react';
import { GoogleReCaptchaCheckbox } from '@google-recaptcha/react';

type ReCaptchaComponentProps = {
  onVerify: (verified: boolean) => void;
  resetCaptcha: boolean;
};

const ReCaptchaComponent = ({ onVerify, resetCaptcha }: ReCaptchaComponentProps) => {
  const [recaptchaSize, setRecaptchaSize] = useState<'normal' | 'compact'>('normal');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setRecaptchaSize(window.innerWidth <= 400 ? 'compact' : 'normal');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCaptchaChange = useCallback(
    (token: string | null) => {
      const verified = !!token;
      setIsVerified(verified);
      onVerify(verified);
    },
    [onVerify]
  );

  useEffect(() => {
    onVerify(isVerified);
  }, [isVerified, onVerify]);

  useEffect(() => {
    if (resetCaptcha) {
      setIsVerified(false);
    }
  }, [resetCaptcha]);

  return (
    <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
      <GoogleReCaptchaCheckbox language="ru" size={recaptchaSize} onChange={handleCaptchaChange} />
    </div>
  );
};

export default memo(ReCaptchaComponent);
