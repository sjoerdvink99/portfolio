import React from "react";
import Project from "./Project";
import { projectInfo } from "./projectInfo";
import Education from "./Education";
import Experience from "./Experience";
import banner from "./assets/banner.jpg";
import Awards from "./Awards";
import Accordion, { AccordionItem } from "./Accordion";

export default function Portfolio() {
  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <div
        className="space-y-2 mb-4 rounded-lg text-white text-center h-40 flex justify-center items-center p-4"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="text-2xl font-bold">
          Turning Data Into Information, and Information Into Insight
        </h1>
      </div>
      <div className="space-y-2 mb-2">
        <Accordion>
          <AccordionItem value="0" trigger="Leadership & Awards">
            <Awards />
          </AccordionItem>
          <AccordionItem value="1" trigger="Education">
            <Education />
          </AccordionItem>
          <AccordionItem value="2" trigger="Experience">
            <Experience />
          </AccordionItem>
          <AccordionItem value="3" trigger="Featured Projects">
            <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {projectInfo.map((project) => (
                <Project
                  key={project.name}
                  title={project.name}
                  date={project.date}
                  link={project.link}
                  skills={project.skills}
                  description={project.description}
                  image={project.imagePath}
                />
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
