import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Facts from "./pages/Facts";
import WaysToHelp from "./pages/WaysToHelp";
import Charities from "./pages/Charities";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/ways-to-help">Ways to Help</Link>
        <Link to="/charities">Charities</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/ways-to-help" element={<WaysToHelp />} />
        <Route path="/charities" element={<Charities />} />
      </Routes>
    </Router>
  );
}

export default App;
