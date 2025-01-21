import { RadioGroup, RadioGroupItem } from './RadioGroup';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['!autodocs'],
  render: () => (
    <RadioGroup id="radio-group" defaultValue="r1" label="Radio Button Group">
      <RadioGroupItem id="r1" value="r1" label="Option One" />
      <RadioGroupItem id="r2" value="r2" label="Option Two" />
      <RadioGroupItem id="r3" value="r3" label="Option Three" />
    </RadioGroup>
  ),
};

const meta = {
  title: 'Input/Radio Group',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'I am a label!',
  },
} satisfies Meta<typeof RadioGroup>;
export default meta;
