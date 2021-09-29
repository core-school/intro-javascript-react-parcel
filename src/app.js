import React from "react";
import ReactDOM from "react-dom";
import { Hero } from "./Hero";

// Declaramos la variable App como un component de react
const App = () => (
  <div>
    <h1>Hola desde React!!!!</h1>
    <div style={{display:"grid", "gridTemplateColumns":"1fr 1fr"}}>
        <Hero />
        <Hero />
        <Hero />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
