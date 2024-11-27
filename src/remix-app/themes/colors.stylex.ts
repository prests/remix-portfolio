import * as stylex from '@stylexjs/stylex';

export const baseColors = stylex.defineVars({
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  transparent: 'transparent',
});

export const grey = stylex.defineVars({
  g50: 'hsl(4, 8%, 96%)',
  g100: 'hsl(4, 8%, 86%)',
  g200: 'hsl(4, 8%, 76%)',
  g300: 'hsl(4, 8%, 66%)',
  g400: 'hsl(4, 8%, 56%)',
  g500: 'hsl(4, 8%, 46%)',
  g600: 'hsl(4, 8%, 36%)',
  g700: 'hsl(4, 8%, 26%)',
  g800: 'hsl(4, 8%, 16%)',
  g900: 'hsl(4, 8%, 6%)',
});

export const blueGrey = stylex.defineVars({
  bg50: 'hsl(209, 25%, 95%)',
  bg100: 'hsl(209, 25%, 85%)',
  bg200: 'hsl(209, 25%, 75%)',
  bg300: 'hsl(209, 25%, 65%)',
  bg400: 'hsl(209, 25%, 55%)',
  bg500: 'hsl(209, 25%, 45%)',
  bg600: 'hsl(209, 25%, 35%)',
  bg700: 'hsl(209, 25%, 25%)',
  bg800: 'hsl(209, 25%, 15%)',
  bg900: 'hsl(209, 25%, 5%)',
});

export const blueGreyAlpha = stylex.defineVars({
  bg50_20: 'hsla(209, 25%, 95%, 0.2)',
  bg700_20: 'hsla(209, 25%, 25%, 0.2)',
});

export const orange = stylex.defineVars({
  o50: 'hsl(4, 99%, 96%)',
  o100: 'hsl(4, 99%, 86%)',
  o200: 'hsl(4, 99%, 76%)',
  o300: 'hsl(4, 99%, 66%)',
  o400: 'hsl(4, 99%, 56%)',
  o500: 'hsl(4, 99%, 46%)',
  o600: 'hsl(4, 99%, 36%)',
  o700: 'hsl(4, 99%, 26%)',
  o800: 'hsl(4, 99%, 16%)',
  o900: 'hsl(4, 99%, 6%)',
});

export const orangeAlpha = stylex.defineVars({
  o300_20: 'hsla(4, 99%, 66%, 0.2)',
  o300_40: 'hsla(4, 99%, 66%, 0.4)',
  o300_90: 'hsla(4, 99%, 66%, 0.9)',
  o700_20: 'hsla(4, 99%, 26%, 0.2)',
  o700_40: 'hsla(4, 99%, 26%, 0.4)',
  o700_90: 'hsla(4, 99%, 26%, 0.9)',
});
