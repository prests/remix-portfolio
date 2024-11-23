import { Slot } from '@radix-ui/react-slot';
import * as stylex from '@stylexjs/stylex';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { tokens } from '../../themes/tokens.stylex';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof Omit<typeof styles, 'base'>;
  asChild?: boolean;
}

const styles = stylex.create({
  base: {
    height: '2.5rem',
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

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'fill', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} {...stylex.props(styles.base, styles[variant])} {...props} />;
  }
);
CustomButton.displayName = 'Custom Button';

export default CustomButton;
export type { ButtonProps };
