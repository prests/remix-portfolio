import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    // @FIXME - Hit some strange type errors with this plugin, but seems to work fine
    // @ts-ignore
    styleX(),
  ],
});
