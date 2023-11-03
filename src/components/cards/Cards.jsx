import "./Cards.css";
import React from "react";
import Card from "../card/Card";

export default function Cards(props) {
  return (
    <div>
      <h1>CardS</h1>
      <div className="Cards-cont">
        {props.characters.map((pj) => {
           if (pj.name){ return (
            <Card
              key={pj.id}
              id={pj.id}
              name={pj.name}
              status={pj.status}
              species={pj.species}
              gender={pj.gender}
              origin={pj.origin.name}
              image={pj.image}
              onClose={() => window.alert("close card")}
            ></Card>
          );}
          return null;
        })}
      </div>
    </div>
  );
}
