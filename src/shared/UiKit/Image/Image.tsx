import { ImgHTMLAttributes, useState } from 'react';
import DeerImage from '@/assets/images/Deer.webp';

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  fallback?: string;
  src?: string | null;
};

export const Image = ({ src, fallback = DeerImage, alt = '', ...props }: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src || fallback);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} {...props} />;
};

export default Image;
