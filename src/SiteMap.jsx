import { useState } from "react";
import "./css/SiteMap.css";
import sitemap from "./assets/SiteMapTitle.png";

function SiteMap() {
  return (
    <>
    <div className="sitemapbreadcrumbcontainer">
      <div className="breadcrumbicon">
          <p>🏠 Home &gt;</p>
      </div>
    </div>
    <div className="sitemapcontainer">
        <img className="sitemaptitle" src={sitemap} alt="Site Map" />
        <ul>
            <li> <a href="">Home</a>  </li>
              <ul className="subtopictitle">
                  <li > <a href="">Video</a>  </li>
              </ul>
            <li> <a href="">About</a> </li>
            <li> <a href="">Recipes</a> </li>
            <li> <a href="">FAQs </a></li>
            <li> <a href="">Site Map</a> </li>
        </ul>
    </div>
      
      
    </>
  );
}

export default SiteMap;
