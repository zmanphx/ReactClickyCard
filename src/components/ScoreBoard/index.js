import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div className="Score">
      {" "}
      <h2>
        Current Score: <span id="CurrentScore">score </span> Top Score: 
        <span id="topscore"> topscore</span>
      </h2>{" "}
    </div>
  );
}

export default ScoreBoard;
