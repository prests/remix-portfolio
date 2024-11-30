import { Outlet } from '@remix-run/react';

import { Document } from './Document';
import AuroraBackground from './components/background/AuroraBackground';
import NavBar from './components/nav/Navbar';
import ThemeProvider from './themes/ThemeProvider';
import { LIGHT_MODE } from './themes/themes.constant';

const App = () => {
  const theme = LIGHT_MODE;

  return (
    <Document>
      <ThemeProvider mode={theme}>
        <AuroraBackground />
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </Document>
  );
};

export default App;
