import * as stylex from '@stylexjs/stylex';

import Heading from '../components/typography/heading/Heading';
import Text from '../components/typography/text/Text';
import { rounded } from '../themes/rounded.stylex';
import { spacing } from '../themes/spacing.stylex';
import { tokens } from '../themes/tokens.stylex';
import { size } from '../themes/typography.stylex';

import type { PropsWithChildren } from 'react';
import type { MetaFunction } from 'react-router';

interface TechnologyElementProps extends PropsWithChildren {
  group: string;
}

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
  technologiesHeader: {
    color: tokens.color_text_flare,
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
  technologyGroupName: {
    color: tokens.color_text_flare,
  },
  image: {
    objectFit: 'cover',
    width: 'min(100%, 500px)',
    height: 'min(100%, 500px)',
    borderRadius: rounded.md,
    marginLeft: {
      default: 'auto',
      [lg]: 'none',
    },
    marginRight: {
      default: 'auto',
      [lg]: spacing.s9,
    },
  },
});

const AboutRoute = () => (
  <main {...stylex.props(styles.page)}>
    <section {...stylex.props(styles.section)}>
      <img
        {...stylex.props(styles.image)}
        srcSet="me-400w.webp 400w, me-600w.webp 600w, me-800w.webp 800w, me-1000w.webp 1000w, me-1200w.webp 1200w, me-1600w.webp 1600w, me-2000w.webp 2000w"
        sizes="(max-width: 400px) 400px, (max-width: 600px) 600px, (max-width: 800px) 800px, (max-width: 1000px) 1000px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (min-width: 1601px) 2000px"
        src="me.JPG"
        alt="Shayne Preston, a Software Engineer"
      />

      <div {...stylex.props(styles.aboutContent)}>
        <Heading as="h1" size={9} weight="black" wrap="nowrap" truncate={false} style={styles.title}>
          About Me
        </Heading>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          I’m a Software Engineer with a passion for crafting seamless, intuitive, and secure web experiences. My
          obsession with the web drives me to tackle complex challenges and deliver creative, user-centered solutions.
          Whether it’s designing pixel-perfect interfaces or architecting robust backend systems, I thrive at the
          intersection of innovation and practicality.
        </Text>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          I take pride in my full-stack technical expertise, adhering to strong standards and prioritizing application
          security over fleeting framework trends. My goal is to create scalable, maintainable, and future-proof
          applications that make a meaningful impact. I’m particularly passionate about enhancing user experiences,
          ensuring every interaction feels effortless and engaging.
        </Text>

        <Text as="p" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.text}>
          Beyond engineering, I’m a firm believer in pursuing a balanced and fulfilling life. Music is one of my
          greatest passions—you'll always find exploring new sounds or revisiting classics. I’m also an outdoor
          enthusiast who finds inspiration in nature. In the summer, you’ll often find me camping under the stars or
          relaxing at the beach, and in the winter, I’m carving down ski slopes with friends and family.
        </Text>

        <div>
          <Text as="p" size={5} weight="bold" wrap="pretty" truncate={false} style={styles.technologiesHeader}>
            Technologies I'm Currently Working With:
          </Text>

          <ul {...stylex.props(styles.technologies)}>
            <TechnologyElement group="Languages/Frameworks">
              Javascript/Typescript, Golang, React, Remix
            </TechnologyElement>
            <TechnologyElement group="Backend Frameworks">Node.js, Express, Fastify, Hono</TechnologyElement>
            <TechnologyElement group="Tools/Testing">Vite, Vitest, Jest, Playwright, Cypress</TechnologyElement>
          </ul>
        </div>
      </div>
    </section>
  </main>
);

const TechnologyElement = ({ group, children }: TechnologyElementProps) => (
  <li {...stylex.props(styles.technology)}>
    <Text as="span" size={5} weight="regular" wrap="pretty" truncate={false} style={styles.technologyText}>
      <Text as="span" size={5} weight="bold" wrap="pretty" truncate={false} style={styles.technologyGroupName}>
        {group}
        {': '}
      </Text>
      {children}
    </Text>
  </li>
);

export default AboutRoute;
export { meta };
