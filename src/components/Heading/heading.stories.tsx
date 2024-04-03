import { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta: Meta<typeof Heading> = {
  title: 'UI / Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Most Popular',
    $lineLeft: false,
    $lineBottom: false
  }
}

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {}
}

export default meta
