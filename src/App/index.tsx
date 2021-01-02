import React, { Suspense } from 'react'
import { Container } from './elements'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import colors from 'styleguide/colors'

const ApplicantsPage = React.lazy(() => import('./ApplicantsPage'))
const MenuAppBar = React.lazy(() => import('./MenuAppBar'))

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: `${colors.grey300}`,
        },
        '&$focused $notchedOutline': {
          borderColor: 'purple',
        },
      },
    },
  },
})

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <MenuAppBar />
          <ApplicantsPage />
        </Container>
      </Suspense>
    </MuiThemeProvider>
  )
}

export default App
