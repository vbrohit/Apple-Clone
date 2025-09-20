import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/MainComp/Home";
import Store from "./Components/MainComp/Store";
import Mac from "./Components/MainComp/Mac";
import Ipad from "./Components/MainComp/Ipad";
import Iphone from "./Components/MainComp/Iphone";
import Watch from "./Components/MainComp/Watch";
import Airpods from "./Components/MainComp/Airpoda";
import TvHome from "./Components/MainComp/TvHome";
import Entertainment from "./Components/MainComp/Entertainment";
import Accessories from "./Components/MainComp/Accessories";
import Support from "./Components/MainComp/Support";
import Nav from "./Components/Nav/Nav";
import { useEffect, useState } from "react";

function App() {
  const [windowWIdth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <>
      <div className="conteiner bg-gray-100">
        <Router>
          <Nav windowWIdth={windowWIdth} />
          <Routes>
            <Route path="/" element={<Home windowWIdth={windowWIdth} />} />
            <Route path="/store" element={<Store />} />
            <Route path="/mac" element={<Mac />} />
            <Route path="/ipad" element={<Ipad />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/airpods" element={<Airpods />} />
            <Route path="/tvHome" element={<TvHome />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
