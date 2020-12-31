import React, { Suspense } from 'react'
import { Container } from './elements'
const ApplicantsPage = React.lazy(() => import('./ApplicantsPage'))
const MenuAppBar = React.lazy(() => import('./MenuAppBar'))

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
