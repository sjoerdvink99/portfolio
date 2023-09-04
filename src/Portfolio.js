import React from "react";
import Project from "./Project";
import { projectInfo } from "./projectInfo";
import Education from "./Education";
import Experience from "./Experience";

export default function Portfolio() {
  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <Education />
      <Experience />
      <div className="">
        <h2 className="font-semibold mb-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projectInfo.map((project) => (
            <Project
              key={project.name}
              title={project.name}
              date={project.date}
              link={project.link}
              skills={project.skills}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
