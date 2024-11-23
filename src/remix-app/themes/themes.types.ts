import type { DARK_MODE, LIGHT_MODE } from './themes.constant';
import type { types } from '@stylexjs/stylex';

type Color = ReturnType<typeof types.color<string>>;

type ThemeMode = typeof LIGHT_MODE | typeof DARK_MODE | undefined;

interface Tokens {
  // Pages
  color_page_background: Color;
  /* ---------------------------- */
  // Actions
  color_action_text: Color;
  color_action_outline: Color;

  // Fill
  color_action_background_fill: Color;
  color_action_background_fill_hover: Color;
  color_action_text_fill: Color;

  // Outline
  color_action_background_outline: Color;
  color_action_background_outline_hover: Color;
  color_action_border_outline: Color;

  // Ghost
  color_action_background_ghost: Color;
  color_action_background_ghost_hover: Color;
  /* ---------------------------- */
}

/**
 * Values are either their associated token's token or the token's default type
 */
type ThemeTokens = {
  [Key in keyof Tokens]: Tokens[Key] extends ReturnType<typeof types.color<'default'>>
    ? Tokens[Key] | ReturnType<typeof types.color<'default'>>
    : never;
};

export type { ThemeMode, ThemeTokens, Tokens };
