import { createGlobalStyle } from 'styled-components'
import 'aos/dist/aos.css'
import { colors, fonts } from './variable'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Cores */
    --color-black: ${colors.black};
    --color-white: ${colors.white};
    --color-gray-light: ${colors.grayLight};
    --color-gray-medium: ${colors.grayMedium};
    --color-gray-dark: ${colors.grayDark};

    /* Fontes */
    --font-primary: ${fonts.family.secondary};
    --font-size-base: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    background-color: var(--color-gray-light);
    color: var(--color-black);
  }
`

export default GlobalStyle
