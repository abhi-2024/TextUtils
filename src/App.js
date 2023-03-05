import "./App.css";
import About from "./components/About";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, text) => {
    setAlert({
      type: type,
      text: text,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      showAlert("info", "Dark Mode Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#121212";
      showAlert("info", "Light Mode Enabled");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={handleToggleMode} />
        <Alerts alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter Text To Be Analyzed"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>

          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
