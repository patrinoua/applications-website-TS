import React from 'react'
import { status } from 'api'

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
interface ApplicantsProps {
  applicantId: string
  fullName: String
  phoneNumber: String
  email: String
  appointmentStatus: String
  appointmentDate: String
  viewedOn: String | null
  offeredBid: String | null
}
interface Applicants {
  viewedApplicants: Array<ApplicantsProps>
  applicantsWithAppointmentSet: Array<ApplicantsProps>
}

const ApplicantsList: React.FC<Applicants> = ({
  viewedApplicants,
  applicantsWithAppointmentSet,
}) => {
  const applicantType = [
    {
      appointmentSet: `Appointment Set (${status.appointmentSet})`,
      data: applicantsWithAppointmentSet,
    },
    {
      viewed: `Property Viewed (${status.viewed})`,
      data: viewedApplicants,
    },
  ]
  return (
    <Container>
      {applicantType.map((applicant) => {
        const applicantsType = Object.keys(applicant)
        const applicantsContent = Object.values(applicant)
        return (
          <div key={applicantsType[0]}>
            <H4>{applicantsContent[0]}</H4>
            <AllApplicantsContainer>
              {applicant.data.map(
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
                  let initials = ''
                  const splitName = fullName.split(' ')
                  if (splitName.length >= 2) {
                    initials =
                      splitName[0].slice(0, 1) + splitName[1].slice(0, 1)
                  } else if (fullName.split(' ').length === 1) {
                    initials = splitName[0].slice(0, 1)
                  }
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
          </div>
        )
      })}
    </Container>
  )
}

export default ApplicantsList
