import React from "react";
import sjoerd from "./assets/sjoerd.jpg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/mail.svg";
import medium from "./assets/medium.svg";

const skills = [
  "Data-Science",
  "Machine-learning",
  "Cloud computing",
  "Web development",
];

export default function Profile() {
  return (
    <div className="flex-shrink-0 w-full md:w-1/4 md:mr-4">
      <div className="basis-1/4 w-full flex-shrink-0 bg-slate-100	p-6 rounded shadow">
        <img src={sjoerd} className="rounded-full h-36" alt="Sjoerd Vink" />
        <h1 className="font-semibold mt-3">Sjoerd Vink</h1>
        <p className="text-sm font-light">
          Data Scientist | Master of Science in Applied Data Science
        </p>
        <p className="text-slate-400 text-sm font-light">The Netherlands</p>

        <div className="mt-3 flex">
          <a
            href="https://www.linkedin.com/in/sjoerdvink/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} className="mr-1" alt="linkedin profile" />
          </a>
          <a
            href="https://sjoerdvink.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={medium} className="mr-1" alt="medium" />
          </a>
          <a
            href="mailto:sjoerdvink@icloud.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="email" />
          </a>
        </div>

        <h1 className="font-semibold mt-3">About</h1>
        <p className="text-sm font-light">
          Engineer with 2+ years of industry experience and a strong interest in
          machine-learning, software development, and cloud computing. My true
          passion lies in dynamic environments where I can harness the power of
          science and engineering to drive innovation.
        </p>

        <h1 className="font-semibold mt-3 w-">Skills</h1>
        <div className="w-full flex flex-wrap">
          {skills.map((skill) => (
            <p className="text-sm font-light py-1 px-2 bg-indigo-50 rounded-full m-1 text-indigo-700">
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
