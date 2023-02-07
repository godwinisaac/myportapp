import React from "react";
import Banner from "./Components/banner/Banner";
import Contact from "./Components/Contact/Contact";
import Features from "./Components/features/Features";
import Footer from "./Components/Footer/Footer";
import FooterBottom from "./Components/Footer/FooterBottom";

import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightColor px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
