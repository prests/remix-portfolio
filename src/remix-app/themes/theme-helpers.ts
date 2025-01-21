import { deleteCookie, getCookie, setCookie } from '../cookies/cookies';

import { DARK_MODE, LIGHT_MODE } from './themes.constant';

import type { ThemeMode } from './themes.types';

const THEME_MODE_STORAGE_KEY = 'mode';

const getStoredThemeMode = (): ThemeMode => {
  const mode = getCookie(THEME_MODE_STORAGE_KEY);
  if (!isThemeMode(mode)) {
    return undefined;
  }

  return mode;
};

const setStoredThemeMode = (mode: ThemeMode) => {
  if (!mode) {
    deleteCookie(THEME_MODE_STORAGE_KEY);
    return;
  }

  setCookie(THEME_MODE_STORAGE_KEY, mode);
};

const isThemeMode = (str?: string): str is ThemeMode => str === LIGHT_MODE || str === DARK_MODE;

export { getStoredThemeMode, isThemeMode, setStoredThemeMode };
