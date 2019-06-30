import React from "react";
import "./style.css";
function PlayCard(props) {
  return (
    
    



<div> 
  
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      
      <span onClick={() => props.RecordClick(props.id)} className="record">
        𝘅
      </span>
    </div>
    </div>
  );
}

export default PlayCard;
