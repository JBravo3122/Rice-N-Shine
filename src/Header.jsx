import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Header.css";
import ricelogo from "./assets/ricelogowtext.png";
import suman from "./assets/suman.png";
import cross from "./assets/lock.png";
import hamburger from "./assets/hamburger.png";

function Header() {
  const [activeNav, setActiveNav] = useState(""); // Track active link
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    setActiveNav(item.name);
    setSidebarOpen(false);
    navigate(item.path);
  };

  return (
    <>
      <header className="header">
        <div className="headerlogocontainer">
          <img
            src={sidebarOpen ? cross : hamburger}
            alt="Menu"
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
          <img className="sumanleft" src={suman} alt="Suman" />
          <img className="sumanright" src={suman} alt="Suman" />
          <Link to="/">
            <span className="logocenter">
              <img
                className="headerlogo"
                src={ricelogo}
                alt="Rice N' Shine Logo(Clickable)"
              />
            </span>
          </Link>
        </div>
      </header>

      {/* Desktop Nav */}

      <div className="headernav desktopnav">
        <table>
          <tbody>
            <tr>
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Recipes", path: "/recipelist" },
                { name: "FAQs", path: "/faq" },
                { name: "Site Map", path: "/sitemap" },
              ].map((item) => (
                <td key={item.name}>
                  <p>
                    <Link
                      to={item.path}
                      className={activeNav === item.name ? "active" : ""}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.name}
                    </Link>
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Nav */}

      {sidebarOpen && (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Recipes", path: "/recipelist" },
            { name: "FAQs", path: "/faq" },
            { name: "Site Map", path: "/sitemap" },
            { name: "Contact Us", path: "/contactus" }
          ].map((item) => (
            <p key={item.name}>
              <Link
                to={item.path}
                className={activeNav === item.name ? "active" : ""}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Header;
