import * as stylex from '@stylexjs/stylex';

import { iconStyles } from './icons.stylex';

import type { BaseIconProps } from './icons.types';

const CloseIcon = ({ style }: BaseIconProps) => (
  <svg
    {...stylex.props(iconStyles.baseIcon, style)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export default CloseIcon;
