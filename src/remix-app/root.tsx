import { Outlet } from '@remix-run/react';

import { Document } from './Document';
import AuroraBackground from './components/background/AuroraBackground';
import NavBar from './components/nav/Navbar';

const App = () => (
  <Document>
    <AuroraBackground />
    <NavBar />
    <Outlet />
  </Document>
);

export default App;
