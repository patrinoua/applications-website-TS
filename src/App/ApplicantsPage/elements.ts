import styled from 'styled-components'
import colors from 'styleguide/colors'

export const ApplicantsContainer = styled.div`
  width: 90%;
  height: 85vh;
  max-width: 1200px;
  max-height: 1078px;
  left: 50px;
  top: 80px;
  background: ${colors.white};
  border-radius: 3px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`

export const StatusMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const ArrowIcon = styled(Icon)`
  background-image: url('./icons/arrow.svg');
`
export const MenuItemsContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  @media (max-width: 450px) {
    margin: 10px 2px;
  }
`
export const MenuItem = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    margin: 10px;
  }
  @media (max-width: 450px) {
    margin: 5px;
  }
`
export const MenuItemTop = styled.div``
export const MenuItemBottom = styled.div``
export const SeparatingLine = styled.div`
         width: 1px;
         height: 45px;
         background: ${colors.grey300};
         margin: 10px;
         @media (max-width: 550px) {
           margin: 5px;
         }
         @media (max-width: 500px) {
           display: none;
         }
       `
