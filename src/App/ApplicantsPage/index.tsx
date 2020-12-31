import React from 'react'
import {
  ApplicantsContainer,
  StatusMenu,
  MenuItemsContainer,
  ArrowIcon,
  MenuItem,
  MenuItemTop,
  MenuItemBottom,
  SeparatingLine,
} from './elements'

import { status } from '../../api.js'

import { H4 } from '../../styleguide/typography'

const ApplicantsPage: React.FC = () => {
  return (
    <ApplicantsContainer>
      <StatusMenu>
        <MenuItemsContainer>
          <ArrowIcon />
          <H4>Applications</H4>
        </MenuItemsContainer>
        <MenuItemsContainer>
          <MenuItem>
            <MenuItemTop>{status.total}</MenuItemTop>
            <MenuItemBottom>Total</MenuItemBottom>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <MenuItemTop>{status.new}</MenuItemTop>
            <MenuItemBottom>New</MenuItemBottom>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <MenuItemTop>{status.viewed}</MenuItemTop>
            <MenuItemBottom>Viewed</MenuItemBottom>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <MenuItemTop>{status.appointments}</MenuItemTop>
            <MenuItemBottom>Appointments</MenuItemBottom>
          </MenuItem>
          <SeparatingLine />
          <MenuItem>
            <H4>{status.others}</H4>
            <div>Others</div>
          </MenuItem>
        </MenuItemsContainer>
      </StatusMenu>
      Applicants
    </ApplicantsContainer>
  )
}

export default ApplicantsPage
