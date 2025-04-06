import React from "react";
import { SectionItem } from "./SectionItem";
import { motion } from "framer-motion";

const projects = [
  {
    id:1,
    title: `"myAttendances"`,
    description: "Implementation of an electronic attendance system for educational facilities",
    languages: ["JavaScript", "MySQL", "HTML", "CSS"],
    stack: ["Node.js", "React", "Material UI"],
    link: "https://github.com/giorgosvs/myAttendances",
  },
  {
    id:2,
    title: `"GeofencingAPI"`,
    description: "Location monitoring application using Google's Geofence API",
    languages: ["Java"],
    stack: ["Android", "Google's geofence API"],
    link: "https://github.com/giorgosvs/GeofencingAPI",
  },
  {
    id:3,
    title: `"deliverymenu"`,
    description: "A dummy food ordering web application built with React",
    languages: ["JavaScript", "HTML", "CSS"],
    stack: ["React"],
    link: "https://github.com/giorgosvs/deliverymenu",
  },
];

export const Section = () => {
  return (
    <motion.ul
      id="sections"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {projects.map((project, index) => (
       <SectionItem key={project.id} project={project} index={index}/>
      ))}
    </motion.ul>
  );
};
