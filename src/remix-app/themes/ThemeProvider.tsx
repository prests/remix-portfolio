import * as stylex from '@stylexjs/stylex';
import { type PropsWithChildren, createContext, useContext, useState } from 'react';

import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';
import { LIGHT_MODE } from './themes.constant';

import type { ThemeMode } from './themes.types';

interface ThemeContextProps {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

interface ThemeProviderProps extends PropsWithChildren {
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const styles = stylex.create({
  base: {
    display: 'contents',
  },
});

const ThemeProvider = ({ mode, children }: ThemeProviderProps) => {
  const [internalMode, setInternalMode] = useState(mode);

  return (
    <ThemeContext.Provider value={{ mode: internalMode, setMode: setInternalMode }}>
      <div
        {...(typeof internalMode !== 'undefined'
          ? stylex.props(internalMode === LIGHT_MODE ? lightTheme : darkTheme, styles.base)
          : stylex.props(styles.base))}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === null) {
    throw new Error('ThemeProvider is uninitialized');
  }

  return themeContext;
};

export default ThemeProvider;
export { useTheme };
