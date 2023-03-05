import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("info", "Text Copied !!");
  };

  const handleTextChange = (event) => {
    console.log("text updated");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Text Capitalized !!");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Text Lowercased !!");
  };
  const handleDownloadFile = () => {
    const link = document.createElement("a");

    const content = text;

    const file = new Blob([content], { type: "text/plain" });

    link.href = URL.createObjectURL(file);

    link.download = "TextFile.txt";

    link.click();

    URL.revokeObjectURL(link.href);

    props.showAlert("info", "Text file being downloaded");
  };

  const handleTiClick = () => {
    let sentence = text.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    setText(sentence.join(" "));

    props.showAlert("success", "Text Title Cased !!");
  };

  const handleSenClick = () => {
    let sen = text;
    sen = sen.toLowerCase();
    sen = sen.charAt(0).toUpperCase() + sen.slice(1);
    setText(sen);

    props.showAlert("success", "Text Sentence Cased !!");
  };

  const handleRSpClick = () => {
    let sen = text;
    sen = sen.replace(/\s+/g, " ").trim();
    setText(sen);

    props.showAlert("info", "Extra space removed");
  };
  const resetText = () => {
    setText("");

    props.showAlert("warning", "Text CLeared");
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center display-5">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleTextChange}
          autoFocus
          style={
            props.mode === "light"
              ? {
                  backgroundColor: "white",
                  color: "black",
                }
              : {
                  backgroundColor: "silver",
                  color: "black",
                }
          }
          placeholder="Enter Text Here"
        ></textarea>

        <button className="btn btn-primary m-2" onClick={handleRSpClick}>
          Remove extra spaces
        </button>

        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          UPPERCASE
        </button>

        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          lowercase
        </button>

        <button className="btn btn-primary m-2" onClick={handleTiClick}>
          Title Case
        </button>

        <button className="btn btn-primary m-2" onClick={handleSenClick}>
          Sentence Case
        </button>

        <button className="btn btn-primary m2" onClick={handleDownloadFile}>
          Download File
        </button>

        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-warning m-2" onClick={resetText}>
          Clear Text
        </button>
      </div>

      <div className="container">
        <h1 className="display-6">Text Summary</h1>
        <ul>
          <li>Words: {text === "" ? 0 : text.split(" ").length}</li>
          <li>Characters: {text.length}</li>
          <li>
            {text === "" ? 0 : text.split(" ").length * 0.008} minute(s) read
            time
          </li>
          <li>
            <h4>Text Preview</h4>
            <p className="lead">{text === "" ? "Such Emptiness..!!!" : text}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
