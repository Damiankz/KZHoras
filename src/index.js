import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Month from "./Month";
import Calendar from "./Calendar";

function App() {
  return <Calendar styles={{ heigth: "600px" }} />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
