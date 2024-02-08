import React from "react";
import sjoerd from "./assets/sjoerd.jpg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/mail.svg";
import medium from "./assets/medium.svg";
import github from "./assets/github.svg";
import resume from "./assets/Resume.pdf";

const skills = [
  "Visual Analytics",
  "Data-Science",
  "Big Data",
  "Information Visualization",
];

export default function Profile() {
  return (
    <div className="flex-shrink-0 w-full md:w-1/4 md:mr-4">
      <div className="basis-1/4 w-full flex-shrink-0 bg-slate-100	p-6 rounded shadow sticky top-4">
        <img src={sjoerd} className="rounded-full h-36" alt="Sjoerd Vink" />
        <h1 className="font-semibold mt-3">Sjoerd Vink</h1>
        <p className="text-sm font-light">
          Research Engineer at{" "}
          <a href="https://graphpolaris.com/" target="_blank" rel="noreferrer">
            GraphPolaris
          </a>
        </p>
        <p className="text-slate-400 text-sm font-light">
          Utrecht, The Netherlands
        </p>

        <div className="mt-3 flex">
          <a
            href="https://github.com/sjoerdvink99"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="linkedin profile"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sjoerdvink/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="linkedin profile"
            />
          </a>
          <a
            href="https://sjoerdvink.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={medium}
              className="mr-1 hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="medium"
            />
          </a>
          <a
            href="mailto:sjoerdvink@icloud.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mail}
              className="hover:-translate-y-1 transition-all duration-150 ease-in-out"
              alt="email"
            />
          </a>
        </div>

        <h1 className="font-semibold mt-3">About</h1>
        <p className="text-sm font-light">
          Researcher with 2+ years of industry experience and a strong interest
          in building usable products that scale. My true passion lies in
          dynamic environments where I can harness the power of science and
          engineering to drive innovation.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-5 py-1 rounded-sm bg-blue-200 mt-3"
        >
          Resume
        </a>

        <h1 className="font-semibold mt-3">Research Focus</h1>
        <div className="w-full flex flex-wrap">
          {skills.map((skill) => (
            <p className="text-sm font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
