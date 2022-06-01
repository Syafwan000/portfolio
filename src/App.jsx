import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavTop from './partials/NavTop';
import SideVertical from './partials/SideVertical';
import Footer from './partials/Footer';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <NavTop />
      <div className="d-flex">
      <SideVertical>{pathname}</SideVertical>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
