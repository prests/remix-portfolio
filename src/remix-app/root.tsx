import { Outlet, useLoaderData } from '@remix-run/react';
import { parse } from 'cookie';

import { Document } from './Document';
import AuroraBackground from './components/background/AuroraBackground';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/Navbar';
import SettingsMenu from './components/settings/SettingsMenu';
import ThemeProvider from './themes/ThemeProvider';
import { isThemeMode } from './themes/theme-helpers';

import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';

const links: LinksFunction = () => [
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

const App = () => {
  const { mode } = useLoaderData<typeof loader>();

  return (
    <Document>
      <ThemeProvider mode={mode}>
        <AuroraBackground />
        <SettingsMenu />
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Document>
  );
};

export default App;
export { links, loader };
