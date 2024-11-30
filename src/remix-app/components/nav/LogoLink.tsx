import { Link } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';

import Logo from '../../assets/icons/Logo/Logo';

interface LogoLinkProps {
  onLinkClick?: () => void;
}

const styles = stylex.create({
  logo: {
    height: '4rem',
    width: '4rem',
  },
});

const LogoLink = ({ onLinkClick }: LogoLinkProps) => (
  <Link {...stylex.props(styles.logo)} to="/" aria-label="Home" onClick={onLinkClick}>
    <Logo style={styles.logo} />
  </Link>
);

export default LogoLink;
