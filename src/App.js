import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="you can do it mansi !!!! weldone" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
