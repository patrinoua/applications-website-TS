import React from 'react'
import { Subtitle } from '../../styleguide/typography'

function Footer() {
  return (
    <Subtitle style={{ position: 'absolute', bottom: '50px', color: 'black' }}>
      Developed by{' '}
      <a
        style={{ textDecoration: 'none', color: 'black' }}
        href='https://angelikipatrinou.com'
        target='_blank'
      >
        Angeliki Patrinou
      </a>
    </Subtitle>
  )
}

export default Footer
