import * as stylex from '@stylexjs/stylex';

import GithubIcon from '../../assets/icons/GithubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import { spacing } from '../../themes/spacing.stylex';
import { tokens } from '../../themes/tokens.stylex';
import Button from '../button/Button';
import Text from '../typography/text/Text';

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s3,
  },
  createdBy: {
    color: tokens.color_text_base,
  },
  name: {
    color: tokens.color_text_flare,
  },
  linksWrapper: {
    marginTop: spacing.s2,
    display: 'flex',
  },
  link: {
    height: spacing.s6,
    fill: tokens.color_text_brand,
  },
});

const Footer = () => {
  return (
    <footer {...stylex.props(styles.base)}>
      <Text as="p" size={3} weight="light" wrap="pretty" truncate={false} style={styles.createdBy}>
        Created by{' '}
        <Text as="span" size={3} weight="regular" wrap="pretty" truncate={false} style={styles.name}>
          Shayne Preston
        </Text>
      </Text>

      <div {...stylex.props(styles.linksWrapper)}>
        <a href="https://www.github.com/prests" {...stylex.props(styles.link)} aria-label="Github Profile">
          <Button asChild>
            <GithubIcon />
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/shayne-preston"
          {...stylex.props(styles.link)}
          aria-label="LinkedIn Profile"
        >
          <Button asChild>
            <LinkedInIcon />
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
