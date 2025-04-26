import { createGlobalStyle } from 'styled-components';

import ComfortaRegularWoff from '@/assets/fonts/Comfortaa-Regular.woff';
import ComfortaRegularWoff2 from '@/assets/fonts/Comfortaa-Regular.woff2';
import ComfortaBoldWoff from '@/assets/fonts/Comfortaa-Bold.woff';
import ComfortaBoldWoff2 from '@/assets/fonts/Comfortaa-Bold.woff2';
import ComfortaSemiBoldWoff from '@/assets/fonts/Comfortaa-SemiBold.woff';
import ComfortaSemiBoldWoff2 from '@/assets/fonts/Comfortaa-SemiBold.woff2';
import Exo2RegularWoff from '@/assets/fonts/Exo2-Regular.woff';
import Exo2RegularWoff2 from '@/assets/fonts/Exo2-Regular.woff2';
import Exo2SemiBoldkWoff from '@/assets/fonts/Exo2-SemiBold.woff';
import Exo2SemiBoldWoff2 from '@/assets/fonts/Exo2-SemiBold.woff2';
import Exo2BlackWoff from '@/assets/fonts/Exo2-Black.woff';
import Exo2BlackWoff2 from '@/assets/fonts/Exo2-Black.woff2';

import {
  H1,
  H1_mob,
  H1_tab,
  H2,
  H2_mob,
  H2_tab,
  H3,
  H3_mob,
  H3_tab,
  H4,
  fonts,
} from '@/shared/constants/typography';
import { MainTheme } from '@/shared/constants/theme/MainTheme';

export const AppStyles = createGlobalStyle`
@font-face {
    font-family: 'Comforta';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${ComfortaRegularWoff2}) format("woff2"),
        url(${ComfortaRegularWoff}) format("woff");
}

@font-face {
    font-family: 'Comforta';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${ComfortaSemiBoldWoff2}) format("woff2"),
        url(${ComfortaSemiBoldWoff}) format("woff");
}

@font-face {
    font-family: 'Comforta';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${ComfortaBoldWoff2}) format("woff2"),
        url(${ComfortaBoldWoff}) format("woff");
}

@font-face {
    font-family: 'Exo2';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Exo2RegularWoff2}) format("woff2"),
        url(${Exo2RegularWoff}) format("woff");
}

@font-face {
    font-family: 'Exo2';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${Exo2SemiBoldWoff2}) format("woff2"),
        url(${Exo2SemiBoldkWoff}) format("woff");
}

@font-face {
    font-family: 'Exo2';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${Exo2BlackWoff2}) format("woff2"),
        url(${Exo2BlackWoff}) format("woff");
}

*{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: ${fonts.mainFontFamily};
    background-color: ${MainTheme.colors.bg};
    color: ${MainTheme.colors.basic};
}

a {
    text-decoration: none;
    cursor: pointer;    
}

h1, h2, h3, h4, h5, h6, p {
    font-style: normal;
    line-height: normal;
    margin: 0;
}

h1 {
    ${H1};

    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontTabBreakPoint}) {
        ${H1_tab}
    }
    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
        ${H1_mob}
    }
}

h2 {
    ${H2};

    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontTabBreakPoint}) {
        ${H2_tab}
    }
    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
        ${H2_mob}
    }
} 

h3 {
    ${H3};

    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontTabBreakPoint}) {
        ${H3_tab}
    }
    @media screen and (max-width: ${(props) => props.theme.mediaWidth.fontMobBreakPoint}) {
        ${H3_mob}
    }
} 

h4 {
    ${H4};
}    

input, textarea{
    transition: border 0.2s ease, background 0.2s ease, color 0.2s ease;
    border: none;
    font-size: 16px;
    font-weight: 700;
    font-family: ${fonts.accentFontFamily};
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

button {
    cursor: pointer;
    border: none;
    background-color: transparent;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    outline-width: 0;
}

div .ck-powered-by {
display: none;
}
`;
