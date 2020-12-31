import React from 'react'
import { ApplicantsContainer } from './elements'
import StatusBar from './StatusBar'
import AppointmentList from './ApplicantsList'

const ApplicantsPage: React.FC = () => {
  return (
    <ApplicantsContainer>
      <StatusBar />
      SearchBar | Bids | Status
      <AppointmentList />
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
