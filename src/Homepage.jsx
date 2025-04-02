import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
    <div className="homepage-featured-recipes">
      <h2>FEATURED RECIPES</h2>
      <div className="homepage-slider">
        <button className="homepage-slider-button homepage-prev">❮</button>

        <div className="homepage-slide">
          <div className="homepage-slide-content">
            <h3>The Quick Brown Fox jumped over the Lazy Dog</h3>
            <p>The Quick Brown Fox jumped over the Lazy Dog</p>
            <button className="homepage-view-recipe">View Recipe</button>
          </div>
          <div className="homepage-slide-image"></div>
        </div>
        <button className="homepage-slider-button homepage-next">❯</button>
      </div>

      <div className="homepage-dots">
        <span className="homepage-dot active"></span>
        <span className="homepage-dot"></span>
        <span className="homepage-dot"></span>
        <span className="homepage-dot"></span>
      </div>
    </div>

    <div className="homepage-check-video">
      <div className="homepage-secondslide-video">
      </div>
      <div className="homepage-videocontent">
        <h3>Check Out <br />Our Video</h3>
        <button className="homepage-watch-video" onClick={() => navigate("/homepage-video")}>
          Watch Video
        </button>
      </div>
    </div>

    <div className="homepage-three-recipes">
      <h3 className="homepage-recipes-title">
        <span className="homepage-recipes-icon">🍽</span> FILIPINO FOOD STAPLES
      </h3>
      <div className="homepage-recipes-container">
        {[1, 2, 3].map((index) => (
          <div key={index} className="homepage-recipe-card">
            <div className="homepage-recipe-image"></div>
            <div className="homepage-recipe-info">
              <h4>Sinigang na Baboy</h4>
              <p>Region N</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
}

export default Homepage;
