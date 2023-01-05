import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="bg-gray-100 h-screen">
    <Header />
    <Board />
    <Footer />
  </div>
);

reportWebVitals();
