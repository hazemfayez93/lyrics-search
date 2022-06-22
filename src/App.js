import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { GlobalContext } from "./components/context/GlobalContext";
import Lyrics from "./components/tracks/Lyrics";

const App = () => {
  return (
    <GlobalContext>
      <React.Fragment>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route
                path="/lyrics/track/:artist/:title/:id"
                exact
                element={<Lyrics />}
              />
            </Routes>
          </div>
        </Router>
      </React.Fragment>
    </GlobalContext>
  );
};

export default App;
