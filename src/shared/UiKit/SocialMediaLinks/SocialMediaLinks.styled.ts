import styled from 'styled-components';
import { colors } from '@/shared/constants/colors';

export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SocialItem = styled.li``;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  & rect {
    stroke: ${colors.accent};
    transition: stroke 0.5s ease;
  }

  & path {
    fill: ${colors.accent};
    transition: fill 0.5s ease;
  }

  &:hover rect {
    stroke: ${colors.hover};
  }

  &:hover path {
    fill: ${colors.hover};
  }
`;
