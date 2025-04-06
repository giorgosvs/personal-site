import React from "react";
import { motion } from "framer-motion";

export const Card = ({ title, content, image }) => {
  return (
    <motion.div className="card" id="card"
    initial={{ opacity: 0,  y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}>
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-content">
        <h2>{title}</h2>
        {content}
      </div>
    </motion.div>
  );
};
