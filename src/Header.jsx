import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";



let contentc = (
  <>
  <h1>hey there, stranger</h1>
          <h1>welcome to my personal website</h1>
          <h1>if you're here to hire me you're already my favorite</h1>
          <h1>push my buttons for more</h1>
  </>
);

export const Header = ({ currentView, onChangeView }) => {
  return (
    <>
      <motion.header
        id="main-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div id="title">
          {contentc}
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
