import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Eric Tsendjav",
  title: "Software Engineer",
  email: "erdenesukh@gmail.com",
  gitHub: "sukh0128",
  linkedIn: "erdenesukh-tsendjav"
};

const primaryColor = "#000000";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;
