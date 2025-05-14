import { Link } from "react-router-dom";
import "./css/SiteMap.css";
import sitemap from "./assets/SiteMapTitle.png";
import "./css/Breadcrumbs.css";
import home from "./assets/home.png";

function SiteMap() {
  return (
    <>
      <div className="sitemapbreadcrumbcontainer">
        <div className="sitemapcontainer">
          <div className="breadcrumbs-container">
            <div className="breadcrumbs">
              <p>
                <Link to="/" className="breadcrumbs-Link">
                  <img src={home} /> Home
                </Link>{" "}
                &gt; Site Map
              </p>
            </div>
          </div>
          <img className="sitemaptitle" src={sitemap} alt="Site Map" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <ul className="subtopictitle">
              <li>
                <Link to="/homepage-video">Video</Link>
              </li>
            </ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipelist">Recipes</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq">FAQs </Link>
            </li>
            <li>
              <Link to="/sitemap">Site Map</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SiteMap;
