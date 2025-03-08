import { useState } from "react";
import "./Header.css";
import ricelogo from "./assets/ricelogowtext.png";
import suman from "./assets/suman.png";

function Header() {
  const [activeNav, setActiveNav] = useState(""); // Track active link

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <>
      <header className="header">
        <div className="headerlogocontainer">
          <img className="sumanleft" src={suman} alt="Suman" />
          <img className="sumanright" src={suman} alt="Suman" />
          <a href="" target="_blank" rel="noopener noreferrer">
            <span className="logocenter">
              <img
                className="headerlogo"
                src={ricelogo}
                alt="Rice N' Shine Logo(Clickable)"
              />
            </span>
          </a>
        </div>
      </header>
      <div className="headernav">
        <table>
          <tbody>
            <tr>
              {["Home", "About", "Recipes", "FAQs", "Site Map"].map((item) => (
                <td key={item}>
                  <p>
                    <a
                      href="#"
                      className={activeNav === item ? "active" : ""}
                      onClick={() => handleNavClick(item)}
                    >
                      {item}
                    </a>
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
