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

type SpanProps = { as?: 'span' } & Omit<ComponentPropsWithoutRef<'span'>, 'style'>;
type DivProps = { as?: 'div' } & Omit<ComponentPropsWithoutRef<'div'>, 'style'>;
type LabelProps = { as?: 'label' } & Omit<ComponentPropsWithoutRef<'label'>, 'style'>;
type PProps = { as?: 'p' } & Omit<ComponentPropsWithoutRef<'p'>, 'style'>;

type TextProps = TypographyProps<'span' | 'div' | 'label' | 'p'> & (SpanProps | DivProps | LabelProps | PProps);

const Text = forwardRef<ElementRef<'span'>, TextProps>(
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
Text.displayName = 'Text';

export default Text;
