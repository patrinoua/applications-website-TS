import React from 'react'
import { ApplicantsContainer } from './elements'
import StatusBar from './StatusBar'
import AppointmentList from './ApplicantsList'

import styled from 'styled-components'
import colors from 'styleguide/colors'

export const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('./icons/search.svg');
  &:hover {
    cursor: pointer;
  }
`
export const SearchBar = styled.input`
  width: 400px;
  max-width: 90%;
  height: 30px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`

export const SearchBarContainer = styled.div`
  width: 305px;
  height: 45px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin: 20px;
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid ${colors.grey300};
  @media (max-width: 800px) {
    width: auto;
  }
`
const SearchBarCompo: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchBar
        placeholder='Search for applicant'
        // onKeyUp={(e) => inputHandler(e)}
        // value={text}
        // onChange={(e) => setText(e.target.value)}
      />
    </SearchBarContainer>
  )
}
const ApplicantsPage: React.FC = () => {
  return (
    <ApplicantsContainer>
      <StatusBar />
      <SearchBarCompo />
      <AppointmentList />
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
