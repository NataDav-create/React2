import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Features />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
