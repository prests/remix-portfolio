import * as stylex from '@stylexjs/stylex';

import { baseColors, blueGrey, blueGreyAlpha, grey, greyAlpha, orange, orangeAlpha } from './colors.stylex';
import { spacing, spacingMapping } from './spacing.stylex';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof meta>;

const excludedKeys = ['__themeName__'];

const styles = stylex.create({
  colorComponentWrapperLight: {
    color: 'black',
  },
  colorComponentWrapperDark: {
    color: 'white',
  },
  title: {
    fontWeight: 800,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    marginBottom: '1rem',
  },
  colorWrapper: {
    display: 'flex',
    gap: '8px',
    marginBottom: '0.5rem',
  },
  color: {
    width: '4rem',
    height: '2.5rem',
    borderRadius: '4px',
  },
  colorTitle: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    marginBottom: '0.25rem',
  },
  spacingLight: {
    border: '2px solid black',
  },
  spacingDark: {
    backgroundColor: 'white',
  },
});

const removeLettersFromString = (input: string) => input.replace(/[a-zA-Z]/g, '');

const mapColorsToElements = <T extends stylex.VarGroup<{}>>(title: string, colors: T, shouldRemoveLetters = true) => {
  const Colors = Object.entries(colors)
    .filter(([key]) => !excludedKeys.includes(key))
    .map(([colorName, color]) => (
      <div key={colorName}>
        <div {...stylex.props(styles.color)} style={{ backgroundColor: color.toString() }} />
        <p>{shouldRemoveLetters ? removeLettersFromString(colorName) : colorName}</p>
      </div>
    ));

  return (
    <div>
      <h2 {...stylex.props(styles.colorTitle)}>{title}</h2>
      <div {...stylex.props(styles.colorWrapper)}>{Colors}</div>
    </div>
  );
};

const mapSpacingToElements = <T extends stylex.VarGroup<{}>>(spacings: T, style: stylex.StyleXStyles) =>
  Object.entries(spacings)
    .filter(([key]) => !excludedKeys.includes(key))
    .map(([key, spacing]) => (
      <div key={key} style={{ marginBottom: '12px' }}>
        <h2>
          {key} - {spacingMapping[key as keyof typeof spacingMapping]}
        </h2>
        <div style={{ display: 'flex', gap: spacing.toString() }}>
          <div {...stylex.props(styles.color, style)} /> <div {...stylex.props(styles.color, style)} />{' '}
          <div {...stylex.props(styles.color, style)} />
        </div>
      </div>
    ));

export const Colors: Story = {
  render: (_, { globals }) => {
    const BaseColors = mapColorsToElements('Base Colors', baseColors, false);
    const GreyColors = mapColorsToElements('Grey', grey);
    const GreyAlphaColors = mapColorsToElements('Grey Opacities', greyAlpha);
    const BlueGreyColors = mapColorsToElements('Blue Grey', blueGrey);
    const BlueGreyAlphaColors = mapColorsToElements('Blue Grey Opacities', blueGreyAlpha);
    const OrangeColors = mapColorsToElements('Orange', orange);
    const OrangeAlphaColors = mapColorsToElements('Orange Opacities', orangeAlpha);

    return (
      <div
        {...stylex.props(
          globals.backgrounds?.value === '#333' ? styles.colorComponentWrapperDark : styles.colorComponentWrapperLight
        )}
      >
        <h1 {...stylex.props(styles.title)}>Colors</h1>
        {BaseColors}
        {GreyColors}
        {GreyAlphaColors}
        {BlueGreyColors}
        {BlueGreyAlphaColors}
        {OrangeColors}
        {OrangeAlphaColors}
      </div>
    );
  },
};

export const Spacing: Story = {
  render: (_, { globals }) => {
    const isDarkMode = globals.backgrounds?.value === '#333';

    const Spacings = mapSpacingToElements(spacing, isDarkMode ? styles.spacingDark : styles.spacingLight);

    return (
      <div {...stylex.props(isDarkMode ? styles.colorComponentWrapperDark : styles.colorComponentWrapperLight)}>
        <>{Spacings}</>
      </div>
    );
  },
};

const meta: Meta = {
  title: 'Theming',
  parameters: {
    layout: 'centered',
  },
};
export default meta;
