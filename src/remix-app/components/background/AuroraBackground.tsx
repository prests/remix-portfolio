import * as stylex from '@stylexjs/stylex';

import { tokens } from '../../themes/tokens.stylex';

const swayOne = stylex.keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
  '50%': {
    transform: 'translate(20px, -10px) rotate(10deg) scale(1.1)',
  },
  '100%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
});

const swayTwo = stylex.keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
  '50%': {
    transform: 'translate(-15px, 20px) rotate(-10deg) scale(1.05)',
  },
  '100%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
});

const swayThree = stylex.keyframes({
  '0%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
  '50%': {
    transform: 'translate(10px, -15px) rotate(5deg) scale(1.08)',
  },
  '100%': {
    transform: 'translate(0, 0) rotate(0deg) scale(1)',
  },
});

const swayFour = stylex.keyframes({
  '0%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
  '50%': { transform: 'translate(-20px, -20px) rotate(-15deg) scale(1.1)' },
  '100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
});

const styles = stylex.create({
  auroraWrapper: {
    backgroundColor: tokens.color_base_page_background,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: -1,
  },
  auroraSvg: {
    width: '100%',
    height: '100%',
  },
  ellipse: {
    transformOrigin: 'center',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  gradientOneStart: {
    stopColor: tokens.color_gradient_one_background_start,
  },
  gradientOneEnd: {
    stopColor: tokens.color_gradient_one_background_end,
  },
  gradientTwoStart: {
    stopColor: tokens.color_gradient_two_background_start,
  },
  gradientTwoEnd: {
    stopColor: tokens.color_gradient_two_background_end,
  },
  gradientThreeStart: {
    stopColor: tokens.color_gradient_three_background_start,
  },
  gradientThreeEnd: {
    stopColor: tokens.color_gradient_three_background_end,
  },
  gradientFourStart: {
    stopColor: tokens.color_gradient_three_background_start,
  },
  gradientFourEnd: {
    stopColor: tokens.color_gradient_three_background_end,
  },
  animationOne: {
    animationName: swayOne,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  animationTwo: {
    animationName: swayTwo,
    animationDuration: '7s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  animationThree: {
    animationName: swayThree,
    animationDuration: '10s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
  animationFour: {
    animationName: swayFour,
    animationDuration: '19s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  },
});

const AuroraBackground = () => {
  return (
    <div {...stylex.props(styles.auroraWrapper)}>
      <svg {...stylex.props(styles.auroraSvg)} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
            <stop {...stylex.props(styles.gradientOneStart)} offset="0%" />
            <stop {...stylex.props(styles.gradientOneEnd)} offset="100%" />
          </radialGradient>
          <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
            <stop {...stylex.props(styles.gradientTwoStart)} offset="0%" />
            <stop {...stylex.props(styles.gradientTwoEnd)} offset="100%" />
          </radialGradient>
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
            <stop {...stylex.props(styles.gradientThreeStart)} offset="0%" stopColor="#fad0c4" />
            <stop {...stylex.props(styles.gradientThreeEnd)} offset="100%" stopColor="#ffd1ff" />
          </radialGradient>
          <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
            <stop {...stylex.props(styles.gradientFourStart)} offset="0%" />
            <stop {...stylex.props(styles.gradientFourEnd)} offset="100%" />
          </radialGradient>
        </defs>
        <g filter="url(#blur)">
          <ellipse
            {...stylex.props(styles.ellipse, styles.animationOne)}
            cx="20%"
            cy="30%"
            rx="15vw"
            ry="25vh"
            fill="url(#gradient1)"
          />
          <ellipse
            {...stylex.props(styles.ellipse, styles.animationTwo)}
            cx="75%"
            cy="80%"
            rx="25vw"
            ry="15vh"
            fill="url(#gradient2)"
          />
          <ellipse
            {...stylex.props(styles.ellipse, styles.animationThree)}
            cx="30%"
            cy="90%"
            rx="20vw"
            ry="30vh"
            fill="url(#gradient3)"
          />
          <ellipse
            {...stylex.props(styles.ellipse, styles.animationFour)}
            cx="70%"
            cy="30%"
            rx="30vw"
            ry="20vh"
            fill="url(#gradient4)"
          />
          <ellipse
            {...stylex.props(styles.ellipse, styles.animationFour)}
            cx="50%"
            cy="50%"
            rx="30vw"
            ry="20vh"
            fill="url(#gradient4)"
          />
        </g>
        <filter id="blur" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="100" />
        </filter>
      </svg>
    </div>
  );
};

export default AuroraBackground;
