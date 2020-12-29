import React from 'react'
import styled from 'styled-components'
import MenuAppBar from '../MenuAppBar'
import colors from '../../styleguide/colors'
import {H4} from '../../styleguide/typography'
import {status} from '../../api.js'

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
const ArrowIcon = styled(Icon)`
  background-image: url('./icons/arrow.svg');
`
const StatusMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px){
    flex-direction: column;
    align-items: flex-start;
  }
`

const ApplicantsContainer = styled.div`
  width: 90%;
  height: 85vh;
  max-width: 1340px;
  max-height: 1078px;
  left: 50px;
  top: 80px;
  background: ${colors.white};
  border-radius: 3px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
`
const MenuItemsContainer = styled.div`
  display: flex; 
  margin: 20px;
  align-items: center;
  @media (max-width: 450px){
    margin: 10px;
  }
`
const MenuItem = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px){
    margin: 10px;
  }
`
const SeparatingLine = styled.div`
  width: 1px;
  height: 45px;
  background: #E6E6E6;
  margin: 10px;
  @media (max-width: 550px){
   margin: 5px;
  }
  @media (max-width: 500px){
   display: none;
  }
`
const MenuItemTop = styled.div``
const MenuItemBottom = styled.div``

const ApplicantsPage: React.FC = ()=>{
  return(
    <ApplicantsContainer>
      <StatusMenu>
        <MenuItemsContainer>
          <ArrowIcon />
          <H4>
            Applications
          </H4>
        </MenuItemsContainer>
        <MenuItemsContainer>
          <MenuItem>
            <H4>{status.total}</H4>
            <div>Total</div>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <H4>{status.new}</H4>
            <div>New</div>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <H4>{status.viewed}</H4>
            <div>Viewed</div>
          </MenuItem>
           <SeparatingLine />
          <MenuItem>
            <H4>{status.appointments}</H4>
            <div>Appointments</div>
          </MenuItem>
           <SeparatingLine />
          <MenuItem>
            <H4>{status.others}</H4>
            <div>Others</div>
          </MenuItem>
        </MenuItemsContainer>
      </StatusMenu>
      Applicants</ApplicantsContainer>
  )
}



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
const App: React.FC = () => {
  return (
    <MenuAndApplicantsContainer>
      <MenuAppBar/>
      <ApplicantsPage />
    </MenuAndApplicantsContainer>
  )
}

export default App
