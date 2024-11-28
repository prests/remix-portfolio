import * as stylex from '@stylexjs/stylex';
import { createPortal } from 'react-dom';

import { spacing } from '../../themes/spacing.stylex';

import NavBarLinks from './NavBarLinks';

interface HamburgerNavMenuProps {
  isOpen: boolean;
}

const styles = stylex.create({
  base: {
    backgroundColor: 'white',
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: spacing.s10,
    alignItems: 'center',
    gap: spacing.s3,
  },
});

const HamburgerNavMenu = ({ isOpen }: HamburgerNavMenuProps) => {
  if (!isOpen) {
    return <></>;
  }

  return createPortal(
    <menu {...stylex.props(styles.base)}>
      <NavBarLinks />
    </menu>,
    document.body
  );
};

export default HamburgerNavMenu;
