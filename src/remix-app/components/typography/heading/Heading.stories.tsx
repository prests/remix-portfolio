import * as stylex from '@stylexjs/stylex';

import Heading from 'src/remix-app/components/typography/heading/Heading';
import { tokens } from 'src/remix-app/themes/tokens.stylex';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const styles = stylex.create({
  header: {
    color: tokens.color_text_brand,
  },
  alignmentDemoWrapper: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    border: '1px solid black',
  },
});

export const Default: Story = {
  tags: ['!autodocs', '!dev'],
};

export const Sizes: Story = {
  render: args => (
    <div>
      <Heading {...args} size={1} />
      <Heading {...args} size={2} />
      <Heading {...args} size={3} />
      <Heading {...args} size={4} />
      <Heading {...args} size={5} />
      <Heading {...args} size={6} />
      <Heading {...args} size={7} />
      <Heading {...args} size={8} />
      <Heading {...args} size={9} />
    </div>
  ),
};

export const Weights: Story = {
  render: args => (
    <div>
      <Heading {...args} weight="light" />
      <Heading {...args} weight="regular" />
      <Heading {...args} weight="medium" />
      <Heading {...args} weight="bold" />
    </div>
  ),
};

export const Alignment: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Heading {...args} align="left">
        Left Align
      </Heading>
      <Heading {...args} align="center">
        Center Align
      </Heading>
      <Heading {...args} align="right">
        Right Align
      </Heading>
    </div>
  ),
};

export const Wraps: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Heading {...args} wrap="wrap" />
      <Heading {...args} wrap="nowrap" />
      <Heading {...args} wrap="pretty" />
      <Heading {...args} wrap="balance" />
    </div>
  ),
};

export const Truncate: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Heading {...args} truncate={true} title={args.children?.toString()} />
    </div>
  ),
};

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'h1',
    asChild: false,
    children: 'The quick brown fox jumped over the lazy dog.',
    size: 6,
    weight: 'medium',
    align: 'left',
    wrap: 'balance',
    truncate: false,
    style: styles.header,
  },
} satisfies Meta<typeof Heading>;
export default meta;
