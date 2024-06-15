import { useState } from "react";
import Navigation from "./components/Navigation";
import SlideImage from "./components/SlideImage";
import ProjectsHeading from "./components/ProjectsHeading";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <SlideImage />
        <ProjectsHeading />
        <Projects />
      </div>
    </>
  );
}

export default App;
