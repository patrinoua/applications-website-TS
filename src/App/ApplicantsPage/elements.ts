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
export const SearchIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('./icons/search.svg');
  &:hover {
    cursor: pointer;
  }
`
export const SearchText = styled.input`
  width: 400px;
  max-width: 90%;
  height: 30px;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`

export const SearchBarContainer = styled.div`
  width: 305px;
  height: 45px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid ${colors.grey300};
  @media (max-width: 800px) {
    width: auto;
  }
`
export const SearchBlock = styled.div`
  display: flex;
  margin: 20px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
