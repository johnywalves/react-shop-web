import { Meta, StoryObj } from '@storybook/react'

import Logo from '.'

const meta: Meta<typeof Logo> = {
  title: 'UI /Logo',
  component: Logo,
  tags: ['autodocs'],
  args: {}
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {}

export default meta
