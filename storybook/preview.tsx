import '../src/remix-app/main.css';
import ThemeProvider from '../src/remix-app/themes/ThemeProvider';
import { DARK_MODE, LIGHT_MODE } from '../src/remix-app/themes/themes.constant';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Set theme for components',
      toolbar: {
        icon: 'paintbrush',
        items: [
          {
            title: 'System Preferences',
            value: undefined,
          },
          {
            title: 'Light Mode',
            value: LIGHT_MODE,
          },
          {
            title: 'Dark Mode',
            value: DARK_MODE,
          },
        ],
      },
    },
  },
  initialGlobals: {
    theme: DARK_MODE,
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { context }) => (
      <ThemeProvider mode={context.globals.theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
