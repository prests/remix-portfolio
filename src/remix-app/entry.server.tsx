import { PassThrough } from 'node:stream';

import { createReadableStreamFromReadable } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { renderHeadToString } from 'remix-island';

import { Head } from './Document';
import NonceProvider from './hooks/nonce';
import stylexStylesheet from './main.css?url';
import { darkTheme } from './themes/dark-theme';
import { lightTheme } from './themes/light-theme';
import { DARK_MODE, LIGHT_MODE } from './themes/themes.constant';

import type { ThemeMode } from './themes/themes.types';
import type { AppLoadContext, EntryContext } from '@remix-run/node';

const CLOSING_HTML = '</div></body></html>' as const;
const MODE = DARK_MODE;

const generateOpeningHTML = (nonce: string, headStr: string, theme: string) =>
  `<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8" nonce="${nonce}" /><link rel="preload" href="${stylexStylesheet}" as="style" /><link rel="stylesheet" href="${stylexStylesheet}" />${headStr}</head><body class="${theme}"><div id="root">`;

const getTheme = (mode: ThemeMode) => {
  if (typeof mode === 'undefined') {
    return '';
  }

  const theme = stylex.props(mode === LIGHT_MODE ? lightTheme : darkTheme).className;
  if (typeof theme === 'undefined') {
    return '';
  }

  return theme;
};

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) =>
  isbot(request.headers.get('user-agent') ?? '')
    ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext)
    : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext);

const handleBotRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) =>
  new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <NonceProvider value={loadContext.nonce}>
        <RemixServer context={remixContext} url={request.url} abortDelay={loadContext.env.ABORT_DELAY} />
      </NonceProvider>,
      {
        onAllReady() {
          shellRendered = true;
          const headStr = renderHeadToString({ request, remixContext, Head });
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          const theme = getTheme(MODE);

          body.write(generateOpeningHTML(loadContext.nonce, headStr, theme));
          pipe(body);
          body.write(CLOSING_HTML);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, loadContext.env.ABORT_DELAY);
  });

const handleBrowserRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) =>
  new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <NonceProvider value={loadContext.nonce}>
        <RemixServer context={remixContext} url={request.url} abortDelay={loadContext.env.ABORT_DELAY} />
      </NonceProvider>,
      {
        onShellReady() {
          shellRendered = true;
          const headStr = renderHeadToString({ request, remixContext, Head });
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          const theme = getTheme(MODE);
          console.log(theme);

          body.write(generateOpeningHTML(loadContext.nonce, headStr, theme));
          pipe(body);
          body.write(CLOSING_HTML);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          // Log streaming rendering errors from inside the shell.  Don't log
          // errors encountered during initial shell rendering since they'll
          // reject and get logged in handleDocumentRequest.
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, loadContext.env.ABORT_DELAY);
  });

export default handleRequest;
