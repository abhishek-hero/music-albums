import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { Album } from "./components/Album/Album";
import { Signup } from "./components/AuthenticationForms/Signup";
import { Artist } from "./components/Artist/Artist";
import { Login } from "./components/AuthenticationForms/Login";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Album></Album>
        </Route>

        <Route path='/albums'>
          <Album></Album>
        </Route>

        <Route path="/artist">
          <Artist></Artist>
        </Route>

        <Route path="/register">
          <Signup></Signup>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
