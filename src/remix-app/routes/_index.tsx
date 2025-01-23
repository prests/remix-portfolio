import * as stylex from '@stylexjs/stylex';

import Button from '../components/button/Button';
import Heading from '../components/typography/heading/Heading';
import Text from '../components/typography/text/Text';
import { spacing } from '../themes/spacing.stylex';
import { tokens } from '../themes/tokens.stylex';
import { typographyStyles } from '../themes/typography.stylex';

import type { MetaFunction } from 'react-router';

const meta: MetaFunction = () => [
  { title: 'Shayne Preston - Software Engineer & Web Developer' },
  {
    name: 'description',
    content:
      "Explore Shayne Preston's portfolio, showcasing innovative web development projects and insights into cutting-edge technologies. Discover my expertise in modern tech and programming.",
  },
];

const smSize = 640 as const;
const lgSize = 1024 as const;
const sm = `@media (max-width: ${smSize}px)`;
const lg = `@media (max-width: ${lgSize}px) and (min-width: ${smSize}px)`;

const styles = stylex.create({
  page: {
    marginTop: spacing.s10,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    margin: `${spacing.s6} 0`,
    color: tokens.color_text_brand,
  },
  description: {
    color: tokens.color_text_base,
  },
  contactDescription: {
    margin: `${spacing.s5} 0`,
  },
  name: {
    color: tokens.color_text_flare,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: {
      default: 'left',
      [sm]: 'center',
    },
    margin: {
      default: `${spacing.s8} auto 0`,
      [lg]: `${spacing.s8} ${spacing.s4} 0`,
      [sm]: `${spacing.s8} auto 0`,
    },
    textAlign: {
      default: 'left',
      [sm]: 'center',
    },
  },
  contactButton: {
    flex: '0 0 auto',
    alignSelf: {
      default: 'start',
      [sm]: 'center',
    },
    width: 'auto',
    maxWidth: 'fit-content',
  },
});

const RootIndexRoute = () => (
  <main {...stylex.props(styles.page)}>
    <section {...stylex.props(styles.section)}>
      <Heading as="h1" size={9} weight="black" wrap="nowrap" truncate={false} style={styles.title}>
        Welcome
      </Heading>

      <Heading as="h2" size={7} weight="bold" wrap="pretty" truncate={false} style={styles.description}>
        My name is{' '}
        <Text as="span" size={7} weight="bold" wrap="pretty" truncate={false} style={styles.name}>
          Shayne Preston
        </Text>
        , and I build web applications
      </Heading>

      <Text
        as="p"
        size={5}
        weight="regular"
        wrap="pretty"
        truncate={false}
        style={[styles.description, styles.contactDescription]}
      >
        Want to get in touch with me? Shoot me an email and I'll do my best to get back to you as quickly as possible!
      </Text>

      <Button variant="outline" styleOverride={[typographyStyles[6], styles.contactButton]}>
        Contact Me
      </Button>
    </section>
  </main>
);

export default RootIndexRoute;
export { meta };
