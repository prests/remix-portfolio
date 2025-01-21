import { Label } from './Label';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs'],
};

const meta = {
  title: 'Input/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'I am a label!',
  },
} satisfies Meta<typeof Label>;
export default meta;
