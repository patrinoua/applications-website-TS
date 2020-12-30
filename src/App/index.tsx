import React from 'react'
import ApplicantsPage from './ApplicantsPage'
// import MenuAppBar from './components/MenuAppBar'
import styled from 'styled-components'
import colors from '../styleguide/colors'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1440px;
  background: ${colors.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const App: React.FC = () => {
  return (
    <Container>
      <ApplicantsPage />
    </Container>
  )
}

export default App
