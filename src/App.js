import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Skills from "./containers/skills/Skills";
import Projects from "./containers/Projects/Projects";

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar*/}
      <Navbar />
      {/* main page content */}

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
