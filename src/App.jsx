import "./App.css";
import { Nav } from "./components/Nav/Nav.jsx";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Github } from "./pages/Github.jsx";
import { Contact } from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/github" element={<Github />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
