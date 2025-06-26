// LastMatch.js
import React from "react";
import "./LastMatch.css";
import last_game from "../../assets/images/last_game.png";
import gun_img from "../../assets/images/gun_img.png";

const LastMatch = () => {
  return (
    <div className="match-container">
      <div className="header-banner-img">
        <h1>YOUR LAST MATCH</h1>
      </div>

      <div className="match-body">
        <img src={last_game} alt="agent" className="agent-img" />

        <div className="stats">
          <h2 className="player-name">Dhyey</h2>

          <div className="gray-line" />

          <div className="row">
            <div className="col">
              <p className="label">GAME</p>
              <p className="value">VALORANT</p>
            </div>

            <div className="col"></div>

            <div className="col">
              <p className="label">BEST WEAPONS</p>
              <p className="value">PHANTOM</p>
            </div>
            <div className="col">
              <p className="label">36% HITS</p>
              <p className="value weapon">
                <img src={gun_img} alt="phantom" className="gun" />
              </p>
            </div>
          </div>

          <div className="gray-line2" />

          <div className="row">
            <div className="col">
              <p className="label">MAP</p>
              <p className="value">HAVEN</p>
            </div>
            <div className="col">
              <p className="label">MATCH TIME</p>
              <p className="value">24:28</p>
            </div>
            <div className="col">
              <p className="label">LOST ON HAVEN</p>
              <p className="loss-score">
                <span className="red">4</span> -{" "}
                <span className="white">8</span>
              </p>
            </div>
            <div className="col"></div>
          </div>

          <div className="gray-line2" />

          <div className="row bottom">
            <div className="col">
              <p className="label">KILLS</p>
              <p className="value">11</p>
            </div>
            <div className="col">
              <p className="label">HEADSHOTS</p>
              <p className="value">
                03 <span className="green">27%</span>
              </p>
            </div>
            <div className="col">
              <p className="label">FIRST BLOOD</p>
              <p className="value">02</p>
            </div>
            <div className="col">
              <p className="label">DEATH</p>
              <p className="value">03</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMatch;
