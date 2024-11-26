import * as stylex from '@stylexjs/stylex';

import { tokens } from 'src/remix-app/themes/tokens.stylex';

import Text from './Text';

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
      <Text {...args} size={1} />
      <Text {...args} size={2} />
      <Text {...args} size={3} />
      <Text {...args} size={4} />
      <Text {...args} size={5} />
      <Text {...args} size={6} />
      <Text {...args} size={7} />
      <Text {...args} size={8} />
      <Text {...args} size={9} />
    </div>
  ),
};

export const Weights: Story = {
  render: args => (
    <div>
      <Text {...args} weight="light" />
      <Text {...args} weight="regular" />
      <Text {...args} weight="medium" />
      <Text {...args} weight="bold" />
    </div>
  ),
};

export const Alignment: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Text {...args} align="left">
        Left Align
      </Text>
      <Text {...args} align="center">
        Center Align
      </Text>
      <Text {...args} align="right">
        Right Align
      </Text>
    </div>
  ),
};

export const Wraps: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Text {...args} wrap="wrap" />
      <Text {...args} wrap="nowrap" />
      <Text {...args} wrap="pretty" />
      <Text {...args} wrap="balance" />
    </div>
  ),
};

export const Truncate: Story = {
  render: args => (
    <div {...stylex.props(styles.alignmentDemoWrapper)}>
      <Text {...args} truncate={true} title={args.children?.toString()} />
    </div>
  ),
};

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    as: 'p',
    asChild: false,
    children: 'The quick brown fox jumped over the lazy dog.',
    size: 6,
    weight: 'medium',
    align: 'left',
    wrap: 'balance',
    truncate: false,
    style: styles.header,
  },
} satisfies Meta<typeof Text>;
export default meta;
