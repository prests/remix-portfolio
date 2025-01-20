import * as stylex from '@stylexjs/stylex';

import Text from '../typography/text/Text';

import Experience from './Experience';
import { experienceStyles } from './experience.stylex';

const FactSetExperience = () => (
  <Experience
    position="Software Engineer III"
    company={{ name: 'FactSet', url: 'https://factset.com' }}
    range="July 2019 - April 2022"
  >
    <ul {...stylex.props(experienceStyles.list)}>
      <li {...stylex.props(experienceStyles.listElement)}>
        <Text
          as="span"
          size={5}
          weight="regular"
          wrap="pretty"
          truncate={false}
          style={experienceStyles.listElementText}
        >
          Created and maintained core applications for FactSet's Research Business Unit. These apps provided real-time
          news, events, and signals to both Buy Side and Sell Side clients.
        </Text>
      </li>

      <li {...stylex.props(experienceStyles.listElement)}>
        <Text
          as="span"
          size={5}
          weight="regular"
          wrap="pretty"
          truncate={false}
          style={experienceStyles.listElementText}
        >
          Managed an agile team to create stable and shareable UI components to improve sustainability across multiple
          FactSet applications.
        </Text>
      </li>

      <li {...stylex.props(experienceStyles.listElement)}>
        <Text
          as="span"
          size={5}
          weight="regular"
          wrap="pretty"
          truncate={false}
          style={experienceStyles.listElementText}
        >
          Designed API endpoints to fetch news and events for internal and external clients.
        </Text>
      </li>

      <li {...stylex.props(experienceStyles.listElement)}>
        <Text
          as="span"
          size={5}
          weight="regular"
          wrap="pretty"
          truncate={false}
          style={experienceStyles.listElementText}
        >
          Migrated legacy code from Angular.js to Vue.js, increasing unit test coverage by utilizing Typescript over
          Javascript, and creating responsive applications.
        </Text>
      </li>
    </ul>
  </Experience>
);

export default FactSetExperience;
