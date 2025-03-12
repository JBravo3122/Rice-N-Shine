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
        "Yes! We source our recipes from locals, home cooks, and food experts to ensure authenticity.",
    },
    {
      question: "Are the ingredients easy to find?",
      answer:
        "Most ingredients are available in local markets or supermarkets, but we also provide alternatives if needed.",
    },
    {
      question: "Can I share recipes on social media?",
      answer:
        "Absolutely! You can share recipes via social media buttons on each recipe page.",
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
