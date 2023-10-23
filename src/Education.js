import React from "react";

export default function Education() {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 sm:gap-0">
        <div className="border p-5 rounded-sm shadow">
          <h3 className="font-semibold">MSc Applied Data-Science</h3>
          <p className="text-slate-400 text-sm font-light">
            Utrecht University (2023 - 2024)
          </p>
        </div>
        <div className="border p-5 rounded-sm shadow">
          <h3 className="font-semibold">BSc Information Science</h3>
          <p className="text-slate-400 text-sm font-light">
            Utrecht University (2020 - 2023)
          </p>
          <p className="text-sm font-light">
            Exchange: University of Wisconsin-Madison (Fall 2022)
          </p>
        </div>
        <div className="border p-5 rounded-sm shadow">
          <h3 className="font-semibold">BA Sports management</h3>
          <p className="text-slate-400 text-sm font-light">
            Windesheim University (2016 - 2020)
          </p>
          <p className="text-sm font-light">Minor in Marketing Management</p>
        </div>
      </div>
    </div>
  );
}
