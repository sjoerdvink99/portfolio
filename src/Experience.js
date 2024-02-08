import React from "react";

export default function Experience() {
  return (
    <div className="mb-4">
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Tufts University</h3>
          <p className="text-slate-400 text-sm font-light hidden md:block">
            Boston, MA (USA)
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-between">
          <p className="text-slate-400 text-sm font-medium">
            Visiting Research Scholar
          </p>
          <p className="text-slate-400 text-sm font-light">
            April 2024 - July 2024
          </p>
        </div>
        <p className="text-sm font-light">
          Thesis on Automated Design of Network Visualizations.
        </p>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">GraphPolaris</h3>
          <p className="text-slate-400 text-sm font-light hidden md:block">
            Utrecht, NL
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-between">
          <p className="text-slate-400 text-sm font-medium">
            Software Engineer
          </p>
          <p className="text-slate-400 text-sm font-light">
            April 2023 - Present
          </p>
        </div>
        <p className="text-sm font-light">
          Building the future of graph analytics and visualisation.
        </p>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Utrecht University</h3>
          <p className="text-slate-400 text-sm font-light hidden md:block">
            Utrecht, NL
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-between">
          <p className="text-slate-400 text-sm font-medium">
            Teaching Assistant
          </p>
          <p className="text-slate-400 text-sm font-light">Spring 2023</p>
        </div>
        <p className="text-sm font-light">
          Assistant in the Web Technology course, covering methods and
          techniques for both front-end and back-end development of
          web-applications.
        </p>
      </div>
      <div className="border p-5 rounded-sm mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Various Companies</h3>
          <p className="text-slate-400 text-sm font-light hidden md:block">
            Utrecht, NL
          </p>
        </div>
        <div className="flex flex-col md:items-center md:flex-row justify-between">
          <p className="text-slate-400 text-sm font-medium">
            Freelance Web Developer
          </p>
          <p className="text-slate-400 text-sm font-light">2020 - 2023</p>
        </div>
        <p className="text-sm font-light">
          Developed responsive and user-friendly websites tailored to the unique
          needs of local businesses.
        </p>
      </div>
    </div>
  );
}
