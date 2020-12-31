import React from 'react'
import { ApplicantsContainer } from './elements'
import StatusBar from './StatusBar'
import AppointmentSet from './AppointmentSet'

const ApplicantsPage: React.FC = () => {
  return (
    <ApplicantsContainer>
      <StatusBar />
      <AppointmentSet />
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
