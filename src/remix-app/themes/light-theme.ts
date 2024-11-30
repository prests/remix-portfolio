import * as stylex from '@stylexjs/stylex';

import { baseColors, blueGrey, blueGreyAlpha, orange, orangeAlpha } from './colors.stylex';
import { tokens } from './tokens.stylex';

import type { ThemeTokens } from './themes.types';

const lightTheme = stylex.createTheme<stylex.VarGroup<ThemeTokens>>(tokens, {
  // Pages
  color_base_page_background: stylex.types.color(blueGrey.bg50),
  color_gradient_one_background_start: stylex.types.color(orange.o100),
  color_gradient_one_background_end: stylex.types.color(orange.o200),
  color_gradient_two_background_start: stylex.types.color(orange.o100),
  color_gradient_two_background_end: stylex.types.color(orange.o200),
  color_gradient_three_background_start: stylex.types.color(blueGrey.bg100),
  color_gradient_three_background_end: stylex.types.color(blueGrey.bg200),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color(blueGrey.bg700),
  color_action_outline: stylex.types.color(orangeAlpha.o700_40),

  // Fill
  color_action_background_fill: stylex.types.color(orange.o700),
  color_action_background_fill_hover: stylex.types.color(orangeAlpha.o700_90),
  color_action_text_fill: stylex.types.color(blueGrey.bg50),

  // Outline
  color_action_text_outline: stylex.types.color(orange.o700),
  color_action_background_outline: stylex.types.color(baseColors.transparent),
  color_action_background_outline_hover: stylex.types.color(orangeAlpha.o700_20),
  color_action_border_outline: stylex.types.color(orange.o700),

  // Ghost
  color_action_background_ghost: stylex.types.color(baseColors.transparent),
  color_action_background_ghost_hover: stylex.types.color(blueGreyAlpha.bg700_20),
  /* ---------------------------- */
  // Typography
  color_text_brand: stylex.types.color(orange.o700),
  /* ---------------------------- */
  // Dialog
  color_dialog_background_color: stylex.types.color(blueGrey.bg50),
  color_dialog_border_color: stylex.types.color(blueGrey.bg100),
});

export { lightTheme };
