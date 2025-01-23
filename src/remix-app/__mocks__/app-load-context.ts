import type { AppLoadContext } from 'react-router';

const MOCK_APP_LOAD_CONTEXT: AppLoadContext = {
  appVersion: '1',
  nonce: '123test',
  env: {
    ABORT_DELAY: 250,
    npm_package_version: '0.0.0',
  },
};

export { MOCK_APP_LOAD_CONTEXT };
