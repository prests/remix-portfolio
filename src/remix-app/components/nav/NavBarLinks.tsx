import { Link } from '@remix-run/react';

import { typographyStyles, weightStyles } from '../../themes/typography.stylex';
import Button from '../button/Button';

interface NavBarLinksProps {
  onLinkClick?: () => void;
}

const NavBarLinks = ({ onLinkClick }: NavBarLinksProps) => {
  return (
    <>
      <li>
        <Button variant="ghost" styleOverride={[typographyStyles[5], weightStyles.bold]} asChild>
          <Link to="/about" onClick={onLinkClick}>
            About
          </Link>
        </Button>
      </li>

      <li>
        <Button variant="ghost" styleOverride={[typographyStyles[5], weightStyles.bold]} asChild>
          <Link to="/experience" onClick={onLinkClick}>
            Experience
          </Link>
        </Button>
      </li>

      <li>
        <Button variant="ghost" styleOverride={[typographyStyles[5], weightStyles.bold]} asChild>
          <Link to="mailto:shayne.preston@protonmail.com">Contact</Link>
        </Button>
      </li>

      <li>
        <Button styleOverride={[typographyStyles[5], weightStyles.medium]} asChild>
          <a target="_blank" href="/shayne_preston_resume.pdf">
            Resume
          </a>
        </Button>
      </li>
    </>
  );
};

export default NavBarLinks;
