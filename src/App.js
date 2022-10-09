// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Solver from "./pages/Solver";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom"; // groups our routes together

function App() {
    // routing our pages
    return (
      <>
        <Navbar />
        <div class="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solver" element={<Solver />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
    );
}

export default App;
