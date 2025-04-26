import React, { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  PaginationBullet,
  PaginationBulletsContainer,
  PaginationButton,
  PaginationContainer,
  PaginationDots,
} from './Pagination.styled';

interface PaginationProps {
  count: number;
  itemsPerPage: number;
  labels?: {
    prev: string;
    next: string;
    dots: string;
  };
}

const DEFAULT_LABELS = {
  prev: 'Назад',
  next: 'Вперёд',
  dots: '. . .',
} as const;

const calculatePaginationRange = (currentPage: number, totalPages: number): (number | string)[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const range: (number | string)[] = [];
  const showLeftDots = currentPage > 3;
  const showRightDots = currentPage < totalPages - 2;

  range.push(1);

  if (showLeftDots) {
    range.push('...');
  }

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  if (showRightDots) {
    range.push('...');
  }

  range.push(totalPages);

  return range;
};

export const Pagination: React.FC<PaginationProps> = ({
  count,
  itemsPerPage,
  labels = DEFAULT_LABELS,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = useMemo(() => Math.ceil(count / itemsPerPage), [count, itemsPerPage]);

  const currentPage = useMemo(() => parseInt(searchParams.get('page') || '1', 10), [searchParams]);

  const handlePageChange = useCallback(
    (page: number) => {
      setSearchParams({ page: page.toString() });
    },
    [setSearchParams]
  );

  const handlePrevClick = useCallback(() => {
    handlePageChange(Math.max(1, currentPage - 1));
  }, [currentPage, handlePageChange]);

  const handleNextClick = useCallback(() => {
    handlePageChange(Math.min(totalPages, currentPage + 1));
  }, [currentPage, totalPages, handlePageChange]);

  const paginationRange = useMemo(
    () => calculatePaginationRange(currentPage, totalPages),
    [currentPage, totalPages]
  );

  if (count <= 0 || totalPages <= 1) return null;

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        aria-label={labels.prev}
      >
        {labels.prev}
      </PaginationButton>

      <PaginationBulletsContainer>
        {paginationRange.map((item, index) =>
          item === '...' ? (
            <PaginationDots key={`dots-${index}`}>{labels.dots}</PaginationDots>
          ) : (
            <PaginationBullet
              key={`page-${item}`}
              onClick={() => handlePageChange(item as number)}
              $isActive={item === currentPage}
              aria-label={`Страница ${item}`}
              aria-current={item === currentPage ? 'page' : undefined}
            >
              {item}
            </PaginationBullet>
          )
        )}
      </PaginationBulletsContainer>

      <PaginationButton
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        aria-label={labels.next}
      >
        {labels.next}
      </PaginationButton>
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
