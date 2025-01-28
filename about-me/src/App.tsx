import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import 'font-awesome/css/font-awesome.min.css';
import Contact from "./components/Contact";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
