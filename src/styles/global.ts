import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    // CSS Font
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/poppins-v20-latin-300.woff2') format('woff2');
    }
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/poppins-v20-latin-regular.woff2') format('woff2');
    }
    @font-face {
        font-display: swap;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/poppins-v20-latin-600.woff2') format('woff2');
    }

    // CSS Reset
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    ${({ theme }) => css`
      a:hover {
        color: ${theme.colors.primary};
      }

      // Global Container
      html,
      body {
        height: 100vh;
      }

      #__next,
      #storybook-root {
        overflow-y: auto;
        font-family: ${theme.font.family};

        background-color: ${theme.colors.mainBg};
        color: ${theme.colors.white};

        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${theme.grid.gutter};
      }

      .docs-story {
        font-family: ${theme.font.family};
        background-color: ${theme.colors.mainBg};
        color: ${theme.colors.white};
      }
    `}
`

export default GlobalStyles
