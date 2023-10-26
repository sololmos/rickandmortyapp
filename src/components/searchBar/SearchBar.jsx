import "./SearchBar.css"
import React from "react";

export default function SearchBar(props) {
    return (
      <div className="SearchBar-cont">
        <h5>SearchBar</h5>
        <input type="search" placeholder="Agrega un personaje.."></input>
        <button onClick={props.onSearch}>Agregar</button>
        
      </div>
    );
  }