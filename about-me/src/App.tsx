import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "font-awesome/css/font-awesome.min.css";
import Pruebas from "./components/Pruebas";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "lucide-react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/pruebas" element={<Pruebas/>} />
 z
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
