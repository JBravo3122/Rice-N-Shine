import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import Header from "./Header.jsx";
import FaQ from "./FaQ.jsx";
import RecipeList from "./RecipeList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/faq" element={<FaQ />} />
        <Route path="/" element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
