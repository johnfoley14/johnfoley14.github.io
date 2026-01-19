import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./lib/header";
import Footer from "./lib/footer";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import "./styling/styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route index element={<About />} />
              <Route path={"projects"} element={<Projects />} />
              <Route path={"experience"} element={<Experience />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
