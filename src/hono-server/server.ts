import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { NONCE, secureHeaders } from 'hono/secure-headers';
import { reactRouter } from 'remix-hono/handler';

import { IS_PRODUCTION_MODE, MODE } from './constants/server.js';
import { getDevBuild } from './dev.server.js';
import { getEnv } from './env.server.js';
import { logger } from './logger.server.js';

import type { AppLoadContext, ServerBuild } from 'react-router';

interface Variables {
  secureHeadersNonce: string;
}

const env = getEnv();

const app = new Hono<{ Variables: Variables }>();

app.use('*', logger(env.npm_package_version));

app.use(
  '/assets/*',
  serveStatic({
    root: './build/client',
    onFound: (_path, c) => c.header('Cache-Control', 'public, immutable, max-age=31536000'),
  })
);

app.use(
  '*',
  serveStatic({
    root: IS_PRODUCTION_MODE ? './build/client' : './public',
    onFound: (_path, c) => c.header('Cache-Control', 'public, max-age=3600'),
  })
);

app.use(
  '*',
  secureHeaders({
    contentSecurityPolicy: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", ...(IS_PRODUCTION_MODE ? [] : ['wss:', 'data:'])],
      scriptSrc: ["'self'", "'strict-dynamic'", NONCE],
      styleSrc: ["'self'", 'https://fonts.googleapis.com', NONCE],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
    },
    // Deprecated or not needed headers
    xXssProtection: false,
    xFrameOptions: false,
  })
);

app.use(async (c, next) => {
  const nonce = c.get('secureHeadersNonce');
  if (!nonce) {
    throw new Error('CSP nonce not initialized');
  }

  const build = (IS_PRODUCTION_MODE
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line import/no-unresolved -- this expected until you build the app
      await import('../server/index.js')
    : await getDevBuild()) as unknown as ServerBuild;

  return reactRouter({
    build,
    mode: MODE,
    getLoadContext() {
      return {
        appVersion: IS_PRODUCTION_MODE ? build.assets.version : 'dev',
        nonce,
        env,
      } satisfies AppLoadContext;
    },
  })(c, next);
});

if (IS_PRODUCTION_MODE) {
  serve({ ...app, port: Number(process.env.PORT) || 3_000, hostname: '0.0.0.0' }, async info => {
    console.log(`🚀 Server started on port ${info.port}`);
  });
}

export default app;
