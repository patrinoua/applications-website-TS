import React, { Suspense } from 'react'
const ApplicantsPage = React.lazy(() => import('./ApplicantsPage'))
const MenuAppBar = React.lazy(() => import('./MenuAppBar'))
import { Container } from './elements'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <MenuAppBar />
        <ApplicantsPage />
      </Container>
    </Suspense>
  )
}

export default App
