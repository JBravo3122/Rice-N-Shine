import { useState } from 'react'
import "./Footer.css"
import ricelogo from "./assets/LogoWBText.png";
import leftsamp from "./assets/LeftSampaguita.png";
import rightsamp from "./assets/RightSampaguita.png";
import scroll from "./assets/scrolltotopicon.png";

//Add Imported Assets

function Footer() {
  const [count, setCount] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <footer className="footer">
          <div className="footerlogocontainer">
              <img className='sampleft' src={leftsamp} alt="Sampaguita" />   
              <img className='sampright' src={rightsamp} alt="Sampaguita" />

              <a href="" rel="noopener noreferrer">
                <img className='footerlogo' src={ricelogo}  alt="Rice N' Shine Logo(Clickable)" />
             </a>
            <table>
                <tr>
                    <td><h2><a href="">Home</a></h2></td>
                    <td><h2><a href="">About</a></h2></td>
                    <td><h2><a href="">Recipes</a></h2></td>
                    <td><h2><a href="">FAQs</a></h2></td>
                    <td><h2><a href="">Site Map</a></h2></td>
                </tr>
            </table>
            <button onClick={scrollToTop} className="scrollToTopBtn">
              <p>Scroll to Top</p>
              <img src={scroll} alt="Scroll to Top" />
            </button>
        </div>
        </footer>
        
    </>
  )
}

export default Footer