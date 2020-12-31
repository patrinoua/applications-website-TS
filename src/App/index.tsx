import React from 'react'
import ApplicantsPage from './ApplicantsPage'
import MenuAppBar from './MenuAppBar'
import { Container } from './elements'

const App: React.FC = () => {
  return (
    <Container>
      <MenuAppBar />
      <ApplicantsPage />
    </Container>
  )
}

export default App
