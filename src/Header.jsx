import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import Typewriter from "typewriter-effect";
import profileimg from "./assets/profileimg.jpeg";

export const Header = ({ currentView, onChangeView }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const contentb = isMobile ? (
    <>
      <h1>p e r s o n a l<br />portfolio</h1>
    </>
  ) : (
    <>
      <h1>p e r s o n a l portfolio</h1>
    </>
  );

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          onClick={() => onChangeView("")}
          id="title"
          className={isMobile ? "mobile-center" : ""}
        >
          {contentb}
        </div>
      </motion.header>
      <AnimatePresence>
        {currentView === "" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <section className="hero">
              {/* <img src={profileimg} alt="Avatar" className="hero-avatar" /> */}

              <h1 className="hero-main">Hi, I'm Giorgos.</h1>
              <div className="typewriter-wrapper">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer.",
                      "UI/UX Enthusiast.",
                      "React Lover.",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000,
                  }}
                />
              </div>
              <div className="typewriter-wrapper">...</div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
      <header id="sub-header">
        <nav className="nav-center">
          <Button
            textOnly
            className={currentView === "about" ? "active" : ""}
            onClick={() => onChangeView("about")}
          >
            About
          </Button>
          <Button
            textOnly
            className={currentView === "projects" ? "active" : ""}
            onClick={() => onChangeView("projects")}
          >
            Projects
          </Button>
          <Button
            textOnly
            className={currentView === "contact" ? "active" : ""}
            onClick={() => onChangeView("contact")}
          >
            Contact Info
          </Button>
        </nav>
        {/* {currentView === "" && (
          <div className="typewriter-wrapper">
            <Typewriter
              options={{
                strings: [
                  "Web Developer.",
                  "UI/UX Enthusiast.",
                  "React Lover.",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </div>
        )} */}
      </header>
    </>
  );
};
