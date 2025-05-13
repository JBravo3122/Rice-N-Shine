import React from "react";
import "./css/Homepagevideo.css";

function Homepagevideo() {
    return (
      <>
        <div className="videopage">
            <div className="breadcrumbs">
                <p>🏠 Home &gt;</p>
            </div>

            <h2 class="video-title">Rice N’ Shine: A Flavorful Filipino Food Guide by Students</h2>

            <div class="video-container">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/AO_lgv6cPpE?si=cAEx-5R22bgSsfR5" 
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
