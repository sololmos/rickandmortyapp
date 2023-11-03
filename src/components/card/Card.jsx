import "./Card.css";
import React from "react";

export default function Card(props) {
  return (

    <div className="card">
      <button className="button-card" onClick={()=>props.onClose(props.id)}>
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
