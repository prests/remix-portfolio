import * as LabelPrimitive from '@radix-ui/react-label';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { typographyStyles } from '../../../themes/typography.stylex';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';

interface LabelRootProps extends Omit<ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
}

/**
 * A Label component should always follow immediately after any input component
 */
const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, LabelRootProps>(({ style, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} {...stylex.props(typographyStyles[2], style)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
