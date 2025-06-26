// PlayedLike.js
import React from "react";
import "./PlayedLike.css";
import reet_img from "../../assets/images/reet_img.png";

const PlayedLike = () => {
  return (
    <div className="played-container">
      <h1 className="played-title">YOU PLAYED LIKE</h1>
      <div className="played-card">
        <div className="img_container">
          <img src={reet_img} alt="TSM Reet" className="reet-img" />
        </div>

        <div className="content-container">
          <div className="played-info">
            <div className="why-reet">
              <h3>WHY REET?</h3>
              <p>
                <span className="green">87% </span>
                <span className="normal">SIMILARITY</span>
              </p>

              <div className="info-block">
                <p className="played-label">Weapon preference</p>
                <p>You both prefer Phantom</p>
              </div>
              <div className="info-block">
                <p className="played-label">Playstyle trait</p>
                <p>Aggressive entry, fast rotation</p>
              </div>
              <div className="info-block">
                <p className="played-label">Role similarity</p>
                <p>Both play Duelist or Entry Fragger</p>
              </div>
            </div>

            <div className="stat-comparison">
              <div className="stat-column">
                <h4>YOU</h4>
                <p className="stat-container">
                  78 <span className="stat-label">TWITCH</span>
                </p>
                <p className="stat-container">
                  73 <span className="stat-label">TARGETING</span>
                </p>
                <p className="stat-container">
                  69 <span className="stat-label">TRACKING</span>
                </p>
              </div>
              <div className="played-divider" />
              <div className="stat-column">
                <h4>REET</h4>
                <p className="stat-container">
                  82 <span className="stat-label">TWITCH</span>
                </p>
                <p className="stat-container">
                  71 <span className="stat-label">TARGETING</span>
                </p>
                <p className="stat-container">
                  75 <span className="stat-label">TRACKING</span>
                </p>
              </div>
            </div>
          </div>

          <div className="reet-name">TSM REET</div>
        </div>
      </div>

      <button className="analyze-button">ANALYZE REET'S GAMEPLAY ➤</button>
    </div>
  );
};

export default PlayedLike;
