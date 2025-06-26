import React from "react";
import "./CareerAverages.css";

const stats = [
  ["5.8", "ELIMINATIONS"],
  ["1.6", "HEADSHOTS"],
  ["1.1", "FIRST BLOODS"],
  ["00", "WALLBANGS"],

  ["1.1", "ASSISTS"],
  ["00", "WAS ASSISTED"],
  ["130", "HEALING"],
  ["00", "SHIELDING"],

  ["1.1", "DEATHS"],
  ["600", "SECONDS ALIVE"],
  ["130", "SECONDS DEAD"],
  ["00", "FIRST BLOODED"],

  ["17,000", "CREDITS EARNED"],
  ["15,000", "CREDITS SPENT"],
  ["00", "SHIELD DAMAGE"],
  ["570", "DAMAGE TAKEN"],
];

const CareerAverages = () => {
  return (
    <div className="career-container">
      <div className="career-banner-img">
        <h1>CAREER AVERAGES</h1>
      </div>

      <div className="career-grid">
        {[0, 1, 2, 3].map((colIndex) => (
          <div className="career-column" key={colIndex}>
            {stats
              .slice(colIndex * 4, colIndex * 4 + 4)
              .map(([value, label], index) => (
                <div className="career-stat" key={index}>
                  <p className="stat-value">{value}</p>
                  <p className="stat-label">{label}</p>
                </div>
              ))}
          </div>
        ))}
      </div>

      <p className="note">*Per 10mins of game play</p>
    </div>
  );
};

export default CareerAverages;
