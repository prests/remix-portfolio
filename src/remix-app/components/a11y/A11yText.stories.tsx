import Button from '../button/Button';

import A11yText from './A11yText';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!dev'],
  render: ({ children }) => (
    <Button>
      <span aria-hidden>Interact with me with a screen reader! 👀</span>
      <A11yText>{children}</A11yText>
    </Button>
  ),
};

const meta = {
  title: 'Accessibility/A11yText',
  component: A11yText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Hello! You found my secret acessible message, good work!' },
} satisfies Meta<typeof A11yText>;
export default meta;
