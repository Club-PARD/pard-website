import React from "react";
import { Route } from "react-router";

function App() {
  return (
    <Route>
      <Route path="/" />
      <Route path="/About" />
      <Route path="/Inquiry" />
      <Route path="/Recruiting" />
      <Route path="/Project" />
      <Route path="/Project/:projectId" />
      <Route path="/pard-website" />
      <Route path="/news" />
      <Route path="*" />
    </Route>
  );
}

export default App;
