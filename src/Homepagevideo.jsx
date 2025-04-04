import React from "react";
import "./css/Homepagevideo.css";

function Homepagevideo() {
    return (
      <>
        <div className="videopage">
            <div className="breadcrumbs">
                <p>🏠 Home &gt;</p>
            </div>

            <h2 class="video-title">Our Video Title</h2>

            <div class="video-container">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/cs-kPAMfc2Y?si=yy_ZM8JYOUCfpxJF" 
                    title="Rice N' Shine Video" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
      </>
  );
}

export default Homepagevideo;
