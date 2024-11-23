import * as stylex from '@stylexjs/stylex';

import { colors } from './colors.stylex';
import { tokens } from './tokens.stylex';

import type { ThemeTokens } from './themes.types';

const darkTheme = stylex.createTheme<stylex.VarGroup<ThemeTokens>>(tokens, {
  // Pages
  color_page_background: stylex.types.color(colors.blue_grey_700),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color(colors.orange_300),
  color_action_outline: stylex.types.color(colors.orange_300_40),

  // Fill
  color_action_background_fill: stylex.types.color(colors.orange_300),
  color_action_background_fill_hover: stylex.types.color(colors.orange_300_90),
  color_action_text_fill: stylex.types.color(colors.blue_grey_800),

  // Outline
  color_action_background_outline: stylex.types.color(colors.transparent),
  color_action_background_outline_hover: stylex.types.color(colors.orange_300_20),
  color_action_border_outline: stylex.types.color(colors.orange_300),

  // Ghost
  color_action_background_ghost: stylex.types.color(colors.transparent),
  color_action_background_ghost_hover: stylex.types.color(colors.orange_300_20),
  /* ---------------------------- */
});

export { darkTheme };
