import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faChartColumn,
  faChevronDown,
  faUser,
  faGear,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [selectedGame, setSelectedGame] = useState("Valorant");
  const [gameDropdownOpen, setGameDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setGameDropdownOpen(false);
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="brand">
            <div className="logo">
              <img
                src="https://omnicweb.s3.amazonaws.com/assets/img/logos/inverted_logo.svg"
                alt="Omnic Forge Logo"
              />
            </div>
            <span className="brand-text">Omnic Forge</span>
          </div>

          <div className="dropdown">
            <button
              className="game-selector"
              onClick={(e) => {
                e.stopPropagation();
                setGameDropdownOpen((prev) => !prev);
              }}
            >
              {selectedGame}
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            </button>
            {gameDropdownOpen && (
              <div className="dropdown-menu">
                {[
                  "Fortnite",
                  "Madden NFL",
                  "Overwatch 2",
                  "Rocket League",
                  "Valorant",
                ].map((game) => (
                  <div
                    key={game}
                    className="dropdown-item"
                    onClick={() => {
                      setSelectedGame(game);
                      setGameDropdownOpen(false);
                    }}
                  >
                    {game}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="navbar-right">
          <button className="analyze-btn">
            <FontAwesomeIcon icon={faChartColumn} />
            Analyze a Match
          </button>

          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <button className="icon-btn notification-btn">
            <FontAwesomeIcon icon={faBell} />
            <div className="notification-dot"></div>
          </button>

          <div className="dropdown">
            <button
              className="user-btn"
              onClick={(e) => {
                e.stopPropagation();
                setUserDropdownOpen((prev) => !prev);
              }}
            >
              <div className="avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <FontAwesomeIcon className="chevron" icon={faChevronDown} />
            </button>
            {userDropdownOpen && (
              <div className="dropdown-menu user-menu">
                <div className="dropdown-item">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </div>
                <div className="dropdown-item">
                  {" "}
                  <FontAwesomeIcon icon={faGear} /> Settings
                </div>
                <div className="dropdown-item">
                  {" "}
                  <FontAwesomeIcon icon={faTrophy} /> Achievements
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
