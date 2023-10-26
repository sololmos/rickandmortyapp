import "./Cards.css"
import React from "react";
import Card from "../card/Card";

export default function Cards(props) {
  
    return (
      <div className="Cards-cont">
        <h1>CardS</h1>
        {props.characters.map(pj=>{
          return <Card
          key={pj.id} 
          id={ pj.id}
          name={ pj.name}
          status={ pj.status}
          species={ pj.species}
          gender={ pj.gender}
          origin={ pj.origin.name}
          image={ pj.image}
          onClose={()=>window.alert("close card")}
          ></Card>
        })}
        
      </div>
    );
  }