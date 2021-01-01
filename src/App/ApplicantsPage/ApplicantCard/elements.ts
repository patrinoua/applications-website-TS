import styled from 'styled-components'
import { H5, Body1 } from 'styleguide/typography'

export const ApplicantContainer = styled.div`
  width: 305px;
  height: 241px;
  /* White */
  background: #ffffff;
  /* Grey 200 */
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 500px) {
    width: 90%;
  }
`
export const Circle = styled.div`
  width: 70px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 5px;
  background: #e3e7f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`
export const ApplicantName = styled(H5)`
  /* H5 - Roboto / 16 / Bold / title */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #4a4a4a;
`
export const TelephoneNumber = styled(Body1)``
export const Email = styled(Body1)``
export const AppointmentStatus = styled.div`
  width: 181px;
  height: 18px;
  margin-top: 10px;
  /* Grey 400 */
  background: #9d9d9d;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const OfferedBid = styled.div`
  width: 90px;
  height: 18px;
  /* Yellow 400 */
  background: #feb902;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 10px;
  /* identical to box height, or 83% */

  text-transform: uppercase;

  /* White */

  color: #ffffff;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
