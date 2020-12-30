import styled from 'styled-components'
import colors from '../styleguide/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1440px;
  background: ${colors.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
