import * as stylex from '@stylexjs/stylex';

import { tokens } from '../../../themes/tokens.stylex';
import { iconStyles } from '../icons.stylex';

import { logoVars } from './logo.stylex';

import type { BaseIconProps } from '../icons.types';

const stroke = stylex.keyframes({
  from: {
    strokeDashoffset: 822,
  },
  to: {
    strokeDashoffset: 0,
  },
});

const styles = stylex.create({
  base: {
    [logoVars.lineColor]: {
      default: tokens.color_base_page_logo,
      ':hover': tokens.color_base_page_logo_hover,
    },
  },
  line: {
    fill: logoVars.lineColor,
    strokeWidth: 5,
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
    animationName: stroke,
    animationDuration: '5s',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
  },
});

const Logo = ({ style }: BaseIconProps) => (
  <svg
    {...stylex.props(iconStyles.baseIcon, styles.base, style)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 214 346"
  >
    <g>
      <polygon {...stylex.props(styles.line)} points="51.12,138.12 38.73,143.42 38.73,79.67 51.12,85.28 	" />
      <polygon
        {...stylex.props(styles.line)}
        points="173.21,79.96 105.77,13.64 38.73,79.67 51.12,85.54 105.97,31.19 160.82,85.56 	"
      />
      <polygon {...stylex.props(styles.line)} points="114.25,200.52 101.93,205.82 38.73,143.42 51.12,138.12 	" />
      <polygon {...stylex.props(styles.line)} points="175.27,201.01 162.88,206.31 99.68,143.94 112.07,138.61 	" />
      <polygon {...stylex.props(styles.line)} points="173.21,143.42 161.32,138.12 160.82,85.09 173.21,79.96 	" />
      <polygon {...stylex.props(styles.line)} points="145.38,171.5 136.6,162.83 161.32,138.12 173.21,143.42 	" />
      <polygon {...stylex.props(styles.line)} points="112.07,138.61 99.68,143.94 99.68,76.57 112.07,76.57 	" />
      <g>
        <polygon {...stylex.props(styles.line)} points="162.88,206.31 175.27,201.01 175.27,264.76 162.88,259.15 		" />
        <polygon
          {...stylex.props(styles.line)}
          points="40.79,264.47 108.23,330.79 175.27,264.76 162.88,258.89 108.03,313.24 53.18,258.87 		"
        />
        <polygon {...stylex.props(styles.line)} points="40.79,201.01 52.68,206.31 53.18,259.34 40.79,264.47 		" />
        <polygon {...stylex.props(styles.line)} points="68.63,172.92 77.41,181.58 52.68,206.31 40.79,201.01 		" />
        <polygon {...stylex.props(styles.line)} points="101.93,205.82 114.32,200.49 114.32,267.86 101.93,267.86 		" />
      </g>
    </g>
  </svg>
);

export default Logo;
