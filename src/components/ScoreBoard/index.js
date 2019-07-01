import React from "react";
import "./style.css";

const ScoreBoard=props => (
 

    <div className="Score">
      
<h3><b> {props.Message}</b></h3>

      <h2>
        

        Current Score: <span id="CurrentScore">{props.count} </span> Top Score: 
        <span id="topscore"> {props.TopCount}</span>
      </h2>{" "}
    </div>
   
  
   
);

export default ScoreBoard;
