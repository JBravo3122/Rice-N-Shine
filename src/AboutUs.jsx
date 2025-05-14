import React from "react";
import "./css/AboutUs.css";
import "./css/Breadcrumbs.css";
import { Link } from "react-router-dom";
import home from "./assets/home.png";
import Inoferio from "./assets/Carlos.jpg";
import Amistoso from "./assets/Pibi.jpg";
import Orozco from "./assets/Ancel.jpg";
import ricelogo from "./assets/LogoWBText.png";

function AboutUs() {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-page">
        {" "}
        <div className="breadcrumbs-container">
          <div className="breadcrumbs">
            <p>
              <Link to="/" className="breadcrumbs-Link">
                <img src={home} /> Home
              </Link>{" "}
              &gt; Recipes
            </p>
          </div>
        </div>
        <br />
        <div className="about-us-hero">
          <h1>
            ABOUT |
            <img src={ricelogo} alt="About Us" className="hero-image" />
          </h1>
        </div>
        <div className="about-us-story">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet. Id omnis blanditiis et dolores porro non
            assumenda illum in dignissimos corrupti sit architecto maiores! Ab
            odit voluptatem eos consequatur velit et odit reiciendis aut magnam
            optio eum magni maxime ut dolore incidunt. Ea autem magnam ut totam
            molestias sit delectus quas eos nostrum ipsam. Et amet aspernatur
            rem placeat totam est explicabo nihil qui voluptatem libero qui
            optio omnis ea rerum corporis.
          </p>
          <p>
            Non provident dolorum et iusto accusamus eos quisquam accusantium
            est eius Quis et ipsa odio? Nam quibusdam eaque qui tempore tempora
            aut harum quia? Sed similique consectetur hic minus libero eum
            explicabo consequatur sit quis perferendis. Et nulla impedit rem
            velit dicta ea consequatur iste.
          </p>
          <p>
            Ut atque itaque eos voluptatem quas ut velit reiciendis est
            doloribus labore ut optio praesentium qui voluptatem galisum. Ut
            quasi dolorem in unde consequatur qui praesentium consequatur eum
            fugiat architecto ut reprehenderit eius sed rerum beatae sed unde
            voluptas. Ad aspernatur cupiditate qui voluptates voluptates eum
            esse aliquam. Ut sint molestiae a pariatur aliquam aut consectetur
            quaerat quo officiis dolorem est minus harum.
          </p>
        </div>
      </div>

      <div className="about-us-brains">
        <div className="about-us-title">
          <h2>
            The Brains <br /> <span>Behind</span> <br /> The Bites.
          </h2>
        </div>

        <div className="about-us-students-grid">
          <div className="about-us-student-card">
            <div
              className="about-us-student-photo"
              style={{
                backgroundImage: `url(${Amistoso})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="about-us-student-info">
              <h4>Phoebe Nicole Amistoso</h4>
              <div className="about-us-student-email">
                email: phoebecamistoso@su.edu.ph
              </div>
              <p>
                Non provident dolorum et iusto accusamus eos quisquam
                accusantium est eius Quis et ipsa odio? Nam quibusdam eaque qui
                tempore tempora aut harum quia?
              </p>
            </div>
          </div>

          <div className="about-us-student-card reverse">
            <div
              className="about-us-student-photo"
              style={{
                backgroundImage: `url(${Orozco})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="about-us-student-info">
              <h4>Ancel Kimberly Orozco</h4>
              <div className="about-us-student-email">
                email: anceliorozco@su.edu.ph
              </div>
              <p>
                Non provident dolorum et iusto accusamus eos quisquam
                accusantium est eius Quis et ipsa odio? Nam quibusdam eaque qui
                tempore tempora aut harum quia?
              </p>
            </div>
          </div>

          <div className="about-us-student-card">
            <div
              className="about-us-student-photo"
              style={{
                backgroundImage: `url(${Inoferio})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="about-us-student-info">
              <h4>Jan Carlos Inoferio</h4>
              <div className="about-us-student-email">
                email: janminoferio@su.edu.ph
              </div>
              <p>
                Non provident dolorum et iusto accusamus eos quisquam
                accusantium est eius Quis et ipsa odio? Nam quibusdam eaque qui
                tempore tempora aut harum quia?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
