import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';
import { ClientOnly } from 'remix-utils/client-only';

import CloseIcon from '../../assets/icons/CloseIcon';
import { getClientNonce } from '../../hooks/nonce';
import { rounded } from '../../themes/rounded.stylex';
import { spacing } from '../../themes/spacing.stylex';
import { tokens } from '../../themes/tokens.stylex';
import Button from '../button/Button';

import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from 'react';

interface DialogContentProps extends Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, 'nonce'> {
  variant?: keyof Omit<typeof contentStyles, 'base'>;
  isCloseOverriden?: boolean;
  container?: DialogPrimitive.DialogPortalProps['container'];
}

const smSize = 640 as const;
const sm = `@media (min-width: ${smSize}px)`;

const contentStyles = stylex.create({
  base: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: {
      default: '100%',
      [sm]: '32rem',
    },
    height: {
      default: '100%',
      [sm]: 'unset',
    },
    zIndex: 50,
    gap: spacing.s4,
    padding: spacing.s4,
    borderWidth: {
      default: 0,
      [sm]: '1px',
    },
    borderColor: tokens.color_dialog_border_color,
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    backgroundColor: tokens.color_dialog_background_color,
    borderRadius: {
      default: 0,
      [sm]: rounded.md,
    },
  },
  fullscreen: {
    height: '100%',
    maxWidth: null,
    borderRadius: 0,
  },
});

const overlayStyles = stylex.create({
  base: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 50,
    backdropFilter: 'blur(5px) brightness(80%)',
  },
});

const styles = stylex.create({
  baseClose: {
    top: spacing.s1,
    right: spacing.s1,
    position: 'fixed',
  },
  baseHeader: {
    display: 'flex',
    flexDirection: 'column',
  },
  baseTitle: {
    width: '100%',
  },
});

const Dialog = (props: DialogPrimitive.DialogProps) => (
  <ClientOnly>{() => <DialogPrimitive.Dialog {...props} />}</ClientOnly>
);

const DialogTrigger = forwardRef<
  ElementRef<typeof DialogPrimitive.Trigger>,
  Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>, 'nonce'>
>((props, ref) => <DialogPrimitive.Trigger ref={ref} {...props} nonce={getClientNonce()} />);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Close>, 'nonce'>
>((props, ref) => <DialogPrimitive.Close ref={ref} {...props} nonce={getClientNonce()} />);
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>, 'nonce'>
>((props, ref) => <DialogPrimitive.Overlay ref={ref} {...props} nonce={getClientNonce()} />);
DialogOverlay.displayName = DialogPrimitive.Trigger.displayName;

const DialogContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ children, container, isCloseOverriden = false, variant, ...props }, ref) => {
    return (
      <DialogPortal container={container}>
        <DialogOverlay {...stylex.props(overlayStyles.base)} />
        <DialogPrimitive.Content
          ref={ref}
          nonce={getClientNonce()}
          {...props}
          {...stylex.props(contentStyles.base, variant && contentStyles[variant])}
        >
          {!isCloseOverriden && (
            <DialogClose asChild>
              <Button variant="ghost" style={styles.baseClose} aria-label="close">
                <CloseIcon />
              </Button>
            </DialogClose>
          )}

          {children}
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div {...stylex.props(styles.baseHeader)} {...props} />
);

const DialogFooter = ({ ...props }: HTMLAttributes<HTMLDivElement>) => <div {...props} />;

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => <DialogPrimitive.Title ref={ref} nonce={getClientNonce()} {...props} />);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => <DialogPrimitive.Description ref={ref} nonce={getClientNonce()} {...props} />);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
