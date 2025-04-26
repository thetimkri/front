import { colors } from '@/shared/constants/colors';

export const MainTheme = {
  colors: colors,
  button: {
    size: {
      lg: {
        padding: '16px 32px',
        borderRadius: '42px',
      },
      sm: {
        padding: '15px 20px',
        borderRadius: '40px',
      },
      xs: {
        padding: '12px 16px',
        borderRadius: '40px',
      },
    },
    type: {
      primary: {
        background: colors.accent,
        color: colors.white,
      },
      transparent: {
        background: 'transparent',
        color: colors.grey,
      },
      framed: {
        background: colors.accent,
        color: colors.white,
        border: '4px solid #FFFFFF',
      },
    },
  },
  input: {
    default: {
      background: colors.bg,
    },
  },
  shadows: {
    buttonFirst: '0px 12px 42px -4px #18274b1f',
    buttonSecondary: '0px 8px 18px -6px #18274b1f',
  },
  mediaWidth: {
    largeDesktop: '1440px',
    mDesktop: '1280px',
    smallDesktop: '1024px',
    fontTabBreakPoint: '1008px',
    tablet: '834px',
    fontMobBreakPoint: '768px',
    mobile: '700px',
    sMobile: '560px',
    smMobile: '360px',
  },
};

type CustomTheme = typeof MainTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends CustomTheme {}
}
