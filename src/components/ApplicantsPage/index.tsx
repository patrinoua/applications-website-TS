import React from 'react'

import styled from 'styled-components'
import colors from '../../styleguide/colors'
import MenuAppBar from '../MenuAppBar'

const MenuAndApplicantsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 100vh;
max-width: 1340px;
max-height: 1078px;
left: 50px;
top: 80px;
background: ${colors.backgroundColor};
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
`
const ApplicantsContainer = styled.div`
width: 90%;
height: 90vh;
max-width: 1340px;
max-height: 1078px;
left: 50px;
top: 80px;
background: ${colors.white};
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
`
const ApplicantsPage1: React.FC = ()=>{
  return(
    <ApplicantsContainer>Applicants</ApplicantsContainer>
  )
}

const App: React.FC = () => {
  return (
    <MenuAndApplicantsContainer>
      <MenuAppBar/>
      <ApplicantsPage1 />
    </MenuAndApplicantsContainer>
  )
}

export default App
