import * as stylex from '@stylexjs/stylex';

import { spacing } from '../../themes/spacing.stylex';

import HamburgerNavMenu from './HamburgerNavMenu';
import LogoLink from './LogoLink';
import NavBarLinks from './NavBarLinks';

const smSize = 640 as const;
const sm = `@media (min-width: ${smSize}px)`;

const styles = stylex.create({
  base: {
    margin: spacing.s4,
    display: 'flex',
    alignItems: 'center',
  },
  desktopLinksWrapper: {
    display: { default: 'none', [sm]: 'flex' },
    gap: spacing.s3,
    marginLeft: 'auto',
  },
});

const NavBar = () => {
  return (
    <nav {...stylex.props(styles.base)}>
      <LogoLink />

      <ul {...stylex.props(styles.desktopLinksWrapper)}>
        <NavBarLinks />
      </ul>

      <HamburgerNavMenu />
    </nav>
  );
};

export default NavBar;
