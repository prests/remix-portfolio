import * as stylex from '@stylexjs/stylex';

import { baseColors, blueGrey, orange, orangeAlpha } from './colors.stylex';
import { tokens } from './tokens.stylex';

import type { ThemeTokens } from './themes.types';

const darkTheme = stylex.createTheme<stylex.VarGroup<ThemeTokens>>(tokens, {
  // Pages
  color_page_background: stylex.types.color(blueGrey.bg700),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color(orange.o300),
  color_action_outline: stylex.types.color(orangeAlpha.o300_40),

  // Fill
  color_action_background_fill: stylex.types.color(orange.o300),
  color_action_background_fill_hover: stylex.types.color(orangeAlpha.o300_90),
  color_action_text_fill: stylex.types.color(blueGrey.bg800),

  // Outline
  color_action_background_outline: stylex.types.color(baseColors.transparent),
  color_action_background_outline_hover: stylex.types.color(orangeAlpha.o300_20),
  color_action_border_outline: stylex.types.color(orange.o300),

  // Ghost
  color_action_background_ghost: stylex.types.color(baseColors.transparent),
  color_action_background_ghost_hover: stylex.types.color(orangeAlpha.o300_20),
  /* ---------------------------- */
  // Typography
  color_text_brand: stylex.types.color(orange.o300),
});

export { darkTheme };
