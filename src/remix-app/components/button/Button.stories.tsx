import { fn } from '@storybook/test';

import Button from 'src/remix-app/components/button/Button';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const FillVariant: Story = {
  render: args => <Button {...args} variant="fill" />,
};

export const OutlineVariant: Story = {
  render: args => <Button {...args} variant="outline" />,
};

export const GhostVariant: Story = {
  render: args => <Button {...args} variant="ghost" />,
};

const meta = {
  title: 'Components/Button',
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
