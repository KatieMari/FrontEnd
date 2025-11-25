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
        
        <div className="bubble-bg" style={{ width: "160px", height: "160px", top: "10%", left: "5%", animationDelay: "0s" }}></div>
        <div className="bubble-bg" style={{ width: "120px", height: "120px", top: "60%", left: "15%", animationDelay: "3s" }}></div>
        <div className="bubble-bg" style={{ width: "200px", height: "200px", top: "30%", right: "10%", animationDelay: "5s" }}></div>
        <div className="bubble-bg" style={{ width: "90px", height: "90px", top: "75%", right: "25%", animationDelay: "1s" }}></div>
        <div className="bubble-bg" style={{ width: "140px", height: "140px", top: "5%", right: "35%", animationDelay: "7s" }}></div>
        <div className="bubble-bg" style={{ width: "70px", height: "70px", top: "20%", left: "40%", animationDelay: "2.5s" }}></div>
        <div className="bubble-bg" style={{ width: "180px", height: "180px", bottom: "15%", right: "15%", animationDelay: "6s" }}></div>
        <div className="bubble-bg" style={{ width: "90px", height: "90px", top: "70%", left: "60%", animationDelay: "1.2s" }}></div>
        <div className="bubble-bg" style={{ width: "130px", height: "130px", top: "40%", right: "5%", animationDelay: "3.8s" }}></div>
        <div className="bubble-bg" style={{ width: "50px", height: "50px", bottom: "8%", left: "20%", animationDelay: "0.5s" }}></div>

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
