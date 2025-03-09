import React from "react";
import "./FaQ.css";
import downArrow from "./assets/down-arrow.png";
import Header from "./Header";

function FaQ() {
  return (
    <>
      <Header />
      <div className="faq-container">
        <div className="breadcrumbs">
          <p>Home &gt; Frequently Asked Questions</p>
        </div>
        <div className="faq-body">
          <div className="faq-title">
            <h1>Frequently Asked Questions</h1>
            <hr />
            <p>
              <i>Serving answers with a side of rice</i>
            </p>
          </div>
          <br />
          <div className="faq-question">
            <div className="faq-quesTitle">
              <h3>
                Are the recipes authentic? <img src={downArrow} alt="Expand" />
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                Yes! We source our recipes from locals, home cooks, and food
                experts to ensure authenticity.
              </p>
            </div>
          </div>
          <br />
          <div className="faq-question">
            <div className="faq-quesTitle">
              <h3>
                Are the ingredients easy to find?{" "}
                <img src={downArrow} alt="Expand" />
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                Most ingredients are available in local markets or supermarkets,
                but we also provide alternatives if needed.
              </p>
            </div>
          </div>
          <br />
          <div className="faq-question">
            <div className="faq-quesTitle">
              <h3>
                Can I share recipes on social media?{" "}
                <img src={downArrow} alt="Expand" />
              </h3>
            </div>
            <div className="faq-answer">
              <p>
                Absolutely! You can share recipes via social media buttons on
                each recipe page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaQ;
