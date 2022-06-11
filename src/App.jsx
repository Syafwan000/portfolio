import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { Spinner } from 'react-bootstrap';
import SideVertical from './partials/SideVertical';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import About from './components/About';
import NavTop from './partials/NavTop';
import NavBot from './partials/NavBot';
import Footer from './partials/Footer';
import Home from './components/Home';
import "./App.css";

function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function() {
    setPreload(false);
  }, 2000);

  if(preload) {
    return (
      <>
        <div className="preload">
          <h1>
            <strong>Syaf</strong><i>wan</i>.
          </h1>
          <p>«─────»</p>
          <Spinner animation="grow" />
        </div>
      </>
    )
  }

  return (
    <>
      <NavTop />
      <div className="d-flex">
      <SideVertical />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
      <NavBot />
    </>
  )
}

export default App;
