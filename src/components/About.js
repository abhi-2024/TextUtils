import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    backgroundColor: "white",
    color: "black",
  };
  if (props.mode === "dark") {
    myStyle = {
      backgroundColor: "black",
      color: "white",
    };
  } else {
    myStyle = {
      backgroundColor: "white",
      color: "black",
    };
  }

  //  let st = {{
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Disable Dark Mode");
  //     setbtnIcon("fa-solid fa-lightbulb");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //     setbtnIcon("fa-solid fa-moon");
  //   }
  //  }};
  return (
    <>
      <div className="container">
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About Us
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Text Analyzer is a software utility which allows you to analyze
                the content of a text. It can help you find the most frequent
                phrases and frequencies of words, determine the approximate
                level of proficiency that the text is suitable for, generate a
                suggested vocabulary list, compare the difficulty levels of
                different texts, generate text statistics, and optimize text for
                search results. Additionally, Text Analyzer can help identify
                bias in job postings and improve the pronunciation accuracy of
                Neural Text-to-Speech systems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
