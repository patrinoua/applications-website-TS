import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'
import { H3, H4, H5, Body1, Body2 } from './index'
import colors from '../colors'
const Container = styled.div`
  margin: 10px;
`

const Typography = () => (
  <Container>
    <br />
    <H3>This is H3</H3>
    <br />
    <H4>This is H3</H4>
    <br />
    <H5>This is H3</H5>
    <br />
    <Body1>This is Body1</Body1>
    <br />
    <Body2>This is Regular</Body2>
    <br />
    <br />
  </Container>
)

export default {
  title: 'Styleguide/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = () => <Typography />

export const Fonts = Template.bind({})
