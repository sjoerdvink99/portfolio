import React from "react";
import Project from "./Project";
import { projectInfo } from "./projectInfo";
import Education from "./Education";
import Experience from "./Experience";
import banner from "./assets/banner.jpg";
import Awards from "./Awards";

export default function Portfolio() {
  const [awardsOpen, setAwardsOpen] = React.useState(false);
  const [educationOpen, setEducationOpen] = React.useState(false);
  const [experienceOpen, setExperienceOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(true);

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
        <div className="border rounded-lg">
          <div
            className={`flex justify-between p-4 cursor-pointer ${
              !awardsOpen && "hover:bg-slate-100 transition-colors ease-in-out"
            }`}
            onClick={() => setAwardsOpen(!awardsOpen)}
          >
            <span className="font-semibold">Leadership & Awards</span>
            <span>{awardsOpen ? "-" : "+"}</span>
          </div>
          <div
            className={`p-4 transition-[height] duration-300 ease-in ${
              !awardsOpen && "hidden"
            }`}
          >
            <Awards />
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-2">
        <div className="border rounded-lg">
          <div
            className={`flex justify-between p-4 cursor-pointer ${
              !educationOpen &&
              "hover:bg-slate-100 transition-colors ease-in-out"
            }`}
            onClick={() => setEducationOpen(!educationOpen)}
          >
            <span className="font-semibold">Education</span>
            <span>{educationOpen ? "-" : "+"}</span>
          </div>
          {educationOpen && (
            <div className="p-4">
              <Education />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2 mb-2">
        <div className="border rounded-lg">
          <div
            className={`flex justify-between p-4 cursor-pointer ${
              !experienceOpen &&
              "hover:bg-slate-100 transition-colors ease-in-out"
            }`}
            onClick={() => setExperienceOpen(!experienceOpen)}
          >
            <span className="font-semibold">Experience</span>
            <span>{experienceOpen ? "-" : "+"}</span>
          </div>
          {experienceOpen && (
            <div className="p-4">
              <Experience />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2 mb-2">
        <div className="border rounded-lg">
          <div
            className={`flex justify-between p-4 cursor-pointer ${
              !projectsOpen &&
              "hover:bg-slate-100 transition-colors ease-in-out"
            } `}
            onClick={() => setProjectsOpen(!projectsOpen)}
          >
            <span className="font-semibold">Featured Projects</span>
            <span>{projectsOpen ? "-" : "+"}</span>
          </div>
          {projectsOpen && (
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
          )}
        </div>
      </div>
    </div>
  );
}
