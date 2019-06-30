import React from "react";
import "./style.css";
function PlayCard(props) {
  return (
    



<div> 
  
    <div className="card">
      <div className="img-container  .mx-auto" onClick={() => props.RecordClick(props.name)}>
        <img alt={props.name} src={props.image}/>
      </div>
      
        </div>
    </div>
  );
}

export default PlayCard;
