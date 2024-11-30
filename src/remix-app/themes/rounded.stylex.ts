import * as stylex from '@stylexjs/stylex';

export const rounded = stylex.defineVars({
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
});

export const borderRadiusStyles = stylex.create({
  sm: {
    borderRadius: rounded.sm,
  },
  md: {
    borderRadius: rounded.md,
  },
  lg: {
    borderRadius: rounded.lg,
  },
});
