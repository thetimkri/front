import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';
import { TextBig_desk } from '@/shared/constants/typography';
import ArrowSVG from '@/assets/icons/IconBox.svg';
import { MainTheme } from '@/shared/constants/theme/MainTheme.ts';

export const StyledArrow = styled(ArrowSVG)<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0.5')};
  transform: rotateZ(${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')});
`;

export const SelectPlaceholder = styled.span`
  ${TextBig_desk};
  color: ${colors.basic};
`;

export const SelectInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 12px;
  cursor: pointer;
`;

export const SelectOptions = styled.ul<{ $isOpen: boolean; $maxHeight: string }>`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: none;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${colors.dropDown};
  max-height: ${({ $isOpen, $maxHeight }) => ($isOpen ? $maxHeight : '0')};
  overflow-y: ${({ $isOpen }) => ($isOpen ? 'auto' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition:
    opacity 0.5s ease,
    max-height 0.5s ease;
  padding-bottom: ${({ $isOpen }) => ($isOpen ? '12px' : '0')};

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.input};
    height: 45px;
    border-radius: 15px;
  }

  @media (max-width: ${MainTheme.mediaWidth.smMobile}) {
    overflow-y: ${({ $isOpen }) => ($isOpen ? 'scroll' : 'hidden')};
  }
`;

export const SelectContainer = styled.div<{ $isOpen?: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${colors.input};
  border-radius: 16px;
  overflow-y: hidden;

  &:focus-visible ${SelectOptions} {
    outline: 1px solid black;
    max-height: 200px;
    opacity: 1;
  }
`;

export const SelectItemStyled = styled.li<{ $isSelected: boolean }>`
  padding: 12px;
  cursor: pointer;
  transition: color 0.5s ease;
  color: ${({ $isSelected }) => ($isSelected ? colors.hover : colors.basic)};

  &:hover {
    color: ${colors.hover};
  }
`;
