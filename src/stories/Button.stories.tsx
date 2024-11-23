import { fn } from '@storybook/test';

import Button from 'src/remix-app/components/button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['fill', 'outline', 'ghost'] },
  },
  args: { children: <span>Click Me</span>, onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
