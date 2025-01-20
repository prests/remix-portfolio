import * as stylex from '@stylexjs/stylex';

import Heading from '../components/typography/heading/Heading';
import Text from '../components/typography/text/Text';
import { rounded } from '../themes/rounded.stylex';
import { spacing } from '../themes/spacing.stylex';
import { tokens } from '../themes/tokens.stylex';
import { size } from '../themes/typography.stylex';

import type { MetaFunction } from '@remix-run/node';
import type { PropsWithChildren } from 'react';

const meta: MetaFunction = () => [
  { title: 'About Shayne Preston - Software Engineer & Web Developer' },
  {
    name: 'description',
    content:
      'Learn more about Shayne Preston, a driven software engineer. Discover their journey, skills, and the story behind their work and passions.',
  },
];

const lgSize = 1024 as const;
const lg = `@media (min-width: ${lgSize}px)`;

const styles = stylex.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: spacing.s9,
  },
  title: {
    color: tokens.color_text_brand,
  },
  section: {
    display: 'flex',
    flexDirection: {
      default: 'column',
      [lg]: 'row',
    },
  },
  aboutContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.s5,
    flex: 1,
  },
  text: {
    color: tokens.color_text_base,
  },
  technologies: {
    color: tokens.color_text_base,
    listStylePosition: 'inside',
  },
  technology: {
    color: { '::marker': tokens.color_text_brand },
    content: { '::marker': '\\21A0' },
    fontSize: { '::marker': size.s4 },
  },
  technologyText: {
    paddingLeft: spacing.s2,
  },
  image: {
    objectFit: 'cover',
    borderRadius: rounded.md,
    marginLeft: {
      default: 'auto',
      [lg]: 'none',
    },
    marginRight: {
      default: 'auto',
      [lg]: spacing.s9,
    },
    transform: {
      default: 'none',
      [lg]: 'rotate(-5deg)',
    },
  },
});

const AboutRoute = () => (
  <main {...stylex.props(styles.page)}>
    <section {...stylex.props(styles.section)}>
      <img
        {...stylex.props(styles.image)}
        src="/me.JPG"
        alt="Shayne Preston, a Software Engineer"
        width="500px"
        height="500px"
        loading="eager"
      />

      <div {...stylex.props(styles.aboutContent)}>
        <Heading as="h1" size={9} weight="black" wrap="nowrap" truncate={false} style={styles.title}>
          About Me
        </Heading>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          Hey! My name is Shayne, I'm a Software Engineer, and I am obsessed with the web. My passion for web
          development began in high school where I took an Introduction to Programming class. Through that class I
          learned about HTML and CSS. I loved the creativity and possibilities that a webpage could bring.
        </Text>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          With that taste of programming I decided to pursue a degree in Computer and Systems Engineering at Rensselaer
          Polytechnic Institute. I used my time there to explore different aspects of computer engineering from computer
          architecture in classes, to mobile app development in RCOS.
        </Text>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          These days I'm working on web based applications both on the frontend and on the backend at DraftKings. These
          apps cater to hundreds of thousands of users daily and are a cornerstone to DraftKings' financial platform.
        </Text>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          Outside of engineering I have many hobbies. Music has always been a big part of my life, and when Covid-19
          kept everyone locked indoors, I decided to teach myself how to play the guitar. I also love being outdoors! In
          the summer you can catch me outside camping or at the beach, and in the winter you'll find me skiing with
          friends and family.
        </Text>

        <div>
          <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
            Technologies I'm currently working with:
          </Text>

          <ul {...stylex.props(styles.technologies)}>
            <TechnologyElement>Javascript/Typescript</TechnologyElement>
            <TechnologyElement>Node, Express, Fastify, Hono</TechnologyElement>
            <TechnologyElement>React and Remix</TechnologyElement>
            <TechnologyElement>Vite, Vitest, Jest, Playwright</TechnologyElement>
            <TechnologyElement>Golang</TechnologyElement>
          </ul>
        </div>
      </div>
    </section>
  </main>
);

const TechnologyElement = ({ children }: PropsWithChildren) => (
  <li {...stylex.props(styles.technology)}>
    <Text as="span" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.technologyText}>
      {children}
    </Text>
  </li>
);

export default AboutRoute;
export { meta };
