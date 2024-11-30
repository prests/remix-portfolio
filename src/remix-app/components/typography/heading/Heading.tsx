import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import {
  textAlignStyles,
  truncateStyles,
  typographyStyles,
  weightStyles,
  wrapStyles,
} from '../../../themes/typography.stylex';

import type { TypographyProps } from '../typography.types';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

interface HeadingProps
  extends TypographyProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    Omit<ComponentPropsWithoutRef<'h1'>, 'style'> {}

const Heading = forwardRef<ElementRef<'h1'>, HeadingProps>(
  ({ align, as: Tag, asChild, children, size, style, truncate, weight, wrap, ...props }, forwardedRef) => (
    <Slot
      ref={forwardedRef}
      {...props}
      {...stylex.props(
        typographyStyles[size],
        weightStyles[weight],
        align && textAlignStyles[align],
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
