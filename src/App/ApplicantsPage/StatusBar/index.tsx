import React from 'react'
import {
  StatusMenu,
  TitleContainer,
  MenuItemsContainer,
  ArrowIcon,
  MenuItem,
  MenuItemTop,
  MenuItemBottom,
  SeparatingLine,
} from './elements'
import current_status from 'api/current_status'

import { H3 } from 'styleguide/typography'

const StatusBar: React.FC = () => {
  return (
    <StatusMenu>
      <TitleContainer>
        <ArrowIcon />
        <H3>Applicants</H3>
      </TitleContainer>
      <MenuItemsContainer>
        <MenuItem>
          <MenuItemTop>{current_status.total}</MenuItemTop>
          <MenuItemBottom>Total</MenuItemBottom>
        </MenuItem>
        <SeparatingLine />
        <MenuItem>
          <MenuItemTop>{current_status.new}</MenuItemTop>
          <MenuItemBottom>New</MenuItemBottom>
        </MenuItem>
        <SeparatingLine />
        <MenuItem>
          <MenuItemTop>{current_status.propertyViewed}</MenuItemTop>
          <MenuItemBottom>Viewed</MenuItemBottom>
        </MenuItem>
        <SeparatingLine />
        <MenuItem>
          <MenuItemTop>{current_status.appointmentSet}</MenuItemTop>
          <MenuItemBottom>Appointments</MenuItemBottom>
        </MenuItem>
        <SeparatingLine />
        <MenuItem>
          <MenuItemTop>{current_status.others}</MenuItemTop>
          <MenuItemBottom>Others</MenuItemBottom>
        </MenuItem>
      </MenuItemsContainer>
    </StatusMenu>
  )
}
export default StatusBar
