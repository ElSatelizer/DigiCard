import React from "react";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Info from "./components/Info";

const App = () => {
  return (
    <div className="App">
      <div className="DigitalCard">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
