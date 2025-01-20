import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { rounded } from '../../themes/rounded.stylex';
import { spacing } from '../../themes/spacing.stylex';
import { tokens } from '../../themes/tokens.stylex';
import { size, weights } from '../../themes/typography.stylex';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';

interface TabRootProps extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
}

interface TabTriggerProps extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
}

interface TabListProps extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.List>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
}

interface TabContentProps extends Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Content>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
}

const sm = '@media (min-width: 640px)';

const styles = stylex.create({
  tabsList: {
    display: 'inline-flex',
    height: size.s9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.s2,
  },
  tabsTrigger: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: {
      default: 'relative',
      ':is([data-state="inactive"])::after': 'absolute',
    },
    bottom: {
      ':is([data-state="inactive"])::after': 0,
    },
    left: {
      ':is([data-state="inactive"])::after': 0,
    },
    width: {
      ':is([data-state="inactive"])::after': '100%',
    },
    height: {
      ':is([data-state="inactive"])::after': '0.175rem',
    },
    content: {
      ':is([data-state="inactive"])::after': '',
    },
    background: {
      ':is([data-state="inactive"])::after': tokens.color_text_brand,
    },
    whiteSpace: 'nowrap',
    borderRadius: rounded.sm,
    padding: `${spacing.s2} ${spacing.s3}`,
    fontSize: size.s2,
    fontWeight: weights.medium,
    transition: { default: 'all 0.2s ease-in-out', ':is([data-state="inactive"])::after': 'transform 0.3s ease' },
    transform: {
      ':is([data-state="inactive"])::after': 'scale(0, 1.25)',
      ':is([data-state="inactive"]):hover::after': 'scale(1, 1.25)',
    },
    outline: '3px solid transparent',
    boxShadow: {
      ':focus-visible': `0 0 0 3px ${tokens.color_action_outline}`,
    },
    pointerEvents: {
      ':disabled': 'none',
    },
    opacity: {
      ':disabled': 0.5,
    },
    color: {
      default: tokens.color_text_base,
      ':is([data-state="active"])': tokens.color_text_brand,
    },
  },
  tabsContent: {
    borderTop: { default: 'none', [sm]: `solid 1px ${tokens.color_text_base}` },
    borderLeft: { default: `solid 1px ${tokens.color_text_base}`, [sm]: 'none' },
    paddingTop: { default: 'none', [sm]: spacing.s2 },
    paddingLeft: { default: spacing.s2, [sm]: 'none' },
    marginTop: spacing.s1,
    outline: '3px solid transparent',
    boxShadow: {
      ':focus-visible': `0 0 0 3px ${tokens.color_action_outline}`,
    },
  },
});

const Tabs = forwardRef<ElementRef<typeof TabsPrimitive.Root>, TabRootProps>(({ style, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} {...stylex.props(style)} {...props} />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = forwardRef<ElementRef<typeof TabsPrimitive.List>, TabListProps>(({ style, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} {...stylex.props(styles.tabsList, style)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<ElementRef<typeof TabsPrimitive.Trigger>, TabTriggerProps>(
  ({ style, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} {...stylex.props(styles.tabsTrigger, style)} {...props} />
  )
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<ElementRef<typeof TabsPrimitive.Content>, TabContentProps>(
  ({ style, ...props }, ref) => (
    <TabsPrimitive.Content ref={ref} {...stylex.props(styles.tabsContent, style)} {...props} />
  )
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
