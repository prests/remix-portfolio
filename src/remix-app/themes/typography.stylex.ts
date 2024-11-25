import * as stylex from '@stylexjs/stylex';

export const size = stylex.defineVars({
  s1: '12px',
  s2: '14px',
  s3: '16px',
  s4: '18px',
  s5: '20px',
  s6: '24px',
  s7: '28px',
  s8: '35px',
  s9: '60px',
});

export const letterSpacing = stylex.defineVars({
  s1: '0.0025em',
  s2: '0em',
  s3: '0em',
  s4: '-0.0025em',
  s5: '-0.005em',
  s6: '-0.00625em',
  s7: '-0.0075em',
  s8: '-0.01em',
  s9: '-0.025em',
});

export const lineHeight = stylex.defineVars({
  s1: '16px',
  s2: '20px',
  s3: '24px',
  s4: '26px',
  s5: '28px',
  s6: '30px',
  s7: '36px',
  s8: '40px',
  s9: '60px',
});

export const weights = stylex.defineVars({
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
});

export const typographyStyles = stylex.create({
  1: {
    fontSize: size.s1,
    letterSpacing: letterSpacing.s1,
    lineHeight: lineHeight.s1,
  },
  2: {
    fontSize: size.s2,
    letterSpacing: letterSpacing.s2,
    lineHeight: lineHeight.s2,
  },
  3: {
    fontSize: size.s3,
    letterSpacing: letterSpacing.s3,
    lineHeight: lineHeight.s3,
  },
  4: {
    fontSize: size.s4,
    letterSpacing: letterSpacing.s4,
    lineHeight: lineHeight.s4,
  },
  5: {
    fontSize: size.s5,
    letterSpacing: letterSpacing.s5,
    lineHeight: lineHeight.s5,
  },
  6: {
    fontSize: size.s6,
    letterSpacing: letterSpacing.s6,
    lineHeight: lineHeight.s6,
  },
  7: {
    fontSize: size.s7,
    letterSpacing: letterSpacing.s7,
    lineHeight: lineHeight.s7,
  },
  8: {
    fontSize: size.s8,
    letterSpacing: letterSpacing.s8,
    lineHeight: lineHeight.s8,
  },
  9: {
    fontSize: size.s9,
    letterSpacing: letterSpacing.s9,
    lineHeight: lineHeight.s9,
  },
});

export const weightStyles = stylex.create({
  light: {
    fontWeight: weights.light,
  },
  regular: {
    fontWeight: weights.regular,
  },
  medium: {
    fontWeight: weights.medium,
  },
  bold: {
    fontWeight: weights.bold,
  },
});

export const textAlignStyles = stylex.create({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});

export const wrapStyles = stylex.create({
  wrap: {
    textWrap: 'wrap',
  },
  nowrap: {
    textWrap: 'nowrap',
  },
  pretty: {
    textWrap: 'pretty',
  },
  balance: {
    textWrap: 'balance',
  },
});

export const truncateStyles = stylex.create({
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
