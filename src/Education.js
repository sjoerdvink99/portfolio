import React from "react";

export default function Education() {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 sm:gap-0">
        <div className="border p-5 rounded-sm">
          <h3 className="font-semibold">MSc Applied Data-Science</h3>
          <p className="text-slate-400 text-sm font-light">
            Utrecht University (2023 - 2024)
          </p>
          <div className="flex flex-wrap mt-2">
            {["Data Wrangling", "Machine Learning", "LLMs", "Big Data"].map(
              (skill) => (
                <p className="text-xs font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
                  {skill}
                </p>
              )
            )}
          </div>
          <p className="text-sm font-light">
            Expected graduation date: July 2024
          </p>
        </div>
        <div className="border p-5 rounded-sm">
          <h3 className="font-semibold">BSc Information Science</h3>
          <p className="text-slate-400 text-sm font-light">
            Utrecht University (2020 - 2023)
          </p>
          <div className="flex flex-wrap mt-2">
            {["Data Analytics", "HCI", "Programming"].map((skill) => (
              <p className="text-xs font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
                {skill}
              </p>
            ))}
          </div>
          <p className="text-sm font-light">
            Exchange: University of Wisconsin-Madison (Fall 2022)
          </p>
        </div>
        <div className="border p-5 rounded-sm">
          <h3 className="font-semibold">BA Sports Studies</h3>
          <p className="text-slate-400 text-sm font-light">
            Windesheim University (2016 - 2020)
          </p>
          <div className="flex flex-wrap mt-2">
            {["Marketing", "Finance", "Project Management"].map((skill) => (
              <p className="text-xs font-light py-1 px-2 bg-blue-50 rounded-full m-1 text-blue-700">
                {skill}
              </p>
            ))}
          </div>
          <p className="text-sm font-light">
            Minor in Digital Marketing Analytics
          </p>
        </div>
      </div>
    </div>
  );
}
