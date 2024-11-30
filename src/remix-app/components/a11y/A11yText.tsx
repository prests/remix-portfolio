import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { forwardRef } from 'react';
import { ClientOnly } from 'remix-utils/client-only';

import { getClientNonce } from '../../hooks/nonce';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';

const A11yText = forwardRef<
  ElementRef<typeof VisuallyHidden.Root>,
  Omit<ComponentPropsWithoutRef<typeof VisuallyHidden.Root>, 'nonce'>
>((props: VisuallyHidden.VisuallyHiddenProps, ref) => (
  <ClientOnly>{() => <VisuallyHidden.Root ref={ref} {...props} nonce={getClientNonce()} />}</ClientOnly>
));
A11yText.displayName = VisuallyHidden.Root.displayName;

export default A11yText;
