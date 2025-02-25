import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { tokens } from '../../themes/tokens.stylex';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button styles.
   */
  variant?: keyof Omit<typeof styles, 'base'>;
  /**
   * Render as a child element.
   */
  asChild?: boolean;
  /**
   * Custom style override.
   */
  styleOverride?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    padding: '0.5rem 1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: tokens.color_action_text,
    outline: '3px solid transparent',
    transition: 'color 0.2s, background-color 0.2s',
    pointerEvents: {
      ':disabled': 'none',
    },
    boxShadow: {
      ':focus-visible': `0 0 0 3px ${tokens.color_action_outline}`,
    },
    opacity: {
      ':disabled': 0.5,
    },
    backgroundColor: 'transparent',
  },
  fill: {
    color: tokens.color_action_text_fill,
    backgroundColor: {
      default: tokens.color_action_background_fill,
      ':hover': tokens.color_action_background_fill_hover,
    },
  },
  outline: {
    color: tokens.color_action_text_outline,
    border: `solid 2px ${tokens.color_action_border_outline}`,
    backgroundColor: {
      default: tokens.color_action_background_outline,
      ':hover': tokens.color_action_background_outline_hover,
    },
  },
  ghost: {
    backgroundColor: {
      default: tokens.color_action_background_ghost,
      ':hover': tokens.color_action_background_ghost_hover,
    },
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'fill', asChild = false, styleOverride, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp {...props} ref={ref} {...stylex.props(styles.base, styles[variant], styleOverride)} />;
  }
);
Button.displayName = 'Button';

export default Button;
export type { ButtonProps };
