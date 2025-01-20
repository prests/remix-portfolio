import * as stylex from '@stylexjs/stylex';

import { spacing } from '../../themes/spacing.stylex';
import { tokens } from '../../themes/tokens.stylex';
import { size } from '../../themes/typography.stylex';

const experienceStyles = stylex.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.s2,
    marginTop: spacing.s4,
    marginLeft: spacing.s5,
    color: tokens.color_text_base,
    listStylePosition: 'inside',
  },
  listElement: {
    color: { '::marker': tokens.color_text_brand },
    content: { '::marker': '\\21A0' },
    fontSize: { '::marker': size.s4 },
  },
  listElementText: {
    paddingLeft: spacing.s2,
  },
});

export { experienceStyles };
