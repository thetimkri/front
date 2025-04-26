import { BreadcrumbsList, BreadcrumbsListItem, BreadcrumbsLink } from './Breadcrumbs.styled.ts';
import BreadcrumbsModel from './BreadcrumbsModel.ts';
import { useEffect, useMemo, useState } from 'react';

interface BreadcrumbsProps {
  breadcrumbsItems: BreadcrumbsModel[];
}

export const Breadcrumbs = ({ breadcrumbsItems }: BreadcrumbsProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getMaxLength = useMemo(
    () => (index: number) => {
      if (windowWidth <= 375) {
        return 15;
      } else if (windowWidth <= 560) {
        return 25;
      } else if (windowWidth <= 768) {
        return 40;
      } else if (index === breadcrumbsItems.length - 1) {
        return 50;
      } else {
        return 30;
      }
    },
    [windowWidth, breadcrumbsItems.length]
  );

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div>
      <BreadcrumbsList>
        {breadcrumbsItems.map((item, index) => (
          <BreadcrumbsListItem key={index}>
            {index === breadcrumbsItems.length - 1 ? (
              <span>{truncateText(item.name, getMaxLength(index))}</span>
            ) : (
              <BreadcrumbsLink href={item.url}>
                {truncateText(item.name, getMaxLength(index))}
              </BreadcrumbsLink>
            )}
          </BreadcrumbsListItem>
        ))}
      </BreadcrumbsList>
    </div>
  );
};
