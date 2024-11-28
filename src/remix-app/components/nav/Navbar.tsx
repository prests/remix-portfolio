import { Link } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';
import { useCallback, useEffect, useState } from 'react';

import CloseIcon from '../../assets/icons/CloseIcon';
import HamburgerMenuIcon from '../../assets/icons/HamburgerMenuIcon';
import Logo from '../../assets/icons/Logo/Logo';
import { spacing } from '../../themes/spacing.stylex';
import Button from '../button/Button';

import HamburgerNavMenu from './HamburgerNavMenu';
import NavBarLinks from './NavBarLinks';

const smSize = 640 as const;
const sm = `@media (min-width: ${smSize}px)`;

const styles = stylex.create({
  base: {
    margin: spacing.s4,
    display: 'flex',
    alignItems: 'center',
    zIndex: 10,
  },
  logo: {
    height: '4rem',
    width: '4rem',
  },
  desktopLinksWrapper: {
    display: { default: 'none', [sm]: 'flex' },
    gap: spacing.s3,
    marginLeft: 'auto',
  },
  hamburgerMenuButton: {
    marginLeft: 'auto',
    zIndex: 10,
    display: {
      default: 'flex',
      [sm]: 'none',
    },
  },
});

const NavBar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const onLinkClick = useCallback(() => setIsHamburgerMenuOpen(false), []);

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      const onResize = () => {
        if (window.innerWidth > smSize) {
          setIsHamburgerMenuOpen(false);
        }
      };

      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
      };
    }

    return;
  }, [isHamburgerMenuOpen]);

  return (
    <nav {...stylex.props(styles.base)}>
      <Link {...stylex.props(styles.logo)} to="/" aria-label="Home" onClick={onLinkClick}>
        <Logo />
      </Link>

      <ul {...stylex.props(styles.desktopLinksWrapper)}>
        <NavBarLinks onLinkClick={onLinkClick} />
      </ul>

      <Button
        variant="ghost"
        onClick={() => setIsHamburgerMenuOpen(isOpen => !isOpen)}
        style={styles.hamburgerMenuButton}
      >
        {isHamburgerMenuOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
      </Button>

      <HamburgerNavMenu isOpen={isHamburgerMenuOpen} />
    </nav>
  );
};

export default NavBar;
