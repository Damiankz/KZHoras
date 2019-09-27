import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Calendar from "./components/Calendar";

function App() {
  return <Calendar styles={{ heigth: "600px", fontFamily: 'Rubik' }} />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
