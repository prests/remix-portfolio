import * as stylex from '@stylexjs/stylex';

import { baseColors, blueGrey, blueGreyAlpha, grey, greyAlpha, orange, orangeAlpha } from './colors.stylex';
import { tokens } from './tokens.stylex';

import type { ThemeTokens } from './themes.types';

const darkTheme = stylex.createTheme<stylex.VarGroup<ThemeTokens>>(tokens, {
  // Pages
  color_base_page_background: stylex.types.color(blueGrey.bg800),
  color_gradient_one_background_start: stylex.types.color(orange.o600),
  color_gradient_one_background_end: stylex.types.color(orange.o700),
  color_gradient_two_background_start: stylex.types.color(orange.o600),
  color_gradient_two_background_end: stylex.types.color(orange.o700),
  color_gradient_three_background_start: stylex.types.color(blueGrey.bg700),
  color_gradient_three_background_end: stylex.types.color(blueGrey.bg800),
  /* ---------------------------- */
  // Actions
  color_action_text: stylex.types.color(blueGrey.bg50),
  color_action_outline: stylex.types.color(orangeAlpha.o300_40),

  // Fill
  color_action_background_fill: stylex.types.color(orange.o300),
  color_action_background_fill_hover: stylex.types.color(orangeAlpha.o300_90),
  color_action_text_fill: stylex.types.color(blueGrey.bg800),

  // Outline
  color_action_text_outline: stylex.types.color(orange.o300),
  color_action_background_outline: stylex.types.color(baseColors.transparent),
  color_action_background_outline_hover: stylex.types.color(orangeAlpha.o300_20),
  color_action_border_outline: stylex.types.color(orange.o300),

  // Ghost
  color_action_background_ghost: stylex.types.color(baseColors.transparent),
  color_action_background_ghost_hover: stylex.types.color(blueGreyAlpha.bg50_20),
  /* ---------------------------- */
  // Typography
  color_text_base: stylex.types.color(grey.g300),
  color_text_mute: stylex.types.color(greyAlpha.g300_60),
  color_text_brand: stylex.types.color(orange.o300),
  color_text_flare: stylex.types.color(grey.g50),
  /* ---------------------------- */
  // Dialog
  color_dialog_background_color: stylex.types.color(blueGrey.bg800),
  color_dialog_border_color: stylex.types.color(blueGrey.bg800),
});

export { darkTheme };
