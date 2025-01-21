import { Outlet, useLoaderData } from '@remix-run/react';
import { parse } from 'cookie';

import { Document } from './Document';
import AuroraBackground from './components/background/AuroraBackground';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/Navbar';
import SettingsMenu from './components/settings/SettingsMenu';
import ThemeProvider from './themes/ThemeProvider';
import { isThemeMode } from './themes/theme-helpers';

import type { LoaderFunctionArgs } from '@remix-run/node';

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
export { loader };
