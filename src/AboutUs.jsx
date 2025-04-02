import React from "react";
import "./css/AboutUs.css";

function AboutUs() {

return (
    <>
    <div class="about-us">
      <div className="breadcrumbs">
        <p>🏠 Home &gt; About Us</p>
      </div>

      <h2 class="about-us2">About Us</h2>
    
      <div class="about-section-first">
          <img src="placeholder.png" class="about-image"></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit elit nec eros rutrum interdum. Donec egestas odio id consectetur hendrerit.</p>
      </div>

      <div class="about-section reverse">
          <img src="placeholder.png" class="about-image"></img>
          <p>Vivamus sed lorem velit. Cras interdum eros in urna aliquam, nec pretium ex finibus.</p>
      </div>

      <div class="about-section">
          <img src="placeholder.png" class="about-image"></img>
          <p>Aliquam imperdiet ut ligula eget ultricies. Vestibulum sed ante libero. Etiam consequat pharetra nisl.</p>
      </div>
    </div>

    </>
  );
}

export default AboutUs;