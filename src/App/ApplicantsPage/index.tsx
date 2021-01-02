import React, { useState } from 'react'
import { ApplicantsContainer } from './elements'
import StatusBar from './StatusBar'
import ApplicantsList from './ApplicantsList'
import { applicants } from 'api'
import { APPOINTMENT_STATUS } from '../../constants'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import {
  SearchIcon,
  SearchText,
  SearchBarContainer,
  SearchBlock,
} from './elements'
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 19,
    marginRight: theme.spacing(1),
    minWidth: 120,
    height: 44,
    borderRadius: 5,
  },
  select: {
    height: '45px',
    padding: 5,
  },
  inputLabel: {
    height: '45px',
    transform: 'translate(24px, 15px) scale(1)',
  },
}))

const ApplicantsPage: React.FC = () => {
  const classes = useStyles()

  const [filteredApplicants, setApplicants] = useState(applicants)

  const inputHandler = (e) => {
    const value = e.target.value
    const filteringApplicants = filteredApplicants.filter(
      (applicant) =>
        applicant.fullName.toLowerCase().includes(value.toLowerCase()) ||
        applicant.email.toLowerCase().includes(value.toLowerCase())
    )
    setApplicants(filteringApplicants)
    if (value === '') {
      setApplicants(applicants)
    }
    if (e.key === 'Enter') {
      window.history.pushState({}, '', `/page/?search=${value}`)
    }
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
      <SearchBlock>
        <SearchBarContainer>
          <SearchIcon />
          <SearchText
            placeholder='Search for applicant'
            onKeyUp={(e) => inputHandler(e)}
          />
        </SearchBarContainer>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel
            htmlFor='outlined-age-native-simple'
            className={classes.inputLabel}
          >
            Bids
          </InputLabel>
          <Select className={classes.select} native>
            <option aria-label='None' value='' />
            <option value={10}>100.000€</option>
            <option value={20}>200.000€</option>
            <option value={30}>30.000€</option>
          </Select>
        </FormControl>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel
            htmlFor='outlined-age-native-simple'
            className={classes.inputLabel}
          >
            Status
          </InputLabel>
          <Select className={classes.select} native>
            <option aria-label='None' value='' />
            <option value={10}>Appointment Set</option>
            <option value={20}>Viewed</option>
          </Select>
        </FormControl>
      </SearchBlock>
      <ApplicantsList
        viewedApplicants={viewedApplicants}
        applicantsWithAppointmentSet={applicantsWithAppointmentSet}
      />
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
