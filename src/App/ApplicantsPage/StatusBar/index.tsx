import React from 'react'
import {
  StatusMenu,
  MenuItemsContainer,
  ArrowIcon,
  MenuItem,
  MenuItemTop,
  MenuItemBottom,
  SeparatingLine,
} from './elements'
import { status } from 'api.js'

import { H3 } from 'styleguide/typography'

const StatusBar: React.FC = () => {
  return (
    <StatusMenu>
      <MenuItemsContainer>
        <ArrowIcon />
        <H3>Applicants</H3>
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
          <MenuItemTop>{status.others}</MenuItemTop>
          <MenuItemBottom>Others</MenuItemBottom>
        </MenuItem>
      </MenuItemsContainer>
    </StatusMenu>
  )
}
export default StatusBar
