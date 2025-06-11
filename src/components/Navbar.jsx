import React, { useState, useEffect } from "react";
import Button from "./Button";

function Navbar({ onNavigate, activeSection }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section) => {
    if (section === "resume") {
      // Replace this URL with your actual resume URL
      window.open(
        "https://drive.google.com/file/d/1qhZaSvHig46n6BPlufaHV7ml3tzGoO7b/view?usp=sharing",
        "_blank"
      );
    } else {
      onNavigate(section);
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        hasScrolled && !isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="max-w-screen-xl mx-auto py-6 flex gap-10 items-center justify-between border-b-[1px] border-zinc-700 bg-zinc-900">
        <div className="nleft flex items-center">
          <img src="42.png" alt="logo" />
          <nav className="links flex gap-14 ml-20">
            {["Home", "Work", "About", "", "Resume"].map((elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
              ) : (
                <button
                  key={index}
                  className="relative font-regular text-sm flex items-center gap-1 hover:text-zinc-300 transition-colors z-10"
                  onClick={() => handleNavigation(elem.toLowerCase())}
                >
                  {activeSection === elem.toLowerCase() && (
                    <span
                      style={{ boxShadow: "0 0 0.45em #00ff19" }}
                      className="inline-block w-1 h-1 rounded-full bg-green-500"
                    ></span>
                  )}
                  {elem}
                </button>
              )
            )}
          </nav>
        </div>
        <Button
        onClick={() => handleNavigation("about")}
        />
      </div>
    </div>
  );
}

export default Navbar;
