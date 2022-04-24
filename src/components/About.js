// import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

export default function About(props) {
  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // let handleDarkMode = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#151021" : "white",
    border: props.mode === "dark" ? "1px solid white" : "1px solid black",
  };

  return (
    <>
      <div className="conatainer my-3">
        <h1
          className="mx-2"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#151021" : "white",
          }}
        >
          About Us
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Description . . .
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#101047" : "white",
                }}
              >
                <h5 style={{ textAlign: "center" }}>
                  * * * Utilities included in this application * * *
                </h5>
                <br />
                <ul>
                  <li>
                    <b>
                      {" "}
                      <i>Convert to Upper:</i>{" "}
                    </b>{" "}
                    With this onClick event you can convert all the characters
                    of your text to upper case.
                  </li>
                  <li>
                    <b>
                      <i>Convert to Lower:</i>
                    </b>{" "}
                    With this onClick event you can convert all the characters
                    of your text to lower case.
                  </li>
                  <li>
                    <b>
                      <i>Sentence Case:</i>
                    </b>{" "}
                    With this onClick event you can set the title of your
                    thesis, dissertation, or report in sentence case i.e,
                    capitalize only the first letter of the first word in the
                    title, with the exception of proper nouns/terms, as you
                    would when writing a sentence.
                  </li>
                  <li>
                    <b>
                      <i>Alternate Case:</i>
                    </b>{" "}
                    With this onClick event you can get alternate casing of your
                    text characters (UpperCase/LowerCase).
                  </li>
                  <li>
                    <b>
                      <i>Remove Extra Space :</i>
                    </b>{" "}
                    As the term says with this onClick event you can remove all
                    the unnecessary spaces from your text.
                  </li>
                  <li>
                    <b>
                      <i>Clear Text :</i>
                    </b>{" "}
                    With this onClick event you can clear the whole text and
                    start type in again if you want.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          onClick={handleDarkMode}
          className="btn btn-primary btn-sm my-2 mx-2"
        >
          {btntext}
        </button> */}
      </div>
    </>
  );
}
