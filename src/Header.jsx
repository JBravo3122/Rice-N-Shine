import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/Header.css";
import ricelogo from "./assets/ricelogowtext.png";
import suman from "./assets/suman.png";

function Header() {
  const [activeNav, setActiveNav] = useState(""); // Track active link
  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    navigate(path);
  };

  return (
    <>
      <header className="header">
        <div className="headerlogocontainer">
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
      <div className="headernav">
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
    </>
  );
}

export default Header;
