import React, { useState } from 'react'
import { ApplicantsContainer } from './elements'
import StatusBar from './StatusBar'
import ApplicantsList from './ApplicantsList'
import { applicants } from 'api'
import { APPOINTMENT_STATUS } from '../../constants'
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

const ApplicantsPage: React.FC = () => {
  const [filteredApplicants, setApplicants] = useState(applicants)

  const inputHandler = (value) => {
    const filteringApplicants = filteredApplicants.filter(
      (applicant) =>
        applicant.fullName.toLowerCase().includes(value.toLowerCase()) ||
        applicant.email.toLowerCase().includes(value.toLowerCase())
    )
    setApplicants(filteringApplicants)
    console.log(filteringApplicants)
    if (value === '') {
      setApplicants(applicants)
    }
    // // window.history.push('/dresses?color=blue')
    // // window.history.pushState({}, '', 'urlPath')
    // console.log(value)
  }

  const viewedApplicants = filteredApplicants.filter(
    (applicant) => applicant.appointmentStatus === APPOINTMENT_STATUS.viewed
  )
  const applicantsWithAppointmentSet = filteredApplicants.filter(
    (applicant) =>
      applicant.appointmentStatus === APPOINTMENT_STATUS.appointmentSet
  )
  return (
    <ApplicantsContainer>
      <StatusBar />
      <SearchBarContainer>
        <SearchIcon />
        <SearchBar
          placeholder='Search for applicant'
          onKeyUp={(e) => inputHandler(e.target.value)}
        />
      </SearchBarContainer>
      <ApplicantsList
        viewedApplicants={viewedApplicants}
        applicantsWithAppointmentSet={applicantsWithAppointmentSet}
      />
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
