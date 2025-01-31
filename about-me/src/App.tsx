import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "font-awesome/css/font-awesome.min.css";
import PageError from "./components/PageError";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;