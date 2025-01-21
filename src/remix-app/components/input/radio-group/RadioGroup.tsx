import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as stylex from '@stylexjs/stylex';
import { forwardRef } from 'react';

import { rounded } from '../../../themes/rounded.stylex';
import { spacing } from '../../../themes/spacing.stylex';
import { tokens } from '../../../themes/tokens.stylex';
import { size, typographyStyles, weightStyles } from '../../../themes/typography.stylex';
import { Label } from '../label/Label';

import type { ComponentPropsWithoutRef, ElementRef } from 'react';

interface RadioGroupRootProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'classname' | 'style'> {
  style?: stylex.StyleXStyles;
  label?: string;
  containerStyle?: stylex.StyleXStyles;
  labelStyle?: stylex.StyleXStyles;
}

interface RadioGroupItemProps
  extends Omit<ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'classname' | 'style'> {
  id: string;
  label?: string;
  containerStyle?: stylex.StyleXStyles;
  radioItemStyle?: stylex.StyleXStyles;
  indicatorStyle?: stylex.StyleXStyles;
  labelStyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  radioGroupContainer: {
    opacity: {
      ':has(:is(button:disabled))': 0.5,
    },
    cursor: {
      ':has(:is(button:disabled))': 'not-allowed',
    },
  },
  radioGroupContainerLabel: {
    color: tokens.color_text_base as string,
  },
  radioGroup: {
    display: 'grid',
    gap: spacing.s2,
  },
  radioGroupItemContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.s2,
    opacity: {
      ':has(:is(button:disabled))': 0.5,
    },
    cursor: {
      ':has(:is(button:disabled))': 'not-allowed',
    },
  },
  radioGroupItem: {
    aspectRatio: '1 / 1',
    height: size.s3,
    width: size.s3,
    borderRadius: rounded.round,
    borderWidth: '1px',
    borderColor: tokens.color_text_brand,
    color: 'red',
    outline: '3px solid transparent',
    boxShadow: {
      ':focus-visible': `0 0 0 3px ${tokens.color_action_outline}`,
    },
  },
  RadioGroupItemLabel: {
    color: tokens.color_text_base as string,
  },
  radioGroupItemIndicator: {
    position: 'relative',
    width: {
      default: '100%',
      '::after': size.s1,
    },
    height: {
      default: '100%',
      '::after': size.s1,
    },
    display: {
      default: 'flex',
      '::after': 'block',
    },
    alignItems: 'center',
    justifyContent: 'center',
    content: {
      '::after': '',
    },
    borderRadius: {
      '::after': '50%',
    },
    backgroundColor: {
      '::after': tokens.color_text_brand,
    },
  },
});

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupRootProps>(
  ({ style, id, label, containerStyle, labelStyle, ...props }, ref) => {
    return (
      <div {...stylex.props(styles.radioGroupContainer, containerStyle)}>
        {label && (
          <Label
            htmlFor={id}
            style={[styles.radioGroupContainerLabel, typographyStyles[4], weightStyles.bold, labelStyle]}
          >
            {label}
          </Label>
        )}
        <RadioGroupPrimitive.Root {...stylex.props(styles.radioGroup, style)} {...props} id={id} ref={ref} />
      </div>
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ id, label, containerStyle, radioItemStyle, indicatorStyle, labelStyle, ...props }, ref) => {
    return (
      <div {...stylex.props(styles.radioGroupItemContainer, containerStyle)}>
        <RadioGroupPrimitive.Item id={id} ref={ref} {...stylex.props(styles.radioGroupItem, radioItemStyle)} {...props}>
          <RadioGroupPrimitive.Indicator {...stylex.props(styles.radioGroupItemIndicator, indicatorStyle)} />
        </RadioGroupPrimitive.Item>
        {label && (
          <Label htmlFor={id} style={[styles.RadioGroupItemLabel, labelStyle]}>
            {label}
          </Label>
        )}
      </div>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
