import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';

import SettingsIcon from '../../assets/icons/SettingsIcon';
import { spacing } from '../../themes/spacing.stylex';
import { tokens } from '../../themes/tokens.stylex';
import { typographyStyles, weightStyles } from '../../themes/typography.stylex';
import Button from '../button/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../dialog/Dialog';

import SettingsForm from './SettingsForm';

const styles = stylex.create({
  formTitle: {
    color: tokens.color_text_flare as string,
  },
  formDescription: {
    color: tokens.color_text_mute as string,
  },
  settingsButton: {
    margin: `${spacing.s4} ${spacing.s4} 0 auto`,
  },
  settingsIcon: {
    height: spacing.s5,
    width: spacing.s5,
  },
  applyButton: {
    margin: '0 0 0 auto',
    width: 'min-content',
  },
});

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={setPortalContainer} />

      <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
        <DialogTrigger asChild>
          <Button variant="ghost" styleOverride={styles.settingsButton} aria-label="open settings menu">
            <SettingsIcon style={styles.settingsIcon} />
          </Button>
        </DialogTrigger>

        <DialogContent container={portalContainer}>
          <DialogHeader>
            <DialogTitle style={[styles.formTitle, typographyStyles[5], weightStyles.black]}>Settings</DialogTitle>{' '}
            <DialogDescription style={[styles.formDescription, typographyStyles[3], weightStyles.light]}>
              Update your personal settings. Click "Apply Changes" when you're done.
            </DialogDescription>
          </DialogHeader>

          <SettingsForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsMenu;
