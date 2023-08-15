import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
/*----- Components -----*/
import NavBar from "./components/NavBar";
/*----- Pages -----*/
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* Free Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
