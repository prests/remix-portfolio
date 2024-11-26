import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import * as stylex from '@stylexjs/stylex';

import AuroraBackground from './components/background/AuroraBackground';
import { useNonce } from './hooks/nonce';
import stylexStylesheet from './main.css?url';
import ThemeProvider from './themes/ThemeProvider';
import { LIGHT_MODE } from './themes/themes.constant';

import type { LinksFunction } from '@remix-run/node';

const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: stylexStylesheet,
  },
];

const styles = stylex.create({
  body: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

const App = () => {
  const nonce = useNonce();

  const theme = LIGHT_MODE;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body {...stylex.props(styles.body)}>
        <ThemeProvider mode={theme}>
          <>
            <AuroraBackground />
            <Outlet />
          </>
        </ThemeProvider>

        <ScrollRestoration nonce={nonce ?? undefined} />
        <Scripts nonce={nonce ?? undefined} />
      </body>
    </html>
  );
};

export default App;
export { links };
