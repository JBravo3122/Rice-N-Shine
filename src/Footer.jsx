import { useState } from "react";
import "./css/Footer.css";
import ricelogo from "./assets/LogoWBText.png";
import leftsamp from "./assets/LeftSampaguita.png";
import rightsamp from "./assets/RightSampaguita.png";
import scroll from "./assets/scrolltotopicon.png";
import { Link } from "react-router-dom";

//Add Imported Assets

function Footer() {
  const [count, setCount] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footerlogocontainer">
          <img className="sampleft" src={leftsamp} alt="Sampaguita" />
          <img className="sampright" src={rightsamp} alt="Sampaguita" />

          <a href="" rel="noopener noreferrer">
            <img
              className="footerlogo"
              src={ricelogo}
              alt="Rice N' Shine Logo(Clickable)"
            />
          </a>
          <table className="footer-links">
            <tbody>
              <tr>
                <td>
                  <h2>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/about" onClick={scrollToTop}>
                      About
                    </Link>
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/recipelist" onClick={scrollToTop}>
                      Recipes
                    </Link>
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/faq" onClick={scrollToTop}>
                      FAQs
                    </Link>
                  </h2>
                </td>
                <td>
                  <h2>
                    <Link to="/" onClick={scrollToTop}>
                      Site Map
                    </Link>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={scrollToTop} className="scrollToTopBtn">
            <p>Scroll to Top</p>
            <img src={scroll} alt="Scroll to Top" />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
