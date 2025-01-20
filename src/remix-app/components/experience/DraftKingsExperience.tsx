import * as stylex from '@stylexjs/stylex';

import Text from '../typography/text/Text';

import Experience from './Experience';
import { experienceStyles } from './experience.stylex';

const DraftKingsExperience = () => (
  <Experience
    position="Senior Software Engineer"
    company={{ name: 'DraftKings', url: 'https://draftkings.com' }}
    range="April 2022 - Present"
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
          Create a Quick Deposit microfrontend to build trust with customers by enabling them to deposit to their
          DraftKings wallet without having to leave their play session.
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
          Create scaleable applications and tooling for account management that handles peaks of 1 million users a day
          and 300 thousand users per hour.
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
          Setup threat detection, monitoring, and logging. Ensuring stability of Account Platform applications by
          reducing false positive errors and alerting developers early of production issues.
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
          Design financial tooling to integrate 3rd party payment offerings to increase deposits to DraftKings by 10%.
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
          Implemented a company-wide internal code coverage tool that gives developers a holistic view of their code
          coverage. This led to better overall testing and less redundant test cases.
        </Text>
      </li>
    </ul>
  </Experience>
);

export default DraftKingsExperience;
