import * as stylex from '@stylexjs/stylex';
import { useCallback, useEffect, useState } from 'react';

import CloseIcon from '../..//assets/icons/CloseIcon';
import HamburgerMenuIcon from '../../assets/icons/HamburgerMenuIcon';
import { spacing } from '../../themes/spacing.stylex';
import A11yText from '../a11y/A11yText';
import Button from '../button/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog/Dialog';

import LogoLink from './LogoLink';
import NavBarLinks from './NavBarLinks';

const smSize = 640 as const;
const sm = `@media (min-width: ${smSize}px)`;

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.s3,
  },
  hamburgerMenuButton: {
    height: spacing.s7,
    marginLeft: 'auto',
    display: {
      default: 'flex',
      [sm]: 'none',
    },
  },
  hambugerCloseButton: {
    height: spacing.s7,
    marginLeft: 'auto',
  },
  hamburgerTitle: {
    marginBottom: spacing.s3,
    display: 'flex',
    alignItems: 'center',
  },
});

const HamburgerNavMenu = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const onLinkClick = useCallback(() => setIsHamburgerMenuOpen(false), []);

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      const onResize = () => {
        if (window.innerWidth > smSize) {
          setIsHamburgerMenuOpen(false);
          document.body.focus();
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
    <Dialog open={isHamburgerMenuOpen} onOpenChange={setIsHamburgerMenuOpen} modal>
      <DialogTrigger asChild>
        <Button variant="ghost" styleOverride={styles.hamburgerMenuButton} aria-label="open navigation menu">
          <HamburgerMenuIcon />
        </Button>
      </DialogTrigger>

      <DialogContent isCloseOverriden>
        <DialogHeader>
          <DialogTitle {...stylex.props(styles.hamburgerTitle)}>
            <LogoLink onLinkClick={onLinkClick} />

            <A11yText>
              <DialogDescription>
                This menu contains links to navigate through the website. Use the Tab key to move between links and the
                Escape key to close the menu.
              </DialogDescription>
            </A11yText>

            <DialogClose asChild>
              <Button variant="ghost" styleOverride={styles.hambugerCloseButton} aria-label="close navigation menu">
                <CloseIcon />
              </Button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>

        <nav>
          <ul {...stylex.props(styles.base)}>
            <NavBarLinks onLinkClick={onLinkClick} />
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default HamburgerNavMenu;
