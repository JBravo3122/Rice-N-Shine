import React, { useState } from "react";
import "./FaQ.css";
import downArrow from "./assets/down-arrow.png";
import upArrow from "./assets/up-arrow.png";
import Header from "./Header";

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
      question: "Can I share recipes on social media?",
      answer:
        "Absolutely! Each recipe page includes social sharing buttons, making it easy for you to share your favorite dishes with friends and family.",
    },
  ];

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
