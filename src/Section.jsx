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
    date: "02/2025",
  },
  {
    id:2,
    title: `"GeofencingAPI"`,
    description: "Location monitoring application using Google's Geofence API",
    languages: ["Java"],
    stack: ["Android", "Google's Geofence API"],
    link: "https://github.com/giorgosvs/GeofencingAPI",
    date: "02/2023",
  },
  {
    id:3,
    title: `"deliverymenu"`,
    description: "A dummy food ordering web application built with React",
    languages: ["JavaScript", "HTML", "CSS"],
    stack: ["React"],
    link: "https://github.com/giorgosvs/deliverymenu",
    date: "04/2025"
  },
  {
    id:4,
    title: `"TuneFind"`,
    description: "A web application that integrates the iTunes API to search and browse music tracks, albums, artists, and podcasts",
    languages: ["JavaScript", "HTML", "CSS"],
    stack: ["React","Material UI"],
    link: "https://github.com/giorgosvs/TuneFind",
    date:"05/2025"
  },
];

export const Section = () => {

  //sort items logic
  const sortedProjects = [...projects].sort((a, b) => {
    const [monthA, yearA] = a.date.split("/").map(Number);
    const [monthB, yearB] = b.date.split("/").map(Number);
    return yearB - yearA || monthB - monthA;
  });

  return (
    <motion.ul
      id="sections"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {sortedProjects.map((project, index) => (
       <SectionItem key={project.id} project={project} index={index}/>
      ))}
    </motion.ul>
  );
};
