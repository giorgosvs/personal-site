import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const SectionItem = ({project,index}) => {

  const formatDate = (dateStr) => {
    const [month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1); // month is 0-based
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
  };

  return (
    <motion.li
          key={index}
          className="section-item"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
      <article>
        <h2>{project.title}</h2>
        <p className="project-date">{formatDate(project.date)}</p>
        <p>{project.description}</p>

        <div className="chip-group">
          {project.languages.map((lang, i) => (
            <span key={i} className="chip">
              {lang}
            </span>
          ))}
        </div>

        <div className="chip-group">
          {project.stack.map((tech, i) => (
            <span key={i} className="chip secondary">
              {tech}
            </span>
          ))}
        </div>
        <p>
          <a href={project.link} target="_blank" rel="noreferrer">
            <Button>View Code</Button>
          </a>
        </p>
      </article>
      </motion.li>
  );
};
