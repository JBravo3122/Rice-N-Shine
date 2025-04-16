import { Link } from "react-router-dom";
import "./css/SiteMap.css";
/*import sitemap from "./assets/SiteMapTitle.png";*/

function SiteMap() {
  return (
    <>
      <div className="sitemapbreadcrumbcontainer">
        <div className="breadcrumbicon">
          <p>🏠 Home &gt;</p>
        </div>
      </div>
      <div className="sitemapcontainer">
        {/*<img className="sitemaptitle" src={sitemap} alt="Site Map" />*/}
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
            <Link to="/faq">FAQs </Link>
          </li>
          <li>
            <Link to="/sitemap">Site Map</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SiteMap;
