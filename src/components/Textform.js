import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase !", "success");
  };
  const handleDownClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase !", "success");
  };
  const handleAltClick = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.showAlert("Converted to aLtErNaTe cAsE !", "success");
  };
  const handleSentClick = () => {
    let newText = text
      .split(". ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase() + ".")
      .join(" ");
    newText = newText.slice(0, newText.length - 1);
    setText(newText);
    props.showAlert("Converted to Sentence Case !", "success");
  };
  const handleRemoveClick = () => {
    setText(text.replace(/\s{2,}/g, " ").trim());
    props.showAlert("All extra spaces have been removed !", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared !", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h3 className="mx-1 my-2">{props.heading}</h3>
        <div className="mb-2">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#101047",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleDownClick}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary btn-sm" onClick={handleSentClick}>
          Sentence Case
        </button>
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleAltClick}
        >
          aLtErNaTe cAsE
        </button>
        <button className="btn btn-primary btn-sm " onClick={handleRemoveClick}>
          Remove Extra Space
        </button>
        <button
          className="btn btn-primary btn-sm mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read !
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to get preview . . ."}</p>
      </div>
    </>
  );
}
