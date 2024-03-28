import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: 'centered'
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
