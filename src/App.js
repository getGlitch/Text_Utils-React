import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { connect } from "react-redux";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  let switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#151021";
      showAlert("Dark mode has been enabled !", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled !", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About Us"
          mode={mode}
          switchMode={switchMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>

            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                heading="Enter text here :-)"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
