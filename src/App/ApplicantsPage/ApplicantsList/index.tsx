import React from 'react'

import { applicants } from 'api'
import { APPOINTMENT_STATUS } from '../../../constants'
import { H4 } from 'styleguide/typography'
import styled from 'styled-components'
import ApplicantCard from '../ApplicantCard'
const Container = styled.div`
  margin: 20px;
`
const AllApplicantsContainer = styled.div`
  display: flex;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

const AppointmentSet: React.FC = () => {
  const viewedApplicants = applicants.filter(
    (applicant) => applicant.appointmentStatus === APPOINTMENT_STATUS.viewed
  )
  const applicaintsWithAppointmentSet = applicants.filter(
    (applicant) =>
      applicant.appointmentStatus === APPOINTMENT_STATUS.appointmentSet
  )
  return (
    <Container>
      <H4>Appointment Set</H4>
      <AllApplicantsContainer>
        {applicaintsWithAppointmentSet.map(
          (
            {
              applicantId,
              fullName,
              phoneNumber,
              email,
              appointmentStatus,
              appointmentDate,
              viewedOn,
              offeredBid,
            },
            position
          ) => {
            const initials =
              fullName.split(' ')[0].slice(0, 1) +
              fullName.split(' ')[1].slice(0, 1)
            console.log('position', position)
            return (
              <ApplicantCard
                initials={initials}
                fullName={fullName}
                phoneNumber={phoneNumber}
                email={email}
                appointmentStatus={appointmentStatus}
                appointmentDate={appointmentDate}
                viewedOn={viewedOn}
                offeredBid={offeredBid}
                position={position}
                key={applicantId}
              />
            )
          }
        )}
      </AllApplicantsContainer>
      <H4>Property Viewed</H4>
      <AllApplicantsContainer>
        {viewedApplicants.map(
          (
            {
              fullName,
              phoneNumber,
              email,
              appointmentStatus,
              appointmentDate,
              viewedOn,
              offeredBid,
            },
            position
          ) => {
            const initials =
              fullName.split(' ')[0].slice(0, 1) +
              fullName.split(' ')[1].slice(0, 1)
            return (
              <ApplicantCard
                initials={initials}
                fullName={fullName}
                phoneNumber={phoneNumber}
                email={email}
                appointmentStatus={appointmentStatus}
                appointmentDate={appointmentDate}
                viewedOn={viewedOn}
                offeredBid={offeredBid}
                position={position + 1}
              />
            )
          }
        )}
      </AllApplicantsContainer>
    </Container>
  )
}

export default AppointmentSet
