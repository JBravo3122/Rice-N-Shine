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
      
          <div className="aboutus-bread-container">
            <div className="breadcrumbs">
            <p>
              <Link to="/" className="breadcrumbs-Link">
                <img src={home} /> Home
              </Link>{" "}
              &gt; About Us
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
            Rice N' Shine is an online project by a team of Filipino students
            who share a common interest in food, culture, and accessibility. The
            project aims to provide an accessible and systematic online site
            with recipes from all over the Philippines, including cultural
            background, simple steps, and variety of regions. The website seeks
            to cater to both novice and seasoned home cooks—be they Filipinos
            who want to get back to their roots, or non-Filipinos who want to
            discover the nation's food.
          </p>
          <p>
            Our team chose to pursue this project because we saw an increasing
            disconnect between contemporary Filipino youth and traditional
            culinary culture. With recipes frequently shared orally within
            families, there is little centralized, consistent, and culturally
            sensitive information online. By constructing Rice N' Shine, we aim
            to make a contribution toward the preservation and sharing of
            Filipino food culture in an educational yet entertaining manner.
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
                Phoebe Nicole Amistoso is a student of Silliman University's
                Bachelor of Science in Information Technology. She isn't
                well-versed in cooking, but she loves attempting new recipes
                that catch her eye. Until today, she looks for new kinds of food
                that she could create with her family.
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
                This is Ancel Kimberly Orozco. She’s an IT Student at Silliman
                University’s College of Computer Studies. She learned how to
                cook some of the recipes from her family growing up. Today, she
                cooks these recipes for her family and friends that may live or
                travel all the way home to the Philippines and hopes to share
                these recipes and her culture internationally in the future.
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
                Jan Carlos Inoferio is a student at Silliman University’s Bachelor of Science in Information Technology. 
                While not a professionally trained chef, or even close, he developed a deep appreciation for Filipino cuisine, especially 
                when someone else is doing the cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;