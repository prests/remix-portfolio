/// <reference types="vitest" />

import devServer, { defaultOptions } from '@hono/vite-dev-server';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  server: {
    host: 'local.shaynepreston.com',
    port: 3_000,
    https: {
      key: './.cert/cert.key',
      cert: './.cert/cert.crt',
    },
    warmup: {
      clientFiles: ['./src/remix-app/entry.client.tsx', './src/remix-app/root.tsx', './src/remix-app/routes/**/*'],
    },
  },
  optimizeDeps: {
    include: ['./src/remix-app/routes/**/*'],
  },
  plugins: [
    devServer({
      injectClientScript: false,
      entry: 'src/hono-server/server.ts',
      exclude: [
        ...defaultOptions.exclude,
        /^\/(remix-app)\/.+/,
        /^\/@.+$/,
        /^\/node_modules\/.*/,
        /.*\.css\?url$/,
        /\?import$/,
      ],
    }),
    !process.env.VITEST && reactRouter(),
    // @FIXME - Hit some strange type errors with this plugin, but seems to work fine
    // @ts-ignore
    styleX(),
  ],
  test: {
    include: ['./src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: [...configDefaults.exclude, '**/__tests__/**', '**/dist/**', '**/public/**'],
      thresholds: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
      reporter: ['lcov', 'json', 'html'],
    },
    reporters: ['default'],
  },
});
