import React from "react";

export default function Experience() {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-2">Experience</h2>
      <div className="border-b-2 border-indigo-500 mb-2"></div>
      <div className="border p-5 rounded-sm shadow mb-4">
        <h3 className="font-semibold">Software Engineer @ GraphPolaris</h3>
        <p className="text-slate-400 text-sm font-light">
          Utrecht (April 2023 - Present)
        </p>
        <p className="text-sm font-light">
          Building the future of graph analytics and visualisation with an
          amazing team. My present focus mainly revolves around crafting a
          geospatial graph visualization feature, aimed at unraveling intricate
          geo-temporal relations.
        </p>
      </div>
      <div className="border p-5 rounded-sm shadow mb-4">
        <h3 className="font-semibold">
          Teaching Assistant @ Utrecht University
        </h3>
        <p className="text-slate-400 text-sm font-light">
          Utrecht (Spring 2023)
        </p>
        <p className="text-sm font-light">
          Assistant in the Web Technology course (INFOB2WT) under Dr. Sergey
          Sosnovsky. Covering methods and techniques for both front-end and
          back-end development of web-applications.
        </p>
      </div>
      <div className="border p-5 rounded-sm shadow mb-4">
        <h3 className="font-semibold">
          Freelance Web Developer @ Various Companies
        </h3>
        <p className="text-slate-400 text-sm font-light">
          Utrecht (2020 - 2023)
        </p>
        <p className="text-sm font-light">
          Developed responsive and user-friendly websites tailored to the unique
          needs of local businesses, leading to increased online traffic and
          enhanced customer engagement. Provided consistent maintenance and
          support services, guaranteeing optimal website performance and
          seamless functionality over time.
        </p>
      </div>
    </div>
  );
}
