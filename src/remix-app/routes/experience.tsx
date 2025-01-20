import * as stylex from '@stylexjs/stylex';
import { useCallback, useEffect, useState } from 'react';

import DraftKingsExperience from '../components/experience/DraftKingsExperience';
import FactSetExperience from '../components/experience/FactSetExperience';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs/Tabs';
import { spacing } from '../themes/spacing.stylex';
import { size, weights } from '../themes/typography.stylex';

import type { MetaFunction } from '@remix-run/node';

const FACTSET_TAB_KEY = 'factset' as const;
const DRAFTKINGS_TAB_KEY = 'draftkings' as const;

const smSize = 640 as const;
const sm = `@media (min-width: ${smSize}px)`;

const meta: MetaFunction = () => [
  { title: 'Experience Shayne Preston - Software Engineer & Web Developer' },
  {
    name: 'description',
    content: "Learn more about Shayne Preston's software experience. Discover passed and present projects.",
  },
];

const styles = stylex.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingTop: spacing.s4,
    alignItems: 'center',
  },
  tabsContainer: {
    display: 'flex',
    flexDirection: { default: 'row', [sm]: 'column' },
    width: `min(100%, 800px)`,
    flexGrow: 1,
    padding: { default: `0 ${spacing.s2}`, [sm]: `0 ${spacing.s6}` },
  },
  tabListContainer: {
    display: 'grid',
    gridTemplateColumns: { default: 'none', [sm]: 'repeat(2, 1fr)' },
    gridTemplateRows: { default: 'repeat(2, 1fr)', [sm]: 'none' },
    width: 'min-content',
    margin: '0 auto',
  },
  tabListItem: {
    fontWeight: weights.bold,
    fontSize: size.s4,
  },
});

const ExperienceRoute = () => {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  const onResize = useCallback(() => {
    setOrientation(window.innerWidth > smSize ? 'horizontal' : 'vertical');
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <main {...stylex.props(styles.page)}>
      <Tabs defaultValue={DRAFTKINGS_TAB_KEY} style={styles.tabsContainer} orientation={orientation}>
        <TabsList style={styles.tabListContainer}>
          <TabsTrigger style={styles.tabListItem} value={DRAFTKINGS_TAB_KEY}>
            DraftKings
          </TabsTrigger>
          <TabsTrigger style={styles.tabListItem} value={FACTSET_TAB_KEY}>
            FactSet
          </TabsTrigger>
        </TabsList>

        <TabsContent value={DRAFTKINGS_TAB_KEY}>
          <DraftKingsExperience />
        </TabsContent>

        <TabsContent value={FACTSET_TAB_KEY}>
          <FactSetExperience />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ExperienceRoute;
export { meta };
