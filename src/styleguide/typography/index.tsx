import styled from 'styled-components'
import colors from 'styleguide/colors'

export const H3 = styled.span`
  font-family: Roboto, Palatino Linotype, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: ${colors.grey500};
`

export const H4 = styled.span`
  font-family: Roboto, Palatino Linotype, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: ${colors.grey500};
`
export const H5 = styled.span`
  font-family: Roboto, Palatino Linotype, sans-serif;
  font-size: 1.1em;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: ${colors.grey500};
`
export const Body1 = styled.div<{ color?: string }>`
  font-family: Roboto, Palatino Linotype, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${colors.grey500};
`
export const Body2 = styled.div`
  //styleName: Body 2 - Roboto / 14 / Regular;
  font-family: Roboto, Palatino Linotype, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
`
