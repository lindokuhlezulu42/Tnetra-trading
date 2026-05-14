import { Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;