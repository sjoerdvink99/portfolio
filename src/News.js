import React from "react";

const news = [
  {
    emoji: "🏆",
    date: "September 2024",
    text: "Starting new position as as visiting research scholar at Tufts Unversity's VALT.",
  },
  {
    emoji: "🏆",
    date: "September 2024",
    text: "Starting new position as PhD candidate at Utrecht University.",
  },
  {
    emoji: "🎓",
    date: "July 2024",
    text: "Graduated from Master of Science in Data-Science at Utrecht University.",
  },
];

export default function News() {
  return (
    <div>
      {news.map((item, index) => (
        <div key={index} className="mb-6">
          <p>
            {item.emoji}{" "}
            <span className="bg-gray-100 p-2 shadow rounded">{item.date}</span>:{" "}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
