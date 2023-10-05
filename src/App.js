import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
/*----- Components -----*/
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
/*----- Pages -----*/
import SearchPage from "./pages/SearchPage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";
import MouseCourser from "./components/MouseCourser";
/*----- Animation -----*/


function App() {
  return (
    <div>
      <ScrollToTop /> 
      <NavBar />
      <Routes> 
        {/* Free Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
       <MouseCourser/>
    </div>
  );
}

export default App;
