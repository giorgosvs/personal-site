import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

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
      <h1>personal</h1>
      <h1>portfolio</h1>
    </>
  ) : (
    <>
      <div><h1>p e r s o n a l</h1></div>
      <h1>portfolio</h1>
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
        <div id="title" className={isMobile ? "mobile-center" : ""}>
    {contentb}
  </div>
      </motion.header>
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
      </header>
    </>
  );
};
