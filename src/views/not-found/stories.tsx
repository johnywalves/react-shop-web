import { Meta, StoryObj } from '@storybook/react'

import NotFound from '.'

const meta: Meta<typeof NotFound> = {
  title: 'Views / NotFound',
  component: NotFound
}

type Story = StoryObj<typeof NotFound>

export const Primary: Story = {
  args: {}
}

export default meta
