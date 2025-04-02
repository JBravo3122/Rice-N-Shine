import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.css";
import Header from "./Header.jsx";
import FaQ from "./FaQ.jsx";
import RecipeList from "./RecipeList.jsx";
import Homepage from "./Homepage.jsx";
import Video from "./Homepagevideo.jsx";
import About from "./AboutUs.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/homepage-video" element={<Video />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
