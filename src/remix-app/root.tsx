import { Outlet } from '@remix-run/react';

import { Document } from './Document';
import AuroraBackground from './components/background/AuroraBackground';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/Navbar';

const App = () => (
  <Document>
    <AuroraBackground />
    <NavBar />
    <Outlet />
    <Footer />
  </Document>
);

export default App;
