import "./Card.css";
import React from "react";

export default function Card(props) {
  return (
    // <div className="Card-cont">
    //   <h3>Card</h3>
    //   <button onClick={props.onClose}>X</button>
    //   <h2>{props.name}</h2>
    //   <h4>{props.gender}</h4>
    //   <h4>{props.species}</h4>
    //   <h4>{props.status}</h4>
    //   <h4>{props.origin}</h4>

    //   <img alt={props.name } src={props.image}></img>

    // </div>
    //-------------------------------------
    <div className="card">
      <button className="button-card" onClick={props.onClose}>
        X
      </button>

      <img className="profileImage" alt={props.name} src={props.image}></img>

      <div className="textContainer">
        <div className="name">{props.name}</div>
        <div className="profile">{props.gender}</div>
        <div className="profile">{props.species}</div>
        <div className="profile">{props.status}</div>
        <div className="profile">{props.origin.name}</div>
      </div>
    </div>
  );
}
