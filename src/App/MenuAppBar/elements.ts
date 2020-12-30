import styled from 'styled-components'
import {Typography} from '@material-ui/core';

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const SupportText = styled(Typography)`
  padding-right: 15px;
  @media (max-width: 500px){
    display: none;
  }
`
export const SupportIcon = styled(Icon)`
  background-image: url('./icons/support.svg');
`
export const SupportIconContainer = styled.div`
  display: flex; 
  align-items: center;
`

export const UserIcon = styled(Icon)`
  background-image: url('./icons/user.svg');
`
export const PowerIcon = styled(Icon)`
  background-image: url('./icons/power.svg');
`
export const MessageIcon = styled(Icon)`
  background-image: url('./icons/message.svg');
`