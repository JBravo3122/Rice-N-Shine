import React from "react";
import "./css/Homepagevideo.css";
import "./css/Breadcrumbs.css";
import home from "./assets/home.png";
import { Link } from "react-router-dom";

function Homepagevideo() {
  return (
    <>
      <div className="videopage">
        <div className="breadcrumbs-container">
          <div className="breadcrumbs">
            <p>
              <Link to="/" className="breadcrumbs-Link">
                <img src={home} /> Home
              </Link>{" "}
              &gt; Video
            </p>
          </div>
        </div>

        <h2 class="video-title">
          Rice N’ Shine: A Flavorful Filipino Food Guide by Students
        </h2>

        <div class="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AO_lgv6cPpE?si=cAEx-5R22bgSsfR5"
            title="Rice N' Shine Video"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Homepagevideo;
