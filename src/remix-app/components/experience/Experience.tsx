import { Link } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';

import { tokens } from '../../themes/tokens.stylex';
import Heading from '../typography/heading/Heading';
import Text from '../typography/text/Text';

import type { PropsWithChildren } from 'react';

interface Company {
  name: string;
  url: string;
}

interface ExperienceProps extends PropsWithChildren {
  position: string;
  company: Company;
  range: string;
}

const styles = stylex.create({
  position: {
    color: tokens.color_text_base,
  },
  companyLink: {
    color: tokens.color_text_brand,
    textWrap: 'nowrap',
    background: `none, linear-gradient(to right, ${tokens.color_text_brand}, ${tokens.color_text_brand})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 100%, 0 100%',
    backgroundSize: {
      default: '100% 0.2rem, 0 0.2rem',
      ':hover': '0 0.2rem, 100% 0.2rem',
      ':focus': '0 0.2rem, 100% 0.2rem',
    },
    transition: 'background-size 400ms',
  },
  range: {
    color: tokens.color_text_base,
  },
});

const Experience = ({ position, company, range, children }: ExperienceProps) => (
  <div>
    <Heading as="h3" size={6} weight="bold" wrap="pretty" truncate={false} style={styles.position}>
      {position}{' '}
      <Link {...stylex.props(styles.companyLink)} to={company.url} aria-label={company.name}>
        @ {company.name}
      </Link>
    </Heading>

    <Text as="p" size={4} weight="light" wrap="pretty" truncate={false} style={styles.range}>
      {range}
    </Text>

    {children}
  </div>
);

export default Experience;
