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

      <div className="background-bubbles">
        <div className="bubble-bg" style={{ width: "110px", height: "110px", top: "8%", left: "6%", animationDelay: "0s" }}></div>
        <div className="bubble-bg" style={{ width: "60px", height: "60px", top: "18%", left: "14%", animationDelay: "3s" }}></div>
        <div className="bubble-bg" style={{ width: "140px", height: "140px", top: "10%", right: "8%", animationDelay: "1.5s" }}></div>
        <div className="bubble-bg" style={{ width: "70px", height: "70px", top: "24%", right: "18%", animationDelay: "4.5s" }}></div>
        <div className="bubble-bg" style={{ width: "90px", height: "90px", top: "45%", left: "4%", animationDelay: "2.2s" }}></div>
        <div className="bubble-bg" style={{ width: "90px", height: "90px", top: "52%", right: "6%", animationDelay: "5.2s" }}></div>
        <div className="bubble-bg" style={{ width: "130px", height: "130px", bottom: "6%", left: "10%", animationDelay: "1s" }}></div>
        <div className="bubble-bg" style={{ width: "70px", height: "70px", bottom: "14%", left: "25%", animationDelay: "3.7s" }}></div>
        <div className="bubble-bg" style={{ width: "150px", height: "150px", bottom: "5%", right: "12%", animationDelay: "6.3s" }}></div>
        <div className="bubble-bg" style={{ width: "60px", height: "60px", bottom: "18%", right: "25%", animationDelay: "2.8s" }}></div>
      </div>

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