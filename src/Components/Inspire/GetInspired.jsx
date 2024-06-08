// src/components/GetInspired.js
import React from "react";
import "./GetInspired.css";
import InspirationItem from "./InspirationItem";

const inspirationData = [
  {
    id: 1,
    title: "Visit the Eiffel Tower",
    description:
      "Experience the breathtaking views from the top of the Eiffel Tower.",
    imageUrl: "path/to/eiffel-tower.jpg",
  },
  {
    id: 2,
    title: "Explore the Louvre Museum",
    description: "Discover the world-famous art collections at the Louvre.",
    imageUrl: "path/to/louvre.jpg",
  },
  {
    id: 3,
    title: "Relax on the French Riviera",
    description:
      "Enjoy the stunning beaches and luxurious lifestyle of the French Riviera.",
    imageUrl: "path/to/french-riviera.jpg",
  },
];

const GetInspired = () => {
  return (
    <div className="get-inspired">
      <div className="get-inspired-header">
        <div className="get-inspired-header-h2">
          <h2>Get Inspired</h2>
        </div>
        <div className="get-inspired-buttons">
          <button>Cultural</button>
          <button>Nature and Outdorr Activities</button>
          <button>Food and Wine</button>
        </div>
      </div>
      <div className="inspiration-list">
        {inspirationData.map((item) => (
          <InspirationItem
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default GetInspired;
