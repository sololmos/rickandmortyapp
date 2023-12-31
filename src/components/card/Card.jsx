import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (

    <div className="card">
      <button className="button-card" onClick={()=>props.onClose(props.id)}>
        X
      </button>
      <Link className="link-card" to={`/detail/${props.id}`}>
      <img className="profileImage" alt={props.name} src={props.image}></img>
      <div className="name">{props.name}</div>
      </Link>
      
      
      <div className="textContainer">
        
        <div className="profile">{props.gender}</div>
        <div className="profile">{props.species}</div>
        <div className="profile">{props.status}</div>
        <div className="profile">{props.origin.name}</div>
      </div>
    </div>
  );
}
