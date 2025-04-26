import { MainTheme } from '@/shared/constants/theme/MainTheme';
import { TextBig_desk, TextMedium_mob } from '@/shared/constants/typography';
import 'react-phone-input-2/lib/style.css';
import styled from 'styled-components';

export const RoleContainer = styled.div`
  display: flex;
  gap: 8px;

  > svg {
    width: 24px;
    height: 24px;
  }

  > p {
    ${TextBig_desk};
    @media (max-width: ${MainTheme.mediaWidth.sMobile}) {
      ${TextMedium_mob};
    }
  }
`;
