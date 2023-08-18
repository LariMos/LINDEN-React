import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
/*----- Components -----*/
import NavBar from "./components/NavBar";
/*----- Pages -----*/
import SearchPage from "./pages/SearchPage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
/*----- Animation -----*/


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* Free Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
