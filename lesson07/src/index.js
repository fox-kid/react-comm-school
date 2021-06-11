import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./Footer";

const list = [<App />, <Footer />];
const elements = <div>{list.map((element) => element)}</div>;
ReactDOM.render(elements, document.getElementById("root"));
