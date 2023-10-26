import "./Card.css";
import React from "react";

export default function Card(props) {
    return (
      <div className="Card-cont">
        <h3>Card</h3>
        <button onClick={props.onClose}>X</button>
        <h2>{props.name}</h2>
        <h4>{props.gender}</h4>
        <h4>{props.species}</h4>
        <h4>{props.status}</h4>
        <h4>{props.origin}</h4>
        
        <img alt={props.name } src={props.image}></img>
        
      </div>
    );
  }