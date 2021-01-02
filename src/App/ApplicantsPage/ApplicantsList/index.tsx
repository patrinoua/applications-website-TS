import React from 'react'
import current_status from 'api/current_status'
import { H4 } from 'styleguide/typography'
import ApplicantCard from '../ApplicantCard'
import { Container, AllApplicantsContainer } from './elements'
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
  const applicantsType = [
    {
      appointmentSet: `Appointment Set (${current_status.appointmentSet})`,
      data: applicantsWithAppointmentSet,
    },
    {
      viewed: `Property Viewed (${current_status.propertyViewed})`,
      data: viewedApplicants,
    },
  ]
  return (
    <Container>
      {applicantsType.map((applicant) => {
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
