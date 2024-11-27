import { Link } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';

import Logo from '../../assets/Logo/Logo';
import { spacing } from '../../themes/spacing.stylex';

import NavBarLinks from './NavBarLinks';

const styles = stylex.create({
  base: {
    margin: spacing.s4,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '4rem',
    width: '4rem',
  },
  links: {
    display: 'flex',
    gap: spacing.s3,
    marginLeft: 'auto',
  },
});

const NavBar = () => {
  return (
    <nav {...stylex.props(styles.base)}>
      <Link to="/" aria-label="Home">
        <Logo style={styles.logo} />
      </Link>

      <div {...stylex.props(styles.links)}>
        <NavBarLinks />
      </div>
    </nav>
  );
};

export default NavBar;
