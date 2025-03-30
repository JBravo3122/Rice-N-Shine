import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.css";
import Header from "./Header.jsx";
import FaQ from "./FaQ.jsx";
import RecipeList from "./RecipeList.jsx";
import Homepage from "./Homepage.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
