import React from "react";
import "./CompareSection.css";
import Images from "../../assets/images/index";

const CompareSection = () => {
  return (
    <div className="compare-container">
      <div className="header-banner-img">
        <h1>COMPARE YOURSELF</h1>
      </div>

      <div className="compare-card-container">
        {/* Left Side */}
        <div className="compare-card">
          <img src={Images.lines} alt="left bar" className="side-bar left" />
          <div className="background-shape left"></div>
          <img src={Images.reet_img} alt="You" className="player-img left" />
          <p className="compare-label">YOU</p>
        </div>

        <img src={Images.vs} alt="VS" className="compare-vs" />

        {/* Right Side */}
        <div className="compare-card">
          <img src={Images.lines} alt="right bar" className="side-bar right" />
          <div className="background-shape right"></div>
          <img
            src={Images.reet_img}
            alt="Opponent"
            className="player-img right"
          />
          <p className="compare-label">REET</p>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
