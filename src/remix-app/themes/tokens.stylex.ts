import * as stylex from '@stylexjs/stylex';

import { colors } from './colors.stylex';

import type { Tokens } from './themes.types';

/**
 * @HACK - StyleX Does not support importing other const currently. They need to be defined statically
 *
 * Open RFC to support this behavior: https://github.com/facebook/stylex/discussions/502
 */
const DARK = '@media (prefers-color-scheme: dark)';

export const tokens = stylex.defineVars<Tokens>({
  // Pages
  color_page_background: stylex.types.color({ default: colors.blue_grey_050, [DARK]: colors.blue_grey_700 }),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color({ default: colors.orange_700, [DARK]: colors.orange_300 }),
  color_action_outline: stylex.types.color({ default: colors.orange_700_40, [DARK]: colors.orange_300_40 }),

  // Fill
  color_action_background_fill: stylex.types.color({ default: colors.orange_700, [DARK]: colors.orange_300 }),
  color_action_background_fill_hover: stylex.types.color({
    default: colors.orange_700_90,
    [DARK]: colors.orange_300_90,
  }),
  color_action_text_fill: stylex.types.color({ default: colors.blue_grey_050, [DARK]: colors.blue_grey_800 }),

  // Outline
  color_action_background_outline: stylex.types.color({ default: colors.transparent, [DARK]: colors.transparent }),
  color_action_background_outline_hover: stylex.types.color({
    default: colors.orange_700_20,
    [DARK]: colors.orange_300_20,
  }),
  color_action_border_outline: stylex.types.color({ default: colors.orange_700, [DARK]: colors.orange_300 }),

  // Ghost
  color_action_background_ghost: stylex.types.color({ default: colors.transparent, [DARK]: colors.transparent }),
  color_action_background_ghost_hover: stylex.types.color({
    default: colors.orange_700_20,
    [DARK]: colors.orange_300_20,
  }),
  /* ---------------------------- */
});
