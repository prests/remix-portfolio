import type { StyleXStyles } from '@stylexjs/stylex';
import type { ElementType } from 'react';
import type { Color } from 'src/remix-app/themes/themes.types';

interface TypographyProps<Tags extends ElementType> {
  /**
   * HTML element to render as.
   */
  as: Tags;
  /**
   * Text size.
   */
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  /**
   * Font weight.
   */
  weight: 'light' | 'regular' | 'medium' | 'bold' | 'black';
  /**
   * Text alignment.
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Text wrapping.
   */
  wrap: 'wrap' | 'nowrap' | 'pretty' | 'balance';
  /**
   * Truncate overflow. Be sure to add aria attributes like title to help with reading truncated messages.
   */
  truncate: boolean;
  /**
   * Render as a child element.
   */
  asChild?: boolean;
  /**
   * Custom styling.
   */
  style?: StyleXStyles<{
    color?: Color;
    padding?: string | number;
    paddingLeft?: string | number;
    paddingTop?: string | number;
    paddingRight?: string | number;
    paddingBottom?: string | number;
    margin?: string | number;
    marginLeft?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
    textAlign?: string;
  }>;
}

export type { TypographyProps };
