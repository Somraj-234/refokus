import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  const handleScroll = (target) => {
    if (locomotiveScrollRef.current) {
      const element = document.querySelector(`#${target}`);
      if (element) {
        locomotiveScrollRef.current.scrollTo(element);
        setActiveSection(target);
      }
    }
  };

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    const handleScrollObserver = () => {
      const sections = ["home", "work", "about"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollObserver);
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
      window.removeEventListener("scroll", handleScrollObserver);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full bg-zinc-900 font-['Satoshi'] text-white"
    >
      <Navbar activeSection={activeSection} onNavigate={handleScroll} />
      <div id="home" data-scroll-section>
        <Work />
      </div>
      {/* <Stripes /> */}
      <div id="work" data-scroll-section>
        <Products />
      </div>
      <Marquees />
      <div id="about" data-scroll-section>
        <Cards />
      </div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
