import React, { useState } from "react";
import "./css/FaQ.css";
import downArrow from "./assets/down-arrow.png";
import upArrow from "./assets/up-arrow.png";
import "./css/Breadcrumbs.css";
import home from "./assets/home.png";
import { Link } from "react-router-dom";

function FaQ() {
  const [openIndex, setOpenIndex] = useState(null); // what tracks which question was clicked

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggles the answer visibility
  };

  const faqData = [
    {
      question: "Are the recipes authentic?",
      answer:
        "Yes! Our recipes come directly from local chefs, home cooks, and culinary experts, ensuring they stay true to their origins.",
    },
    {
      question: "Are the ingredients easy to find?",
      answer:
        "Most ingredients are readily available in supermarkets or local markets. When certain items are less common, we provide suitable alternatives.",
    },
    {
      question: "Are the photos of the actual dishes?",
      answer:
        "The photos on our website are carefully selected from trusted online sources to closely match the dishes. We make sure they accurately represent what you can expect when following the recipes.",
    },
    {
      question: "How can I search for a specific recipe?",
      answer:
        "You can use the search bar at the top of the page to find recipes by their name.",
    },
    {
      question: "Are there recipes for beginners?",
      answer:
        "Yes! All of our recipes are designed to be easy to follow and suitable for beginners. We make sure the instructions are clear and simple, so anyone can cook with confidence.",
    },
    {
      question: "Do you feature recipes from different cuisines?",
      answer:
        "We focus on Filipino cuisine and proudly feature dishes from all over the Philippines, sorted by region to showcase the country's rich and diverse culinary traditions.",
    },
    {
      question: "Can I share recipes on social media?",
      answer:
        "Absolutely! Each recipe page includes social sharing buttons, making it easy for you to share your favorite dishes with friends and family.",
    },
    {
      question: "Do I need an account to use the website?",
      answer:
        "No account is needed to browse and use the recipes! All our recipes and features are completely free and accessible to everyone.",
    },
  ];

  return (
    <>
      <div className="faq-container">
        <div className="breadcrumbs-container" style={{ marginLeft: '26px', marginTop: '-20px' }}>
          <div className="breadcrumbs">
            <p>
              <Link to="/" className="breadcrumbs-Link">
                <img src={home} /> Home
              </Link>{" "}
              &gt; Frequently Asked Questions
            </p>
          </div>
        </div>
        <div className="faq-body">
          <br />
          <div className="faq-title">
            <h1>Frequently Asked Questions</h1>
            <hr />
            <p>
              <i>Serving answers with a side of rice</i>
            </p>
          </div>
          <br />

          {faqData.map((item, index) => (
            <div className="faq-question" key={index}>
              <div
                className="faq-quesTitle"
                onClick={() => toggleAnswer(index)}
              >
                <div className="faq-quesContent">
                  <h3>{item.question}</h3>
                  <img
                    src={openIndex === index ? upArrow : downArrow}
                    alt="Toggle"
                  />
                </div>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FaQ;
