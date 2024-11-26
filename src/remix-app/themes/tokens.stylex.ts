import * as stylex from '@stylexjs/stylex';

import { baseColors, blueGrey, orange, orangeAlpha } from './colors.stylex';

import type { Tokens } from './themes.types';

/**
 * @HACK - StyleX Does not support importing other const currently. They need to be defined statically
 *
 * Open RFC to support this behavior: https://github.com/facebook/stylex/discussions/502
 */
const DARK = '@media (prefers-color-scheme: dark)';

export const tokens = stylex.defineVars<Tokens>({
  // Pages
  color_base_page_background: stylex.types.color({ default: blueGrey.bg50, [DARK]: blueGrey.bg700 }),
  color_gradient_one_background_start: stylex.types.color({ default: orange.o100, [DARK]: orange.o600 }),
  color_gradient_one_background_end: stylex.types.color({ default: orange.o200, [DARK]: orange.o700 }),
  color_gradient_two_background_start: stylex.types.color({ default: orange.o100, [DARK]: orange.o600 }),
  color_gradient_two_background_end: stylex.types.color({ default: orange.o200, [DARK]: orange.o700 }),
  color_gradient_three_background_start: stylex.types.color({ default: blueGrey.bg100, [DARK]: blueGrey.bg600 }),
  color_gradient_three_background_end: stylex.types.color({ default: blueGrey.bg200, [DARK]: blueGrey.bg700 }),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color({ default: orange.o700, [DARK]: orange.o300 }),
  color_action_outline: stylex.types.color({ default: orangeAlpha.o700_40, [DARK]: orangeAlpha.o300_40 }),

  // Fill
  color_action_background_fill: stylex.types.color({ default: orange.o700, [DARK]: orange.o300 }),
  color_action_background_fill_hover: stylex.types.color({
    default: orangeAlpha.o700_90,
    [DARK]: orangeAlpha.o300_90,
  }),
  color_action_text_fill: stylex.types.color({ default: blueGrey.bg50, [DARK]: blueGrey.bg800 }),

  // Outline
  color_action_background_outline: stylex.types.color({
    default: baseColors.transparent,
    [DARK]: baseColors.transparent,
  }),
  color_action_background_outline_hover: stylex.types.color({
    default: orangeAlpha.o700_20,
    [DARK]: orangeAlpha.o300_20,
  }),
  color_action_border_outline: stylex.types.color({ default: orange.o700, [DARK]: orange.o300 }),

  // Ghost
  color_action_background_ghost: stylex.types.color({
    default: baseColors.transparent,
    [DARK]: baseColors.transparent,
  }),
  color_action_background_ghost_hover: stylex.types.color({
    default: orangeAlpha.o700_20,
    [DARK]: orangeAlpha.o300_20,
  }),
  /* ---------------------------- */
  // Typography
  color_text_brand: stylex.types.color({ default: orange.o700, [DARK]: orange.o300 }),
});
