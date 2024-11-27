import { Link } from '@remix-run/react';

import { typographyStyles, weightStyles } from '../../themes/typography.stylex';
import Button from '../button/Button';

const NavBarLinks = () => {
  return (
    <>
      <Button variant="ghost" style={[typographyStyles[5], weightStyles.bold]} asChild>
        <Link to="/about">About</Link>
      </Button>

      <Button variant="ghost" style={[typographyStyles[5], weightStyles.bold]} asChild>
        <Link to="/experience">Experience</Link>
      </Button>
      <Button variant="ghost" style={[typographyStyles[5], weightStyles.bold]} asChild>
        <Link to="mailto:shayne.preston@protonmail.com">Contact</Link>
      </Button>
      <Button variant="outline" style={[typographyStyles[5], weightStyles.medium]} asChild>
        <Link to="">Resume</Link>
      </Button>
    </>
  );
};

export default NavBarLinks;
