import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return (
        <div id="playerStats">
            <h1> John Chibuzor Anih Level 15</h1>
            <div id="playerStats_lines">
                <span id="playerStats_lines_thick"></span>
                <span id="playerStats_lines_thin"></span>
            </div>
            <h2>Data Scientist</h2>
        </div>
    );
}

export default PlayerStats;