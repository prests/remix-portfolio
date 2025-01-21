import { useCallback } from 'react';

import { useTheme } from '../../themes/ThemeProvider';
import { getStoredThemeMode, setStoredThemeMode } from '../../themes/theme-helpers';
import { DARK_MODE, LIGHT_MODE } from '../../themes/themes.constant';
import { RadioGroup, RadioGroupItem } from '../input/RadioGroup';

import type { ThemeMode } from '../../themes/themes.types';

const SYSTEM_THEME_RADIO_KEY = 'system' as const;

const SettingsForm = () => {
  const { setMode } = useTheme();

  const defaultThemeKey = getStoredThemeMode() ?? SYSTEM_THEME_RADIO_KEY;

  const setThemeMode = useCallback(
    (mode: ThemeMode) => {
      setMode(mode);
      setStoredThemeMode(mode);
    },
    [setMode]
  );

  return (
    <RadioGroup id="theme-group" defaultValue={defaultThemeKey} label="Select a Theme">
      <RadioGroupItem id={LIGHT_MODE} value={LIGHT_MODE} label="Light" onClick={() => setThemeMode(LIGHT_MODE)} />
      <RadioGroupItem id={DARK_MODE} value={DARK_MODE} label="Dark" onClick={() => setThemeMode(DARK_MODE)} />
      <RadioGroupItem
        id={SYSTEM_THEME_RADIO_KEY}
        value={SYSTEM_THEME_RADIO_KEY}
        label="System"
        onClick={() => setThemeMode(undefined)}
      />
    </RadioGroup>
  );
};

export default SettingsForm;
