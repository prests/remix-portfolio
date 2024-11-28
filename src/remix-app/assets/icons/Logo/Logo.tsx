import * as stylex from '@stylexjs/stylex';

import { tokens } from '../../../themes/tokens.stylex';
import { iconStyles } from '../icons.stylex';

import { logoVars } from './logo.stylex';

import type { BaseIconProps } from '../icons.types';

const styles = stylex.create({
  base: {
    [logoVars.lineColor]: {
      default: tokens.color_action_background_fill,
      ':hover': tokens.color_action_text,
    },
  },
  line: {
    fill: 'none',
    stroke: logoVars.lineColor,
    strokeWidth: 5,
  },
});

const Logo = ({ style }: BaseIconProps) => (
  <svg
    {...stylex.props(iconStyles.baseIcon, styles.base, style)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 83 173.354"
  >
    <g id="Group_2" data-name="Group 2" transform="translate(158 436.177)">
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-156.5 -405.5)" />
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-116.5 -405.5)" />
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-76.5 -405.5)" />
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-76.5 -333.5)" />
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-116.5 -333.5)" />
      <line {...stylex.props(styles.line)} y2="40" transform="translate(-156.5 -333.5)" />
      <line {...stylex.props(styles.line)} x1="40" y2="29.469" transform="translate(-116.5 -293.5)" />
      <line {...stylex.props(styles.line)} x1="40" y2="29.469" transform="translate(-156.5 -434.969)" />
      <line {...stylex.props(styles.line)} x2="40" y2="29.469" transform="translate(-156.5 -293.5)" />
      <line {...stylex.props(styles.line)} x2="40" y2="29.469" transform="translate(-116.5 -434.969)" />
      <line {...stylex.props(styles.line)} x2="40" y2="32" transform="translate(-156.5 -365.5)" />
      <line {...stylex.props(styles.line)} x2="40" y2="32" transform="translate(-116.5 -365.5)" />
      <line {...stylex.props(styles.line)} x1="20" y2="16" transform="translate(-96.5 -365.5)" />
      <line {...stylex.props(styles.line)} x1="20" y2="16" transform="translate(-156.5 -349.5)" />
    </g>
  </svg>
);

export default Logo;
