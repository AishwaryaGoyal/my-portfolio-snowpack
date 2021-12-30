import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/work" element={ <Work onWork="onWork" /> }>
        </Route>
        <Route exact path="/contact" element={ <Contact onContact="onContact" /> }>
        </Route>
        <Route exact path="/about" element={ <About onAbout="onAbout" /> }>
        </Route>
        <Route exact path="/" element={ <Home onHome="onHome" /> }>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
