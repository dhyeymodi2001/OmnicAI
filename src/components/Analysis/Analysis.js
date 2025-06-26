import React from "react";
import "./Analysis.css";
import Images from "../../assets/images/index";

const SkillBox = ({ skill, score, icon }) => (
  <div className="skill-box">
    <img src={icon} alt={`${skill} icon`} className="skill-icon-img" />
    <p className="skill-label">{skill.toUpperCase()}</p>
    <p className="skill-score">{score}</p>
    <button className="skill-button">TEST YOUR SKILLS ➤</button>
  </div>
);

const Analysis = () => {
  return (
    <div className="skill-container">
      <div className="skill-banner-img">
        <h1>SKILL ANALYSIS</h1>
      </div>

      <div className="skill-grid">
        <SkillBox skill="Twitch" score={78} icon={Images.thunderbolt} />
        <SkillBox skill="Targeting" score={73} icon={Images.radar} />
        <SkillBox skill="Tracking" score={69} icon={Images.target} />
      </div>
    </div>
  );
};

export default Analysis;
