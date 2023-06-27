import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
