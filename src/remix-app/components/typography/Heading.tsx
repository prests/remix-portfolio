import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import {
  textAlignStyles,
  truncateStyles,
  typographyStyles,
  weightStyles,
  wrapStyles,
} from 'src/remix-app/themes/typography.stylex';

import type { ComponentPropsWithRef, ElementRef, PropsWithChildren } from 'react';
import type { Color } from 'src/remix-app/themes/themes.types';

interface HeadingProps extends PropsWithChildren, Omit<ComponentPropsWithRef<'h1'>, 'style'> {
  /**
   * HTML heading element.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Header size.
   */
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  /**
   * Font weight.
   */
  weight: 'light' | 'regular' | 'medium' | 'bold';
  /**
   * Text alignment.
   */
  align: 'left' | 'center' | 'right';
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
  style?: stylex.StyleXStyles<{
    color?: Color;
  }>;
}

const Heading = forwardRef<ElementRef<'h1'>, HeadingProps>(
  ({ align, as: Tag, asChild, children, size, style, truncate, weight, wrap, ...props }, forwardedRef) => (
    <Slot
      ref={forwardedRef}
      {...props}
      {...stylex.props(
        typographyStyles[size],
        weightStyles[weight],
        textAlignStyles[align],
        wrapStyles[wrap],
        truncate && truncateStyles.truncate,
        style
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  )
);
Heading.displayName = 'Heading';

export default Heading;
