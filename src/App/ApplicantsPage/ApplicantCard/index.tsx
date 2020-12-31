import React from 'react'
import { H5 } from 'styleguide/typography'
import { APPOINTMENT_STATUS } from '../../../constants'
import {
  ApplicantContainer,
  Circle,
  ApplicantName,
  TelephoneNumber,
  Email,
  AppointmentStatus,
  OfferedBid,
} from './elements'

interface Props {
  initials: String
  fullName: String
  phoneNumber: String
  email: String
  appointmentStatus: String
  appointmentDate: String | null
  viewedOn: String | null
  offeredBid: String | null
  position: Number
}

const circleColors = ['#E3E7F9', '#CEF0F4', '#F0F4E1', '#FEE8D3', '#FCD6DE']

const ApplicantCard: React.FC<Props> = ({
  initials,
  fullName,
  phoneNumber,
  email,
  appointmentStatus,
  appointmentDate,
  viewedOn,
  offeredBid,
  position,
}) => {
  const color: number = +position % 5

  return (
    <ApplicantContainer>
      <Circle style={{ backgroundColor: `${circleColors[color]}` }}>
        <H5>{initials}</H5>
      </Circle>
      <ApplicantName>{fullName}</ApplicantName>
      <TelephoneNumber>{phoneNumber}</TelephoneNumber>
      <Email>{email}</Email>
      <AppointmentStatus>
        {appointmentStatus === APPOINTMENT_STATUS.appointmentSet &&
          `Appointment ${appointmentDate}`}
        {appointmentStatus === APPOINTMENT_STATUS.viewed &&
          `Viewed on ${viewedOn}`}
      </AppointmentStatus>
      {offeredBid && <OfferedBid>Bid {offeredBid}</OfferedBid>}
    </ApplicantContainer>
  )
}

export default ApplicantCard
