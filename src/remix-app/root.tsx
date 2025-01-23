import { parse } from 'cookie';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router';

import AuroraBackground from './components/background/AuroraBackground';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/Navbar';
import SettingsMenu from './components/settings/SettingsMenu';
import { useNonce } from './hooks/nonce';
import stylexStylesheet from './main.css?url';
import ThemeProvider from './themes/ThemeProvider';
import { isThemeMode } from './themes/theme-helpers';

import type { PropsWithChildren } from 'react';
import type { LinksFunction, LoaderFunctionArgs } from 'react-router';

const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: stylexStylesheet,
    as: 'style',
  },
  {
    rel: 'stylesheet',
    href: stylexStylesheet,
  },
  {
    rel: 'preload',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap',
    as: 'style',
  },
  {
    rel: 'prelaod',
    href: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2',
    as: 'font',
    type: 'font/woff2',
  },
  {
    rel: 'prelaod',
    href: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2',
    as: 'font',
    type: 'font/woff2',
  },
  {
    rel: 'prelaod',
    href: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh50XSwiPGQ3q5d0.woff2',
    as: 'font',
    type: 'font/woff2',
  },
  {
    rel: 'prelaod',
    href: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2',
    as: 'font',
    type: 'font/woff2',
  },
];

const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get('Cookie') ?? '';
  let mode = parse(cookieHeader)['mode'];
  if (!isThemeMode(mode)) {
    mode = undefined;
  }

  return {
    mode,
  };
};

const Layout = ({ children }: PropsWithChildren) => {
  const nonce = useNonce();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" nonce={nonce} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
};

const App = () => {
  const { mode } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider mode={mode}>
      <AuroraBackground />
      <SettingsMenu />
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
export { Layout, links, loader };
