import * as stylex from '@stylexjs/stylex';

const s1 = '0.25rem' as const;
const s2 = '0.5rem' as const;
const s3 = '0.75rem' as const;
const s4 = '1rem' as const;
const s5 = '1.5rem' as const;
const s6 = '2rem' as const;
const s7 = '2.5rem' as const;
const s8 = '3rem' as const;
const s9 = '4rem' as const;

export const spacing = stylex.defineVars({
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
});

// For Storybook
export const spacingMapping = {
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
};
